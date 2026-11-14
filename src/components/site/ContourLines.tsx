// Background for the dark page headers: thin wave lines stacked like a contour map,
// drifting slowly. Pauses off-screen and stays still for reduced motion.
import { useEffect, useRef } from "react";

export default function ContourLines({ seed = 0 }: { seed?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, t = 3 + seed, frame = 0, visible = true;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const lines = 22;
      ctx.lineWidth = 1;
      for (let k = 0; k < lines; k++) {
        const y0 = h * (0.35 + (k / lines) * 0.6);
        const amp = h * 0.05 * (1 + k / lines);
        const near = Math.exp(-Math.pow((k - lines * 0.55) / 4, 2));
        ctx.strokeStyle = k % 6 === 3 ? `rgba(34,197,94,${0.18 + near * 0.25})` : `rgba(255,255,255,${0.05 + near * 0.12})`;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 8) {
          const u = x / w;
          const y = y0 + Math.sin(u * 5 + t * 0.35 + k * 0.22 + seed) * amp + Math.sin(u * 11 - t * 0.5 + k * 0.4) * amp * 0.3;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const loop = () => {
      t += 0.016;
      draw();
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      if (reduce || !visible) draw();
      else frame = requestAnimationFrame(loop);
    };
    resize();
    start();
    const ro = new ResizeObserver(() => { resize(); draw(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(frame);
    });
    io.observe(canvas);
    return () => { cancelAnimationFrame(frame); ro.disconnect(); io.disconnect(); };
  }, [seed]);
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
