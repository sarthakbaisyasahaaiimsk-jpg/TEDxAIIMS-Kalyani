import React, { useRef, useEffect } from "react";

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = document.documentElement.scrollHeight * dpr;

      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = document.documentElement.scrollHeight + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;

      ctx.clearRect(0, 0, w, h);

      //--------------------------------------------------
      // Grid
      //--------------------------------------------------

      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 1;

      const grid = 90;

      for (let x = 0; x <= w; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y <= h; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      //--------------------------------------------------
      // Moving Wave Lines
      //--------------------------------------------------

      for (let i = 0; i < 18; i++) {
        ctx.beginPath();

        ctx.lineWidth = i % 4 === 0 ? 1.3 : 0.5;

        ctx.strokeStyle =
          i % 4 === 0
            ? "rgba(235,0,40,0.18)"
            : "rgba(255,255,255,0.04)";

        for (let x = 0; x <= w; x += 4) {
          const y =
            h * 0.08 +
            i * 180 +
            Math.sin(x * 0.003 + t + i) * 35 +
            Math.cos(x * 0.001 + t * 0.5) * 18;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      //--------------------------------------------------
      // Red Ambient Glow
      //--------------------------------------------------

      const glow = ctx.createRadialGradient(
        w / 2,
        h * 0.4,
        20,
        w / 2,
        h * 0.4,
        700
      );

      glow.addColorStop(0, "rgba(235,0,40,0.08)");
      glow.addColorStop(1, "rgba(235,0,40,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      //--------------------------------------------------
      // Floating Particles
      //--------------------------------------------------

      for (let i = 0; i < 120; i++) {
        const x =
          ((Math.sin(i * 8.12 + t * 0.3) + 1) / 2) * w;

        const y =
          ((Math.cos(i * 4.71 + t * 0.25) + 1) / 2) * h;

        const r = 0.8 + Math.sin(t + i) * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 12 === 0
            ? "rgba(235,0,40,0.4)"
            : "rgba(255,255,255,0.08)";

        ctx.fill();
      }

      //--------------------------------------------------

      t += 0.008;

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}