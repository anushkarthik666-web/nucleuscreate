import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CtaLink } from "@/components/site/Buttons";
import { container } from "@/components/site/Section";
import { CALENDLY_URL } from "@/lib/site";

const links = [
  { label: "Work", to: "/#work" },
  { label: "Podcasts", to: "/podcasts" },
  { label: "Clipping", to: "/clipping" },
  { label: "AI Video", to: "/services/ai-video-strategy" },
  { label: "Agencies", to: "/agencies" },
];

// Transparent with white text over the dark hero, then a light bar once the page scrolls.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light ? "border-b border-black/[0.06] bg-[#FAFAFA]/85 text-neutral-950 backdrop-blur-md" : "text-white"
      }`}
    >
      <nav aria-label="Main" className={`${container} flex h-16 items-center justify-between gap-4`}>
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="" width={28} height={28} className={`h-7 w-7 transition ${light ? "invert" : ""}`} />
          <span className="font-heading text-[17px] font-semibold tracking-tight">Nucleus</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.to} className={`text-[13px] font-medium transition-opacity hover:opacity-100 ${light ? "opacity-70" : "opacity-80"}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <CtaLink href={CALENDLY_URL} variant={light ? "dark" : "light"} className="!px-4 !py-2 text-[13px]">
            Book a call
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/[0.06] md:hidden">
          <div className={`${container} flex flex-col py-3`}>
            {links.map((link) => (
              <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className="py-3 text-lg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
