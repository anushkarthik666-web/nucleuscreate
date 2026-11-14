import { ReactNode } from "react";

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function Section({ id, className = "", children, narrow = false }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className={`${container} ${narrow ? "max-w-3xl" : ""}`}>{children}</div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className = "" }: HeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>
      )}
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
    <section className="border-b border-white/10 pb-16 pt-32 sm:pb-24 sm:pt-44">
      <div className={container}>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
