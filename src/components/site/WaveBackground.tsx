import { useEffect, useRef } from "react";

// Hero background: a slow ribbon of fine sound-wave lines drawn on a canvas.
// No video or image files. Pauses when off screen and draws one still frame
// for visitors who have reduced motion turned on.

const LINES = 110;

export default function WaveBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let t = 7; // start mid-motion so the still frame looks settled

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const mobile = width < 640;
      const cy = height * (mobile ? 0.42 : 0.46);
      const amp = height * (mobile ? 0.16 : 0.2);
      const step = Math.max(4, width / 260);

      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1); // 0..1 across the ribbon
        const phase = p * Math.PI * 1.6;
        // Brighter in the middle of the ribbon, fading to the edges.
        const glow = Math.sin(p * Math.PI);
        const alpha = 0.035 + glow * 0.11;
        // Mostly white, with a faint green tint toward the centre lines.
        const g = Math.round(255 - glow * 20);
        const rb = Math.round(255 - glow * 70);
        ctx.strokeStyle = `rgba(${rb},${g},${rb},${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();

        for (let x = -step; x <= width + step; x += step) {
          const u = x / width; // 0..1 across the screen
          // Envelope: quiet at the far left, swelling toward the right like a waveform.
          const env = 0.25 + 0.75 * Math.pow(Math.sin(Math.min(1, u * 1.05) * Math.PI * 0.92), 1.4);
          const y =
            cy +
            amp * env * Math.sin(u * 5.2 + t * 0.35 + phase) +
            amp * 0.35 * env * Math.sin(u * 11.5 - t * 0.22 + phase * 1.7) +
            (p - 0.5) * height * 0.07 * (1 - env * 0.6);
          if (x === -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = () => {
      t += 0.012;
      draw();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion || !visible) draw();
      else frame = requestAnimationFrame(loop);
    };

    resize();
    start();

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(frame);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
}
