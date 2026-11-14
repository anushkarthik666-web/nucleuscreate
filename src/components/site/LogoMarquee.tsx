import { brands } from "@/data/brands";

// Slow scrolling row of white logos for dark backgrounds. Pauses for reduced motion.
export default function LogoMarquee() {
  const row = brands.filter((b) => b.logo);
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-14 motion-reduce:animate-none sm:gap-20">
        {[...row, ...row].map((b, i) => (
          <img key={i} src={b.logo} alt="" loading="lazy" className="h-6 w-auto max-w-[140px] object-contain opacity-60 sm:h-7" />
        ))}
      </div>
    </div>
  );
}
