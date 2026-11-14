import { Award } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CtaLink } from "./Buttons";
import LiteYouTube from "./LiteYouTube";
import { framed } from "./Section";

export default function CaseStudies() {
  const ready = caseStudies.filter((c) => c.stats.length > 0);
  if (ready.length === 0) return null;

  return (
    <section id="results" className="scroll-mt-16">
      <div className={`${framed} space-y-20 py-20 sm:py-28`}>
        {ready.map((c, i) => (
          <article key={c.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <p className="flex items-center gap-1.5 text-sm font-medium text-[#178a3c]">
                <Award className="h-4 w-4" /> {c.client} case study
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-3xl">{c.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-neutral-600">{c.summary}</p>
              <CtaLink href={`https://www.youtube.com/watch?v=${c.youtubeId}`} variant="soft" className="mt-6">
                Watch on YouTube
              </CtaLink>
              <dl className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-black/[0.08] bg-white">
                {c.stats.map((s, j) => (
                  <div key={s.label} className={`p-4 ${j ? "border-l border-black/[0.08]" : ""}`}>
                    <dt className="text-xs text-neutral-500">{s.label}</dt>
                    <dd className="mt-1 whitespace-nowrap font-heading text-lg font-semibold text-neutral-950 sm:text-xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl bg-black/[0.04] p-4 sm:p-8">
              <LiteYouTube youtubeId={c.youtubeId} title={`${c.client}: ${c.title}`} className="shadow-xl" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
