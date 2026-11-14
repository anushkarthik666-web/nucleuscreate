import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaLink } from "@/components/site/Buttons";
import CaseStudies from "@/components/site/CaseStudies";
import FinalCta from "@/components/site/FinalCta";
import LogoGrid from "@/components/site/LogoGrid";
import LogoMarquee from "@/components/site/LogoMarquee";
import ProcessSteps from "@/components/site/ProcessSteps";
import { container, framed, lightPage, Section, SectionHeading } from "@/components/site/Section";
import WaveBackground from "@/components/site/WaveBackground";
import WorkTabs from "@/components/site/WorkTabs";
import { homeWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL, DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/site";

const numbers = [
  { value: "200+", label: "brands and agencies" },
  { value: "48-hour", label: "turnaround" },
  { value: "5-person", label: "editing team" },
  { value: "US and UK", label: "hours" },
];

const faqs = [
  { q: "How fast is the turnaround?", a: "48 hours from the moment we have your raw files." },
  {
    q: "What do you need from us?",
    a: "The raw recordings in a shared folder, plus any brand assets and notes on how you like your show or ads to feel. We take it from there.",
  },
  { q: "How do revisions work?", a: "You review each edit in one round. Send your notes together, we make the changes, and you publish." },
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

type ServiceCardProps = { title: string; text: string; to: string; image: string; className?: string };

function ServiceCard({ title, text, to, image, className = "" }: ServiceCardProps) {
  return (
    <Link to={to} className={`group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-neutral-950 p-6 text-white sm:p-9 ${className}`}>
      <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <h3 className="font-heading text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 leading-relaxed text-white/70">{text}</p>
        </div>
        <span className="inline-flex w-max shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition-colors group-hover:bg-white/20">
          Learn more <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export default function Index() {
  usePageMeta({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

  return (
    <div className={lightPage}>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#050505] text-white">
          <WaveBackground />
          {/* Vignette: darkens the edges and fades into the next section. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,transparent_30%,#050505_85%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#050505]" />
          <div className={`${container} relative flex min-h-[88svh] flex-col justify-end pb-10 pt-32`}>
            <div className="grid items-end gap-8 lg:grid-cols-[1.7fr_1fr]">
              <div>
                <h1 className="max-w-3xl font-heading text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-[3.9rem]">
                  Your podcast and video <span className="whitespace-nowrap">post-production</span> team.
                </h1>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <CtaLink href={CALENDLY_URL} variant="light">Book a 15-minute call</CtaLink>
                  <CtaLink href="#work" variant="ghostDark">See our work</CtaLink>
                </div>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-white/70 lg:mb-16 lg:justify-self-end">
                Full episodes, teasers and Shorts for podcasts, and white-label editing for agencies. One fixed team, 48-hour turnaround, US and UK hours.
              </p>
            </div>
            <div className="mt-16 sm:mt-20">
              <LogoMarquee />
            </div>
          </div>
        </section>

        <section aria-label="Clients">
          <div className={`${framed} py-16 sm:py-20`}>
            <p className="mb-8 text-center text-sm text-neutral-500">Trusted by 200+ brands and agencies</p>
            <LogoGrid />
          </div>
        </section>

        <Section id="work">
          <SectionHeading eyebrow="Our work" title="See it before you book it." description="Press play on anything below." />
          <WorkTabs tabs={homeWorkTabs} />
        </Section>

        <Section id="services">
          <SectionHeading eyebrow="Our services" title="Podcasts, clips and AI video. One team.">
            <CtaLink href={CALENDLY_URL} variant="soft" className="self-start sm:self-auto">Book a call</CtaLink>
          </SectionHeading>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <ServiceCard
              className="md:col-span-2 md:min-h-[400px]"
              title="Podcasts"
              text="Full episode edit, a teaser and 3 to 5 Shorts every week, plus thumbnails."
              to="/podcasts"
              image="https://i.ytimg.com/vi/-H-Y7i9EtbQ/maxresdefault.jpg"
            />
            <ServiceCard
              title="Clipping"
              text="Shorts, Reels and TikToks cut from your long-form, with captions and a hook in the first seconds."
              to="/clipping"
              image="https://i.ytimg.com/vi/t8vLk50R4kw/maxresdefault.jpg"
            />
            <ServiceCard
              title="AI Video"
              text="Product ads and brand films made with AI and finished by our editors."
              to="/services/ai-video-strategy"
              image="/posters/sapphire-events.jpg"
            />
          </div>
          <Link
            to="/agencies"
            className="group mt-3 flex flex-col justify-between gap-3 rounded-3xl border border-black/[0.08] bg-white p-6 transition-colors hover:border-black/20 sm:flex-row sm:items-center sm:p-8"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">For agencies</h3>
              <p className="mt-1 text-neutral-600">
                White-label edits, hooks and variations for your clients. 48-hour turnaround, the same editors every time, never client-facing.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Section>

        <CaseStudies />

        <Section id="how">
          <SectionHeading eyebrow="How it works" title="Three steps. No back and forth." />
          <ProcessSteps />
        </Section>

        <section aria-label="By the numbers" className="bg-[#050505] text-white">
          <div className={`${container} py-24 text-center sm:py-32`}>
            <h2 className="mx-auto max-w-md font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">Our work, by the numbers.</h2>
            <dl className="mt-14 grid grid-cols-2 gap-y-12 md:grid-cols-4 md:divide-x md:divide-dashed md:divide-white/15">
              {numbers.map((n) => (
                <div key={n.label} className="px-4">
                  <dd className="font-heading text-3xl font-semibold tracking-tight sm:text-5xl">{n.value}</dd>
                  <dt className="mt-2 text-sm text-white/55">{n.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section id="faq" narrow>
          <SectionHeading title="FAQs" align="center" />
          <Accordion type="single" collapsible className="mt-10 space-y-2">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="rounded-xl border-0 bg-black/[0.04] px-5">
                <AccordionTrigger className="py-4 text-left text-[15px] font-medium text-neutral-950 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-4 text-[15px] leading-relaxed text-neutral-600">{f.a}</AccordionContent>
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
