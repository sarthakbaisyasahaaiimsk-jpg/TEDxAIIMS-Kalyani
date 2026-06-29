import React, { useEffect, useRef } from "react";

export default function TopographicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < 12; i++) {
        ctx.beginPath();

        ctx.strokeStyle =
          i % 4 === 0
            ? "rgba(235,0,40,0.12)"
            : "rgba(255,255,255,0.08)";

        ctx.lineWidth = i % 4 === 0 ? 1 : 0.6;

        for (let x = 0; x <= w; x += 4) {
          const y =
            h * 0.3 +
            Math.sin(x * 0.002 + time * 0.3 + i * 0.8) *
              (40 + i * 15) +
            Math.cos(x * 0.001 + time * 0.2 + i * 0.5) *
              (20 + i * 10) +
            i * 45;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const px =
          (Math.sin(time * 0.1 + i * 2.1) * 0.5 + 0.5) * w;

        const py =
          (Math.cos(time * 0.08 + i * 1.7) * 0.5 + 0.5) * h;

        const size =
          Math.sin(time * 0.5 + i) * 0.5 + 1.5;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 5 === 0
            ? "rgba(235,0,40,0.35)"
            : "rgba(255,255,255,0.12)";

        ctx.fill();
      }

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}