import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import FinalCta from "@/components/site/FinalCta";
import ProcessSteps from "@/components/site/ProcessSteps";
import { lightPage, PageHero, Section, SectionHeading } from "@/components/site/Section";
import WorkTabs from "@/components/site/WorkTabs";
import { motionWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL } from "@/lib/site";

const includes = [
  { title: "Brand explainers", text: "Your product or service explained in under a minute, with a clear story and clean design." },
  { title: "Launch promos", text: "Short, punchy pieces for a launch, a sale or a campaign, built to stop the scroll." },
  { title: "App and product ads", text: "Animated product screens and interfaces that show what your app does." },
  { title: "Graphics for your videos", text: "Titles, charts and animated overlays that make talking-head videos easier to follow." },
];

export default function MotionGraphics() {
  usePageMeta({
    title: "Motion Graphics: Explainers, Launch Promos and App Ads | Nucleus",
    description: "Brand explainers, launch promos and app ads, animated from script to final frame by a fixed team working US and UK hours.",
    path: "/motion-graphics",
  });

  return (
    <div className={lightPage}>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Motion graphics"
          title="Motion graphics that explain, launch and sell."
          description="Brand explainers, launch promos and app ads, animated from script to final frame. Vertical, horizontal, or both."
        >
          <CtaLink href={CALENDLY_URL} variant="light">Book a 15-minute call</CtaLink>
          <CtaLink href="#samples" variant="ghostDark">See samples</CtaLink>
        </PageHero>

        <Section id="samples">
          <SectionHeading eyebrow="Samples" title="Recent motion work." description="Press play on anything below." />
          <WorkTabs tabs={motionWorkTabs} />
        </Section>

        <Section id="includes">
          <SectionHeading eyebrow="What we make" title="From idea to final frame." />
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

        <Section id="process">
          <SectionHeading eyebrow="How it works" title="Three steps. No back and forth." />
          <ProcessSteps steps={["Share your brief and brand assets", "We script, design and animate", "You review, we refine and deliver."]} />
        </Section>

        <section>
          <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 border-x border-dashed border-black/[0.08] px-5 py-16 sm:flex-row sm:items-center sm:px-8 sm:py-20">
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Pricing depends on length and style.</h2>
              <p className="mt-2 text-neutral-600">We'll quote within 24 hours of your call.</p>
            </div>
            <CtaLink href={CALENDLY_URL} variant="dark">Book a call for a quote</CtaLink>
          </div>
        </section>

        <FinalCta title="Have a script or an idea? Let's make it move." />
      </main>
      <Footer />
    </div>
  );
}
