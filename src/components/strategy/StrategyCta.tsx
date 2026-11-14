import { PhoneCall, Mail, Sparkles } from "lucide-react";
import nucleusPremiumLogo from "@/assets/nucleus-premium-logo.png";
import { Link } from "react-router-dom";

export default function StrategyCta() {
  return (
    <>
      <section id="book" className="relative py-24 sm:py-36 bg-[#0B0A0D] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          <div className="p-8 sm:p-14 md:p-20 rounded-[2.5rem] bg-gradient-to-b from-[#161d18] via-[#121614] to-[#0E100F] border border-primary/30 shadow-[0_25px_80px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero Risk Creative Strategy</span>
            </div>

            {/* Display Header */}
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] text-balance max-w-3xl mx-auto">
              Ready to deploy video that actually fits your brand?
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/65 max-w-2xl mx-auto font-body leading-relaxed">
              Book a free strategy session with our creative directors.
              We will evaluate your acquisition funnel, analyze your competitor creative, and outline the exact format mix that maximizes your return.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <a
                href="mailto:hello@nucleuscreate.in"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-heading font-bold text-sm tracking-normal hover:bg-white/5 active:scale-[0.98] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email us</span>
              </a>

              <a
                href="https://calendly.com/nucleuscreates/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-white text-black font-heading font-bold text-sm tracking-normal hover:bg-white/90 active:scale-[0.98] transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Strategy Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-[#09080B] py-14 border-t border-white/10 text-white/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={nucleusPremiumLogo}
                alt="Nucleus"
                className="w-10 h-10 rounded-full object-cover border border-primary/30"
              />
              <div>
                <span className="font-heading font-black text-lg text-white tracking-wide block">
                  NUCLEUS <span className="text-primary">Productions</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-body">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Agency Home
              </Link>
              <a href="#work" className="text-white/70 hover:text-white transition-colors">
                Work Reel
              </a>
              <a href="#process" className="text-white/70 hover:text-white transition-colors">
                Process
              </a>
              <a href="#compare" className="text-white/70 hover:text-white transition-colors">
                Comparison
              </a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@nucleuscreate.in"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-xs font-mono text-white/80 hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>hello@nucleuscreate.in</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
            <div>© {new Date().getFullYear()} Nucleus Productions. Engineered for high performance brands worldwide.</div>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <a href="#overview" className="hover:text-white transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
