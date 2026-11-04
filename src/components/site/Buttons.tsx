import { ReactNode } from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] whitespace-nowrap";

export const primaryBtn = `${base} bg-primary text-black hover:brightness-110`;
export const secondaryBtn = `${base} border border-white/15 text-white hover:border-white/30 hover:bg-white/5`;
export const ghostBtn = `${base} text-white/80 hover:text-white`;

type Props = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

// One link component for every call to action. Internal paths use the router,
// hash links and external URLs use a plain anchor.
export function CtaLink({ href, variant = "primary", external, className = "", children, onClick }: Props) {
  const cls = `${variant === "primary" ? primaryBtn : variant === "secondary" ? secondaryBtn : ghostBtn} ${className}`;
  const isExternal = external ?? /^https?:\/\//.test(href);
  const isHash = href.startsWith("#");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  if (isHash || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
