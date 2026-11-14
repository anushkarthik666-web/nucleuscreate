import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import FinalCta from "@/components/site/FinalCta";
import { HeroLoop, lightPage, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { CardGrid, Checklist, FaqSection, Pills, PricingStrip, StepList } from "@/components/site/ServiceBlocks";
import WorkTabs from "@/components/site/WorkTabs";
import { motionWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL } from "@/lib/site";

const includes = [
  { title: "Brand explainers", text: "Your product or service explained in under a minute, with a clear story and clean design." },
  { title: "Launch promos", text: "Short, punchy pieces for a launch, a sale or a campaign, built to stop the scroll." },
  { title: "App and product ads", text: "Animated product screens and interfaces that show what your app does." },
  { title: "Data and finance explainers", text: "Charts and numbers that move, so a complex idea lands in seconds." },
  { title: "Graphics for your videos", text: "Titles, charts and animated overlays that make talking-head videos easier to follow." },
  { title: "Logo and brand animation", text: "Your logo and brand elements in motion, for intros, outros and social." },
];

const clients = ["Atlys", "Zuperior", "OneMagnify", "Indus", "Strike"];

const why = [
  { title: "Script to final frame", text: "We write, design and animate, so you don't have to brief three different people." },
  { title: "Made for where it runs", text: "Vertical for Reels and TikTok, widescreen for YouTube and your site, or both from one project." },
  { title: "On brand", text: "Your fonts, colours and style carried through every frame, so it looks like it came from you." },
  { title: "One fixed team", text: "The same designers and animators across your projects, so the look stays consistent." },
];

const steps = [
  {
    title: "Brief and script",
    text: "You tell us what the video needs to say and who it's for. We write the script and agree it with you.",
    details: ["A short call about the goal and the audience.", "Your brand assets and any references you like.", "A script you sign off before design starts."],
  },
  {
    title: "Style frames",
    text: "We design the key frames so you see the look before anything moves.",
    details: ["Colours, type and illustration style.", "A few key scenes, designed in full.", "Your feedback before animation starts."],
  },
  {
    title: "Animation",
    text: "We bring the frames to life, with timing set to the voiceover and music.",
    details: ["Animation in After Effects.", "Voiceover, music and sound design.", "Captions and on-screen text."],
  },
  {
    title: "Review and delivery",
    text: "You comment on the draft, we refine it, then deliver every size you need.",
    details: ["Review links with comments on the exact frame.", "Changes until it's right.", "Final files in 9:16, 1:1 and 16:9."],
  },
];

const kickoff = [
  "Your logo, fonts, colours and any brand guidelines.",
  "What the video needs to say, or a script if you have one.",
  "Screens, product shots or data we should animate.",
  "Videos or styles you like the look of.",
  "Where the video will run, so we plan the sizes.",
  "Your launch date, if there is one.",
];

const faqs = [
  { q: "How long does a motion graphics video take?", a: "It depends on the length and the style. We agree the timeline and delivery date with you on the first call, before any work starts." },
  { q: "Do you write the script?", a: "Yes. We can write it from your brief, or work from a script you already have." },
  { q: "Can you work with our brand guidelines?", a: "Yes. Send us your guidelines, fonts and colours and we design inside them." },
  { q: "Do you do voiceover and music?", a: "Yes. We source the voiceover and music and handle the sound design, so the video comes back finished." },
  { q: "Can you add motion graphics to our existing videos?", a: "Yes. We add titles, charts, lower thirds and animated overlays to talking-head videos, podcasts and ads." },
  { q: "What files do we get?", a: "Final MP4s in every size you need, vertical, square and widescreen, ready to post or run as ads." },
  { q: "How much does it cost?", a: "It depends on length and style. Book a call and we'll quote within 24 hours." },
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
          seed={3}
          eyebrow="Motion graphics"
          title="Motion graphics that explain, launch and sell."
          description="Brand explainers, launch promos and app ads, animated from script to final frame. Vertical, horizontal, or both."
          aside={<HeroLoop src="/work/motion/hero-loop.mp4" poster="/work/motion/hero-loop.jpg" label="Zuperior, trading app promo" />}
        >
          <CtaLink href={CALENDLY_URL} variant="light">Book a call</CtaLink>
          <CtaLink href="#samples" variant="ghostDark">See samples</CtaLink>
        </PageHero>

        <Section id="samples">
          <SectionHeading eyebrow="Samples" title="Recent motion work." description="Press play on anything below." />
          <WorkTabs tabs={motionWorkTabs} />
          <p className="mt-12 text-sm text-neutral-500">Brands we've animated for</p>
          <Pills items={clients} />
        </Section>

        <Section id="includes">
          <SectionHeading eyebrow="What we make" title="From idea to final frame." />
          <CardGrid items={includes} columns={3} />
        </Section>

        <Section id="why">
          <SectionHeading eyebrow="Why Nucleus" title="One team for the words, the design and the motion." />
          <CardGrid items={why} />
        </Section>

        <Section id="process">
          <SectionHeading eyebrow="How it works" title="You see the look before anything moves." description="Four steps. We agree the timeline on the first call." />
          <StepList steps={steps} />
        </Section>

        <Section id="kickoff">
          <SectionHeading eyebrow="Getting started" title="To get started, we'll ask for:" />
          <Checklist items={kickoff} />
        </Section>

        <FaqSection faqs={faqs} />

        <PricingStrip title="Pricing depends on length and style." />

        <FinalCta title="Have a script or an idea? Let's make it move." />
      </main>
      <Footer />
    </div>
  );
}
