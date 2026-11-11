import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Section, SectionHeading } from "./Section";

export default function CaseStudies() {
  const ready = caseStudies.filter((c) => c.stats.length > 0);
  if (ready.length === 0) return null;

  return (
    <Section id="results" className="border-t border-white/10">
      <SectionHeading eyebrow="Results" title="What the work did." />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {ready.map((c) => (
          <article key={c.id} className="flex flex-col rounded-2xl border border-white/10 p-6 sm:p-8">
            <p className="text-sm font-medium text-primary">{c.client}</p>
            <dl className="mt-6 grid grid-cols-3 gap-4">
              {c.stats.map((s) => (
                <div key={s.label}>
                  <dd className="whitespace-nowrap font-heading text-xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</dd>
                  <dt className="mt-1 text-xs text-white/55 sm:text-sm">{s.label}</dt>
                </div>
              ))}
            </dl>
            <h3 className="mt-8 font-heading text-xl font-medium text-white">{c.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-white/65">{c.summary}</p>
            <a
              href={`https://www.youtube.com/watch?v=${c.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-primary"
            >
              Watch on YouTube <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
