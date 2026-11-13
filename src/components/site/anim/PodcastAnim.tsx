// Podcast editing animation: a mini edit timeline. A playhead sweeps across a raw recording,
// the two camera tracks snap into cuts as it passes, then the four outputs appear.
// Pure SVG + CSS. Pauses off-screen; with reduced motion it shows the finished frame.
import { useEffect, useRef, useState, type CSSProperties } from "react";

const LOOP = 9; // seconds
const X0 = 78; // where the tracks start
const X1 = 452; // where the tracks end
const SWEEP_START = 6; // % of the loop
const SWEEP_END = 62;

// Camera segments: [start x, end x, active camera]
const segments: [number, number, "a" | "b"][] = [
  [X0, 140, "a"],
  [140, 196, "b"],
  [196, 262, "a"],
  [262, 318, "b"],
  [318, 384, "a"],
  [384, X1, "b"],
];

const outputs = ["Full episode", "Teaser", "Shorts", "Thumbnail"];

// Fixed pseudo-random waveform so it renders the same on every load.
const bars = Array.from({ length: 63 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 1.7) * 0.6 + Math.sin(i * 0.45) * 0.4);
  return { x: X0 + 2 + i * 6, h: 6 + v * 26, d: ((i * 37) % 11) / 10 };
});

// Percent of the loop at which the playhead reaches x.
const at = (x: number) => SWEEP_START + ((SWEEP_END - SWEEP_START) * (x - X0)) / (X1 - X0);
const pct = (n: number) => `${n.toFixed(2)}%`;

const themes = {
  light: { raw: "#e5e5e5", on: "#171717", off: "#171717", offOpacity: 0.08, text: "#737373", strong: "#171717", chip: "#ffffff", chipBorder: "rgba(0,0,0,0.08)", wave: "#a3a3a3", grid: "rgba(0,0,0,0.06)", accent: "#178a3c" },
  dark: { raw: "#2a2a2a", on: "#f5f5f5", off: "#f5f5f5", offOpacity: 0.08, text: "#8a8a8a", strong: "#f5f5f5", chip: "#161616", chipBorder: "rgba(255,255,255,0.1)", wave: "#5c5c5c", grid: "rgba(255,255,255,0.06)", accent: "#22c55e" },
};

function buildCss(id: string) {
  const rules: string[] = [];
  segments.forEach(([x], i) => {
    const t = at(x);
    // Active camera: raw grey until the playhead arrives, then solid.
    rules.push(`@keyframes ${id}-on${i}{0%,${pct(t - 0.01)}{fill:var(--raw);opacity:1}${pct(t)},90%{fill:var(--on);opacity:1}97%,100%{fill:var(--raw);opacity:1}}`);
    // Inactive camera: raw grey, then fades back.
    rules.push(`@keyframes ${id}-off${i}{0%,${pct(t - 0.01)}{fill:var(--raw);opacity:1}${pct(t)},90%{fill:var(--off);opacity:var(--off-o)}97%,100%{fill:var(--raw);opacity:1}}`);
    rules.push(`.${id} .on${i}{animation:${id}-on${i} ${LOOP}s linear infinite}`);
    rules.push(`.${id} .off${i}{animation:${id}-off${i} ${LOOP}s linear infinite}`);
    if (i > 0) {
      rules.push(`@keyframes ${id}-cut${i}{0%,${pct(t - 0.01)}{opacity:0}${pct(t + 1)},90%{opacity:1}96%,100%{opacity:0}}`);
      rules.push(`.${id} .cut${i}{animation:${id}-cut${i} ${LOOP}s linear infinite}`);
    }
  });
  outputs.forEach((_, i) => {
    const s = 66 + i * 4;
    rules.push(`@keyframes ${id}-out${i}{0%,${s}%{opacity:0;transform:translateY(6px)}${s + 3}%,90%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}`);
    rules.push(`.${id} .out${i}{animation:${id}-out${i} ${LOOP}s cubic-bezier(.2,.7,.2,1) infinite}`);
  });
  const dist = X1 - X0;
  rules.push(
    `@keyframes ${id}-head{0%,${SWEEP_START}%{transform:translateX(0);opacity:0}${SWEEP_START + 1}%{opacity:1}${SWEEP_END}%{transform:translateX(${dist}px);opacity:1}${SWEEP_END + 3}%,100%{transform:translateX(${dist}px);opacity:0}}`,
    `.${id} .head{animation:${id}-head ${LOOP}s cubic-bezier(.45,0,.55,1) infinite;opacity:0}`,
    `@keyframes ${id}-wave{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}`,
    `.${id} .bar{transform-box:fill-box;transform-origin:center;animation:${id}-wave 1.4s ease-in-out infinite}`,
    `.${id}.paused *{animation-play-state:paused!important}`,
    `@media (prefers-reduced-motion: reduce){.${id} *{animation:none!important}}`,
  );
  return rules.join("\n");
}

export default function PodcastAnim({ theme = "light", className = "" }: { theme?: "light" | "dark"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const id = `pa-${theme}`;
  const c = themes[theme];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const rows = [
    { label: "Cam A", y: 58, cam: "a" as const },
    { label: "Cam B", y: 100, cam: "b" as const },
  ];

  return (
    <div
      ref={ref}
      className={`${id} ${visible ? "" : "paused"} ${className}`}
      style={{ "--raw": c.raw, "--on": c.on, "--off": c.off, "--off-o": c.offOpacity } as CSSProperties}
      role="img"
      aria-label="An edit timeline: two camera tracks are cut into a finished episode, then a teaser, Shorts and a thumbnail appear."
    >
      <style>{buildCss(id)}</style>
      <svg viewBox="0 8 480 266" className="block h-auto w-full" fontFamily="Inter, system-ui, sans-serif">
        {/* Dashed guides */}
        {[X0, 196, 318, X1].map((x) => (
          <line key={x} x1={x} x2={x} y1={20} y2={196} stroke={c.grid} strokeDasharray="3 4" />
        ))}

        {/* Header */}
        <circle cx={28} cy={26} r={3.5} fill={c.accent} />
        <text x={38} y={30} fontSize={11} fill={c.strong} fontWeight={500}>Episode 42</text>
        <text x={X1} y={30} fontSize={11} fill={c.text} textAnchor="end">00:48:12</text>

        {/* Camera tracks */}
        {rows.map((r) => (
          <g key={r.label}>
            <text x={24} y={r.y + 19} fontSize={10.5} fill={c.text}>{r.label}</text>
            {segments.map(([x0, x1, cam], i) => (
              <rect
                key={i}
                className={cam === r.cam ? `on${i}` : `off${i}`}
                x={x0 + 1}
                y={r.y}
                width={x1 - x0 - 2}
                height={30}
                rx={5}
                fill={cam === r.cam ? c.on : c.off}
                opacity={cam === r.cam ? 1 : c.offOpacity}
              />
            ))}
          </g>
        ))}

        {/* Cut markers */}
        {segments.slice(1).map(([x], i) => (
          <circle key={x} className={`cut${i + 1}`} cx={x} cy={94} r={2.5} fill={c.accent} />
        ))}

        {/* Audio waveform */}
        <text x={24} y={165} fontSize={10.5} fill={c.text}>Audio</text>
        {bars.map((b) => (
          <rect key={b.x} className="bar" x={b.x} y={161 - b.h / 2} width={3} height={b.h} rx={1.5} fill={c.wave} style={{ animationDelay: `-${b.d}s` }} />
        ))}

        {/* Playhead */}
        <g className="head">
          <path d={`M${X0 - 5} 44 h10 l-5 6 z`} fill={c.accent} />
          <line x1={X0} x2={X0} y1={48} y2={192} stroke={c.accent} strokeWidth={1.5} />
        </g>

        {/* Outputs */}
        {outputs.map((o, i) => {
          const w = [96, 66, 64, 86][i];
          const x = [24, 128, 202, 274][i];
          return (
            <g key={o} className={`out${i}`}>
              <rect x={x} y={232} width={w} height={30} rx={15} fill={c.chip} stroke={c.chipBorder} />
              <circle cx={x + 14} cy={247} r={3} fill={c.accent} />
              <text x={x + 23} y={251} fontSize={11} fill={c.strong} fontWeight={500}>{o}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
