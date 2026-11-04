import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CtaLink } from "@/components/site/Buttons";
import { container } from "@/components/site/Section";
import { CALENDLY_URL } from "@/lib/site";

const links = [
  { label: "Work", to: "/#work" },
  { label: "Podcasts", to: "/podcasts" },
  { label: "Agencies", to: "/agencies" },
  { label: "AI Video", to: "/services/ai-video-strategy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-white/10 bg-background/90 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Main" className={`${container} flex h-16 items-center justify-between gap-4 sm:h-[72px]`}>
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="font-heading text-base font-semibold tracking-[0.14em] text-white">NUCLEUS</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.to} className="text-sm text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CtaLink href={CALENDLY_URL} className="!px-4 !py-2 sm:!px-5">
            Book a call
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className={`${container} flex flex-col py-3`}>
            {links.map((link) => (
              <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className="py-3 text-lg text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
