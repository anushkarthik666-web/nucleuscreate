// Building blocks for the service landing pages: feature cards, detailed steps,
// a comparison table, checklists, an FAQ list and the pricing strip.
import { Check, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CALENDLY_URL } from "@/lib/site";
import { CtaLink } from "./Buttons";
import { Section, SectionHeading } from "./Section";

export type Card = { title: string; text: string; badge?: string };

export function CardGrid({ items, columns = 2, tick = true }: { items: Card[]; columns?: 2 | 3; tick?: boolean }) {
  return (
    <ul className={`mt-10 grid gap-3 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-black/[0.08] bg-white p-6">
          {item.badge ? (
            <span className="inline-block rounded-full bg-[#178a3c]/10 px-3 py-1 text-xs font-medium text-[#178a3c]">{item.badge}</span>
          ) : (
            tick && <Check className="h-5 w-5 text-[#178a3c]" />
          )}
          <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-neutral-950">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-neutral-600">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export type Step = { when?: string; title: string; text: string; details?: string[] };

export function StepList({ steps, note }: { steps: Step[]; note?: string }) {
  return (
    <>
      <ol className="mt-10 divide-y divide-black/[0.08] overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
        {steps.map((s, i) => (
          <li key={s.title} className="grid gap-4 p-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-8">
            <div>
              <span className="text-sm text-neutral-500">Step {i + 1}</span>
              {s.when && <p className="mt-1 font-heading text-lg font-semibold text-[#178a3c]">{s.when}</p>}
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">{s.text}</p>
              {s.details && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2 text-[15px] leading-snug text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#178a3c]" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
      {note && <p className="mt-4 text-sm text-neutral-500">{note}</p>}
    </>
  );
}

export type CompareRow = { label: string; values: string[] };

// First column is always us, highlighted. "No" renders as a dash.
export function CompareTable({ columns, rows }: { columns: string[]; rows: CompareRow[] }) {
  return (
    <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-black/[0.08] bg-white text-left text-[15px]">
        <thead>
          <tr>
            <th className="w-[22%] p-4 font-medium text-neutral-500" />
            {columns.map((c, i) => (
              <th key={c} className={`p-4 font-heading font-semibold ${i === 0 ? "bg-neutral-950 text-white" : "text-neutral-950"}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className="border-t border-black/[0.08] p-4 font-medium text-neutral-950">{r.label}</th>
              {r.values.map((v, i) => (
                <td key={i} className={`border-t p-4 leading-snug ${i === 0 ? "border-white/10 bg-neutral-950 text-white" : "border-black/[0.08] text-neutral-600"}`}>
                  {v === "No" ? <Minus className="h-4 w-4 text-neutral-400" aria-label="No" /> : v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ol className="mt-10 grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 rounded-2xl border border-black/[0.08] bg-white p-5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-sm font-medium text-neutral-600">{i + 1}</span>
          <span className="leading-relaxed text-neutral-700">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export type Faq = { q: string; a: string };

export function FaqSection({ faqs, title = "Questions people ask us", description }: { faqs: Faq[]; title?: string; description?: string }) {
  return (
    <Section id="faq" narrow>
      <SectionHeading eyebrow="FAQs" title={title} description={description} align="center" />
      <Accordion type="single" collapsible className="mt-10 space-y-2">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="rounded-xl border-0 bg-black/[0.04] px-5">
            <AccordionTrigger className="py-4 text-left text-[15px] font-medium text-neutral-950 hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="pb-4 text-[15px] leading-relaxed text-neutral-600">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

export function PricingStrip({ title, text = "We'll quote within 24 hours of your call." }: { title: string; text?: string }) {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 border-x border-dashed border-black/[0.08] px-5 py-16 sm:flex-row sm:items-center sm:px-8 sm:py-20">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">{title}</h2>
          <p className="mt-2 text-neutral-600">{text}</p>
        </div>
        <CtaLink href={CALENDLY_URL} variant="dark">Book a call for a quote</CtaLink>
      </div>
    </section>
  );
}

// Short pills, e.g. the industries or shows we work with.
export function Pills({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i} className="rounded-full border border-black/[0.08] bg-white px-4 py-2 text-sm text-neutral-700">{i}</li>
      ))}
    </ul>
  );
}
