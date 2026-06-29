import React, { useEffect, useRef } from "react";

export default function TopographicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // subtle red radial glow
      const glow = ctx.createRadialGradient(
        w / 2,
        h * 0.75,
        50,
        w / 2,
        h * 0.75,
        500
      );

      glow.addColorStop(0, "rgba(235,0,40,0.08)");
      glow.addColorStop(1, "rgba(235,0,40,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // animated contour lines
      for (let row = 0; row < 14; row++) {
        ctx.beginPath();

        ctx.lineWidth = row % 4 === 0 ? 1 : 0.6;

        ctx.strokeStyle =
          row % 4 === 0
            ? "rgba(235,0,40,0.18)"
            : "rgba(255,255,255,0.07)";

        for (let x = 0; x <= w; x += 3) {
          const nx = x / w;

          const y =
            h * 0.18 +
            row * (h / 12) +
            Math.sin(nx * 8 + row + time) * (18 + row * 1.5) +
            Math.cos(nx * 5 + row * 0.6 + time * 0.6) * 10;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      // floating particles
      for (let i = 0; i < 35; i++) {
        const a = time * 0.15 + i;

        const x = (Math.sin(a * 0.7) * 0.45 + 0.5) * w;
        const y = (Math.cos(a * 0.5) * 0.45 + 0.5) * h;

        const r = 1 + Math.sin(a) * 0.6;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 6 === 0
            ? "rgba(235,0,40,0.35)"
            : "rgba(255,255,255,0.12)";

        ctx.fill();
      }

      time += 0.01;
      animationFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}