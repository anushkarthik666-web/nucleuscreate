import { Link } from "react-router-dom";
import { container } from "@/components/site/Section";
import { CALENDLY_URL, EMAIL, LINKEDIN_URL, STUDIO_LINE } from "@/lib/site";

const linkCls = "text-sm text-white/55 transition-colors hover:text-white";
const head = "mb-4 text-sm font-medium text-white";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-16 text-white">
      <div className={container}>
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo-mark.png" alt="" width={28} height={28} loading="lazy" className="h-7 w-7" />
              <span className="font-heading text-lg font-semibold tracking-tight">Nucleus</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{STUDIO_LINE}</p>
            <a href={`mailto:${EMAIL}`} className={`${linkCls} mt-2 inline-block`}>{EMAIL}</a>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            <div className="flex flex-col gap-3">
              <p className={head}>Services</p>
              <Link to="/podcasts" className={linkCls}>Podcasts</Link>
              <Link to="/clipping" className={linkCls}>Clipping</Link>
              <Link to="/services/ai-video-strategy" className={linkCls}>AI Video</Link>
              <Link to="/agencies" className={linkCls}>Agencies</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className={head}>Company</p>
              <Link to="/#work" className={linkCls}>Work</Link>
              <Link to="/privacy-policy" className={linkCls}>Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className={head}>Contact</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>Calendly</a>
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>LinkedIn</a>
              )}
              <a href={`mailto:${EMAIL}`} className={linkCls}>Email</a>
            </div>
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">© {new Date().getFullYear()} Nucleus Productions. All rights reserved.</p>
      </div>
    </footer>
  );
}
