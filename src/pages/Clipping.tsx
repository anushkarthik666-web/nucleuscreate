import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import FinalCta from "@/components/site/FinalCta";
import { lightPage, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { CardGrid, Checklist, FaqSection, Pills, PricingStrip, StepList } from "@/components/site/ServiceBlocks";
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

const sources = [
  { title: "Podcasts", text: "Interviews and conversations, with the guest's best answers turned into stand-alone clips." },
  { title: "Webinars and talks", text: "Keynotes, panels and webinars, cut into short lessons people can share." },
  { title: "YouTube videos", text: "Your long-form videos turned into Shorts that send viewers back to the full video." },
];

const platforms = ["YouTube Shorts", "Instagram Reels", "TikTok", "LinkedIn", "X"];

const craft = [
  { title: "The clip stands on its own", text: "Each clip makes sense without the full episode, with a clear start and a payoff." },
  { title: "Captions people can read", text: "Big, clean captions in your brand style, because most people watch with the sound off." },
  { title: "Framed for vertical", text: "Speakers kept in frame as the conversation moves, with split screens when two people talk." },
  { title: "A title on every clip", text: "A short line at the top that tells people why to keep watching." },
];

const steps = [
  {
    when: "Day 0",
    title: "Send the episode",
    text: "Share the full recording, or a link to the published episode.",
    details: ["Any moments you want clipped.", "Anything that's off limits.", "How many clips you want."],
  },
  {
    when: "Within 48 hours",
    title: "We pick and cut the clips",
    text: "The same editors find the moments, write the hooks and cut each clip.",
    details: ["Hook in the first seconds.", "Captions and vertical framing.", "A title for each clip."],
  },
  {
    when: "One round",
    title: "You review and post",
    text: "Send your notes together. We make the changes and the clips are ready to post.",
    details: ["Files sorted by platform.", "Ready for your posting schedule.", "Same editors next week."],
  },
];

const kickoff = [
  "A few clips or creators whose style you like.",
  "Your fonts, colours and logo for captions and titles.",
  "Where you post and how often.",
  "How many clips you want from each episode.",
  "Topics or moments that always work for your audience.",
  "Anything that should never go out as a clip.",
];

const faqs = [
  { q: "How many clips do we get from an episode?", a: "Usually 3 to 5 from a full podcast episode. If you need more, tell us on the call and we'll plan the volume around your schedule." },
  { q: "Who picks the moments?", a: "We do. We watch the whole episode and choose the moments that work on their own. You can always send timestamps you want included." },
  { q: "How fast is the turnaround?", a: "48 hours from the moment we have the episode." },
  { q: "Do the clips come with captions?", a: "Yes. Every clip has burned-in captions in your brand style, plus a title at the top." },
  { q: "Can you clip videos we've already published?", a: "Yes. Send us links to your back catalogue and we'll turn your best old episodes into new clips." },
  { q: "Do you post the clips for us?", a: "We deliver them ready to post, sorted by platform, in a shared folder. Posting stays with you." },
  { q: "How much does it cost?", a: "It depends on how many clips you need each week. Book a call and we'll quote within 24 hours." },
];

export default function Clipping() {
  usePageMeta({
    title: "Clipping: Shorts, Reels and TikToks from Your Long-Form | Nucleus",
    description: "Shorts, Reels and TikToks cut from your long-form, with captions and hooks. 48-hour turnaround from a fixed team working US and UK hours.",
    path: "/clipping",
  });

  return (
    <div className={lightPage}>
      <Navbar />
      <main>
        <PageHero
          seed={6}
          eyebrow="Clipping"
          title="Turn every episode into a week of clips."
          description="Shorts, Reels and TikToks cut from your long-form, with captions and a hook in the first seconds. Same editors, every week."
        >
          <CtaLink href={CALENDLY_URL} variant="light">Book a call</CtaLink>
          <CtaLink href="#samples" variant="ghostDark">See clips</CtaLink>
        </PageHero>

        <Section id="includes">
          <SectionHeading eyebrow="What you get" title="Clips people actually watch." />
          <CardGrid items={includes} />
        </Section>

        <Section id="samples">
          <SectionHeading eyebrow="Samples" title="Recent clips." />
          <WorkTabs tabs={clippingWorkTabs} />
        </Section>

        <Section id="sources">
          <SectionHeading eyebrow="What we clip" title="Any long video with something worth saying." />
          <CardGrid items={sources} columns={3} tick={false} />
          <p className="mt-12 text-sm text-neutral-500">Sized and captioned for</p>
          <Pills items={platforms} />
        </Section>

        <Section id="craft">
          <SectionHeading eyebrow="What makes a good clip" title="Made to be watched on mute, in a feed." />
          <CardGrid items={craft} />
        </Section>

        <Section id="turnaround">
          <SectionHeading eyebrow="How it works" title="48 hours from episode to clips." />
          <StepList steps={steps} />
        </Section>

        <Section id="kickoff">
          <SectionHeading eyebrow="Getting started" title="To get started, we'll ask for:" />
          <Checklist items={kickoff} />
        </Section>

        <FaqSection faqs={faqs} />

        <PricingStrip title="Pricing depends on volume and format." />

        <FinalCta title="Send us one episode. We'll send back the clips." />
      </main>
      <Footer />
    </div>
  );
}
