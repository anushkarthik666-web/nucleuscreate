import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import FinalCta from "@/components/site/FinalCta";
import ProcessSteps from "@/components/site/ProcessSteps";
import { lightPage, PageHero, Section, SectionHeading } from "@/components/site/Section";
import WorkTabs from "@/components/site/WorkTabs";
import { clippingWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL } from "@/lib/site";

const includes = [
  { title: "Moments worth clipping", text: "We find the strongest moments in each episode, so you don't have to." },
  { title: "Hooks in the first seconds", text: "Every clip opens on a line that makes people stop scrolling." },
  { title: "Captions and framing", text: "Burned-in captions and vertical framing for Shorts, Reels and TikTok." },
  { title: "Ready to post", text: "Exported for each platform, in a shared folder, on a steady schedule." },
];

export default function Clipping() {
  usePageMeta({
    title: "Podcast Clipping: Shorts, Reels and TikToks | Nucleus",
    description: "Shorts, Reels and TikToks cut from your long-form, with captions and hooks. 48-hour turnaround from a fixed team working US and UK hours.",
    path: "/clipping",
  });

  return (
    <div className={lightPage}>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Clipping"
          title="Turn every episode into a week of clips."
          description="Shorts, Reels and TikToks cut from your long-form, with captions and a hook in the first seconds. Same editors, every week."
        >
          <CtaLink href={CALENDLY_URL} variant="light">Book a 15-minute call</CtaLink>
          <CtaLink href="#samples" variant="ghostDark">See clips</CtaLink>
        </PageHero>

        <Section id="includes">
          <SectionHeading eyebrow="What you get" title="Clips people actually watch." />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item.title} className="rounded-2xl border border-black/[0.08] bg-white p-6">
                <Check className="h-5 w-5 text-[#178a3c]" />
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="samples">
          <SectionHeading eyebrow="Samples" title="Recent clips." />
          <WorkTabs tabs={clippingWorkTabs} />
        </Section>

        <Section id="turnaround">
          <SectionHeading eyebrow="Turnaround" title="48 hours from episode to clips." />
          <ProcessSteps />
        </Section>

        <section>
          <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 border-x border-dashed border-black/[0.08] px-5 py-16 sm:flex-row sm:items-center sm:px-8 sm:py-20">
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Pricing depends on volume and format.</h2>
              <p className="mt-2 text-neutral-600">We'll quote within 24 hours of your call.</p>
            </div>
            <CtaLink href={CALENDLY_URL} variant="dark">Book a call for a quote</CtaLink>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
