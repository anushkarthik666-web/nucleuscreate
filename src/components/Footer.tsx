import { Link } from "react-router-dom";
import { container } from "@/components/site/Section";
import { CALENDLY_URL, EMAIL, LINKEDIN_URL, STUDIO_LINE } from "@/lib/site";

const linkCls = "text-sm text-white/65 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 sm:py-16">
      <div className={container}>
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-mark.png" alt="" width={32} height={32} loading="lazy" className="h-8 w-8" />
              <span className="font-heading text-base font-semibold tracking-[0.14em] text-white">NUCLEUS</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{STUDIO_LINE}</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
            <div className="flex flex-col gap-3">
              <Link to="/#work" className={linkCls}>Work</Link>
              <Link to="/podcasts" className={linkCls}>Podcasts</Link>
              <Link to="/agencies" className={linkCls}>Agencies</Link>
              <Link to="/services/ai-video-strategy" className={linkCls}>AI Video</Link>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>Calendly</a>
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>LinkedIn</a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/45">
          <span>© {new Date().getFullYear()} Nucleus Productions. All rights reserved.</span>
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
