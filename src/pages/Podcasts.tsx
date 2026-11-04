import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import FinalCta from "@/components/site/FinalCta";
import ProcessSteps from "@/components/site/ProcessSteps";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import WorkTabs from "@/components/site/WorkTabs";
import { podcastWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL } from "@/lib/site";

const pack = [
  { title: "Full episode edit", text: "The complete episode, cut and ready for YouTube and your podcast feed." },
  { title: "A teaser", text: "One short trailer to give people a reason to press play." },
  { title: "3 to 5 Shorts", text: "Vertical clips from the episode's best moments." },
  { title: "Thumbnails", text: "Made for the episode and the clips, so they get noticed in the feed." },
];

export default function Podcasts() {
  usePageMeta({
    title: "Podcast Post-Production | Nucleus",
    description: "Full episode edit, a teaser and 3 to 5 Shorts every week, plus thumbnails. 48-hour turnaround from a fixed team working US and UK hours.",
    path: "/podcasts",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Podcasts"
          title="You record. We handle everything after."
          description="Full episode edit, a teaser and 3 to 5 Shorts every week, plus thumbnails. One fixed team, working your hours."
        >
          <CtaLink href={CALENDLY_URL}>Book a 15-minute call</CtaLink>
          <CtaLink href="#samples" variant="secondary">See samples</CtaLink>
        </PageHero>

        <Section id="package">
          <SectionHeading eyebrow="The weekly package" title="One recording. Everything you need to publish." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {pack.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 p-6">
                <Check className="h-5 w-5 text-primary" />
                <h3 className="mt-5 font-heading text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="samples" className="border-t border-white/10">
          <SectionHeading eyebrow="Samples" title="Work by format." />
          <WorkTabs tabs={podcastWorkTabs} />
        </Section>

        <Section id="turnaround" className="border-t border-white/10">
          <SectionHeading eyebrow="Turnaround" title="48 hours from raw files to edit." description="The same editors work on your show every week, so they learn your style and you stop repeating yourself." />
          <ProcessSteps />
        </Section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="font-heading text-2xl font-medium text-white sm:text-3xl">Pricing depends on volume and format.</h2>
              <p className="mt-2 text-white/60">We'll quote within 24 hours of your call.</p>
            </div>
            <CtaLink href={CALENDLY_URL}>Book a call for a quote</CtaLink>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
