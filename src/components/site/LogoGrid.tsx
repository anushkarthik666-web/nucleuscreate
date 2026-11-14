import { brands } from "@/data/brands";

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-3 border-l border-t border-dashed border-black/10 sm:grid-cols-3 lg:grid-cols-6">
      {brands.map((b) => (
        <div key={b.name} className="relative flex h-20 items-center justify-center border-b border-r border-dashed border-black/10 px-3 sm:h-32 sm:px-5">
          {b.logo ? (
            <img src={b.logo} alt={b.name} loading="lazy" className="max-h-6 w-auto max-w-[80%] object-contain opacity-80 brightness-0 sm:max-h-9 sm:max-w-[75%]" />
          ) : (
            <span className="text-center font-heading text-sm font-semibold sm:text-lg tracking-tight text-neutral-900">{b.name}</span>
          )}
          {b.caseStudy && (
            <a href="#results" className="absolute bottom-1.5 text-[10px] sm:bottom-2.5 sm:text-[11px] text-neutral-500 hover:text-neutral-900">
              Case study
            </a>
          )}
        </div>
      ))}
      <div className="flex h-20 items-center justify-center border-b border-r border-dashed border-black/10 px-3 text-center text-xs sm:h-32 sm:px-5 sm:text-sm text-neutral-500 sm:h-32">
        and 180+ more
      </div>
    </div>
  );
}
