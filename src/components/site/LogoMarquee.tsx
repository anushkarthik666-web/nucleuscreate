import { brands } from "@/data/brands";

// Slow scrolling row of client names for dark backgrounds. Brands without a logo
// file show as a text wordmark. Pauses for reduced motion.
export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-14 motion-reduce:animate-none sm:gap-20">
        {[...brands, ...brands].map((b, i) =>
          b.logo ? (
            <img key={i} src={b.logo} alt="" loading="lazy" className="h-6 w-auto max-w-[140px] object-contain opacity-60 sm:h-7" />
          ) : (
            <span key={i} className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-white/60 sm:text-xl">
              {b.name}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
