import { ReactNode } from "react";
import { WavesBg } from "./HeroBackgrounds";

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
// Dashed guide lines on the page edges, the quiet grid that frames the light sections.
export const framed = "mx-auto w-full max-w-6xl border-x border-dashed border-black/[0.08] px-5 sm:px-8";

export const lightPage = "min-h-screen bg-[#FAFAFA] text-neutral-950";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  narrow?: boolean;
  dark?: boolean;
};

export function Section({ id, className = "", children, narrow = false, dark = false }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 ${dark ? "bg-[#050505] text-white" : ""} ${className}`}>
      <div className={`${dark ? container : framed} py-20 sm:py-28`}>
        <div className={narrow ? "mx-auto max-w-2xl" : ""}>{children}</div>
      </div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = "left", dark = false, className = "", children }: HeadingProps) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"} ${className}`}>
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && <p className={`text-sm ${dark ? "text-white/55" : "text-neutral-500"}`}>{eyebrow}</p>}
        <h2 className={`mt-1.5 font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem] ${dark ? "text-white" : "text-neutral-950"}`}>
          {title}
        </h2>
        {description && <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/60" : "text-neutral-600"}`}>{description}</p>}
      </div>
      {children}
    </div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  // Optional media on the right (below the text on phones), e.g. a muted looping clip.
  aside?: ReactNode;
  // Moving background for this page (see HeroBackgrounds). Defaults to the sound-wave lines.
  background?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children, aside, background }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      {background ?? <WavesBg />}
      {/* Soft green glow behind the visual, and fades so the text stays readable. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_40%,rgba(34,197,94,0.10),transparent_45%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_35%,#050505_95%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050505]" />
      <div className={`${container} relative ${aside ? "grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16" : ""}`}>
        <div>
          <p className="flex items-center gap-2 text-sm text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{description}</p>
          {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        {aside}
      </div>
    </section>
  );
}

// A muted, looping clip for the page hero. Plays inline, no controls, and stays still for reduced motion.
export function HeroLoop({ src, poster, label }: { src: string; poster: string; label: string }) {
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:max-w-[340px]">
      <video
        className="aspect-[9/16] w-full object-cover"
        src={reduce ? undefined : src}
        poster={poster}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}
