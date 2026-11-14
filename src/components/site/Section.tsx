import { ReactNode } from "react";

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
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-[#050505] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      <div className={container}>
        <p className="flex items-center gap-2 text-sm text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{description}</p>
        {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
