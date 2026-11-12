import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 active:scale-[0.98] whitespace-nowrap";

export const variants = {
  light: `${base} bg-white text-neutral-950 hover:bg-neutral-200`,
  dark: `${base} bg-neutral-950 text-white hover:bg-neutral-800`,
  soft: `${base} bg-black/[0.06] text-neutral-950 hover:bg-black/10`,
  ghostDark: `${base} text-white hover:bg-white/10`,
  ghostLight: `${base} text-neutral-950 hover:bg-black/5`,
  accent: `${base} bg-primary text-black hover:brightness-110`,
};

// Kept for the form, which sits on a dark background.
export const primaryBtn = variants.light;

type Props = {
  href: string;
  variant?: keyof typeof variants;
  chevron?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function CtaLink({ href, variant = "dark", chevron = true, external, className = "", children, onClick }: Props) {
  const cls = `${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {chevron && <ChevronRight className="-mr-1 h-4 w-4 opacity-70" />}
    </>
  );
  const isExternal = external ?? /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}
