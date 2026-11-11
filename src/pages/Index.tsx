import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaLink } from "@/components/site/Buttons";
import CaseStudies from "@/components/site/CaseStudies";
import FinalCta from "@/components/site/FinalCta";
import ProcessSteps from "@/components/site/ProcessSteps";
import { container, Section, SectionHeading } from "@/components/site/Section";
import WorkTabs from "@/components/site/WorkTabs";
import { homeWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL, DEFAULT_DESCRIPTION, DEFAULT_TITLE, SHOWREEL_POSTER, SHOWREEL_SRC } from "@/lib/site";

// Real names only. Add new clients here and the strip makes room for them.
const clients = ["Kleiner Perkins", "Infinite Loops"];

const heroThumbs = ["-H-Y7i9EtbQ", "kRmeoZhi8sw", "Af0xmpUVLGM", "kRmeoZhi8sw", "-H-Y7i9EtbQ", "Af0xmpUVLGM"];

const services = [
  {
    title: "Podcasts",
    text: "Full episode edit, a teaser and 3 to 5 Shorts every week, plus thumbnails.",
    to: "/podcasts",
  },
  {
    title: "Agencies",
    text: "White-label edits, hooks and variations for your clients. 48-hour turnaround, the same editors every time, never client-facing.",
    to: "/agencies",
  },
];

const numbers = [
  { value: "200+", label: "brands and agencies" },
  { value: "48-hour", label: "turnaround" },
  { value: "5-person", label: "editing team" },
  { value: "US and UK", label: "hours" },
];

const faqs = [
  {
    q: "How fast is the turnaround?",
    a: "48 hours from the moment we have your raw files.",
  },
  {
    q: "What do you need from us?",
    a: "The raw recordings in a shared folder, plus any brand assets and notes on how you like your show or ads to feel. We take it from there.",
  },
  {
    q: "How do revisions work?",
    a: "You review each edit in one round. Send your notes together, we make the changes, and you publish.",
  },
  {
    q: "How does white-label work?",
    a: "We work behind your agency. Your clients only ever deal with you, and the same editors stay on your account every time.",
  },
  {
    q: "What about time zones and communication?",
    a: "We're based in Bangalore and work US and UK hours, so you can reach us during your day. You get one fixed team, not a queue.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on volume and format. Book a 15-minute call and we'll quote within 24 hours, or start with a free sample.",
  },
];

function HeroBackground() {
  if (SHOWREEL_SRC) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src={SHOWREEL_SRC}
        poster={SHOWREEL_POSTER || undefined}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    );
  }
  // TODO(showreel): this still background is replaced automatically once SHOWREEL_SRC is set in src/lib/site.ts.
  return (
    <div className="absolute inset-0 grid scale-105 grid-cols-2 opacity-30 blur-[3px] grayscale md:grid-cols-3" aria-hidden="true">
      {heroThumbs.map((id, i) => (
        <img key={i} src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" className="h-full min-h-0 w-full object-cover" />
      ))}
    </div>
  );
}

export default function Index() {
  usePageMeta({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative flex min-h-[88svh] items-end overflow-hidden pb-14 pt-32 sm:pb-20">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/70" />
          <div className={`${container} relative`}>
            <h1 className="max-w-4xl font-heading text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your podcast and video <span className="whitespace-nowrap">post-production</span> team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Full episodes, teasers and Shorts for podcasts, and white-label editing for agencies. One fixed team, 48-hour turnaround, US and UK hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={CALENDLY_URL}>Book a 15-minute call</CtaLink>
              <CtaLink href="#work" variant="secondary">See our work</CtaLink>
            </div>
          </div>
        </section>

        <section aria-label="Clients" className="border-y border-white/10 py-8">
          <div className={`${container} flex flex-col gap-4 md:flex-row md:items-center md:gap-12`}>
            <p className="shrink-0 text-sm text-white/55">Trusted by 200+ brands and agencies</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-2">
              {clients.map((name) => (
                <li key={name} className="font-heading text-xl font-medium tracking-tight text-white/85">{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="work">
          <SectionHeading eyebrow="Work" title="See it before you book it." description="Press play on anything below." />
          <WorkTabs tabs={homeWorkTabs} />
        </Section>

        <CaseStudies />

        <Section id="services" className="border-t border-white/10">
          <SectionHeading eyebrow="What we do" title="Two ways to work with us." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group flex flex-col justify-between rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/25 sm:p-8">
                <div>
                  <h3 className="font-heading text-2xl font-medium text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{s.text}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="how" className="border-t border-white/10">
          <SectionHeading eyebrow="How it works" title="Three steps. No back and forth." />
          <ProcessSteps />
        </Section>

        <section aria-label="By the numbers" className="border-t border-white/10 py-16 sm:py-20">
          <dl className={`${container} grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4`}>
            {numbers.map((n) => (
              <div key={n.label}>
                <dd className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">{n.value}</dd>
                <dt className="mt-2 text-sm text-white/55">{n.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        <Section id="faq" className="border-t border-white/10" narrow>
          <SectionHeading title="Questions." />
          <Accordion type="single" collapsible className="mt-8 border-t border-white/10">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-white/10">
                <AccordionTrigger className="py-5 text-left font-heading text-base font-medium text-white hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-white/65">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
