import { Check, X } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import FinalCta from "@/components/site/FinalCta";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import WorkTabs from "@/components/site/WorkTabs";
import { agencyWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL } from "@/lib/site";

const proofs = [
  { title: "Volume", text: "Whether you need 20, 50 or 100 variations a month, we scale to your testing plan." },
  { title: "48-hour turnaround", text: "Send a raw brief on Monday, run ads on Wednesday." },
  { title: "We understand hooks", text: "We edit for the first 3 seconds, pacing and buyer psychology across e-com, info products and lead gen." },
];

const usual = [
  { title: "Freelancers who disappear", text: "They miss deadlines right when client CPAs are spiking." },
  { title: "Slow big studios", text: "14 days for a single ad makes rapid testing impossible." },
  { title: "Pretty videos, no performance", text: "They don't know how to lower CPA across different hooks." },
];

const nucleus = [
  { title: "Your back-office team", text: "The same editors every time, and never client-facing." },
  { title: "Built for speed", text: "Batches delivered in 48 hours, ready for testing." },
  { title: "Performance-native", text: "Every edit is made for retention and conversion." },
];

const volumes = [
  { range: "1 to 20 videos a month", features: ["48-hour delivery", "Hook variations", "Dedicated Drive folder"] },
  { range: "21 to 50 videos a month", features: ["Everything above", "Formats for all platforms (16:9, 9:16, 1:1)", "Priority queue"] },
  { range: "50+ videos a month", features: ["Everything above", "A dedicated editing team", "Shared Slack channel"] },
];

export default function Agencies() {
  usePageMeta({
    title: "White-Label Video Editing for Agencies | Nucleus",
    description: "White-label edits, hooks and variations for your clients. 48-hour turnaround, the same editors every time, never client-facing.",
    path: "/agencies",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Agencies"
          title="Scale your clients' creative without hiring editors."
          description="White-label edits, hooks and variations for your clients. 48-hour turnaround, the same editors every time, never client-facing."
        >
          <CtaLink href={CALENDLY_URL}>Book a 15-minute call</CtaLink>
          <CtaLink href="#samples" variant="secondary">See samples</CtaLink>
        </PageHero>

        <Section id="why">
          <SectionHeading eyebrow="Built for testing" title="The editing volume your media buyers need." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {proofs.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 p-6 sm:p-8">
                <h3 className="font-heading text-xl font-medium text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="samples" className="border-t border-white/10">
          <SectionHeading eyebrow="Samples" title="See what we cut." />
          <WorkTabs tabs={agencyWorkTabs} />
        </Section>

        <Section id="difference" className="border-t border-white/10">
          <SectionHeading eyebrow="The difference" title="Stop relying on unreliable editing." />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-white/55">The usual options</h3>
              <ul className="mt-6 space-y-5">
                {usual.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-white/35" />
                    <p className="text-white/60"><span className="font-medium text-white/85">{item.title}.</span> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/40 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-primary">Nucleus</h3>
              <ul className="mt-6 space-y-5">
                {nucleus.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-white/70"><span className="font-medium text-white">{item.title}.</span> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="volume" className="border-t border-white/10">
          <SectionHeading eyebrow="Volume" title="Pay for what you need to test." description="No rigid retainers. Tell us your monthly volume and we'll quote it." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {volumes.map((v) => (
              <div key={v.range} className="flex flex-col rounded-2xl border border-white/10 p-6 sm:p-8">
                <h3 className="font-heading text-xl font-medium text-white">{v.range}</h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {v.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-white/65">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <CtaLink href={CALENDLY_URL} variant="secondary" className="mt-8">Book a call for a quote</CtaLink>
              </div>
            ))}
          </div>
        </Section>

        <FinalCta title="Send us one brief. We'll show you what it can become." />
      </main>
      <Footer />
    </div>
  );
}
