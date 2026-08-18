import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; ox: number; oy: number };

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let dots: Dot[] = [];
    let frame = 0;

    const SPACING = 34;
    const RADIUS = 150;
    const STRENGTH = 28;

    const build = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = SPACING / 2; y < h; y += SPACING) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const draw = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      for (const dot of dots) {
        const dx = dot.ox - mouse.current.x;
        const dy = dot.oy - mouse.current.y;
        const dist = Math.hypot(dx, dy);

        let targetX = dot.ox;
        let targetY = dot.oy;
        let alpha = 0.18;
        let size = 1.2;

        if (dist < RADIUS) {
          const force = (1 - dist / RADIUS) ** 2;
          targetX = dot.ox + (dx / dist) * force * STRENGTH;
          targetY = dot.oy + (dy / dist) * force * STRENGTH;
          alpha = 0.18 + force * 0.7;
          size = 1.2 + force * 1.6;
        }

        dot.x += (targetX - dot.x) * 0.12;
        dot.y += (targetY - dot.y) * 0.12;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle =
          dist < RADIUS
            ? `rgba(255, 90, 31, ${alpha})`
            : `rgba(140, 137, 129, ${alpha})`;
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    build();
    draw();

    if (!reduced) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
    }
    window.addEventListener("resize", build);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", build);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}

export default DotGrid;
