import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CtaLink } from "@/components/site/Buttons";
import CaseStudies from "@/components/site/CaseStudies";
import FinalCta from "@/components/site/FinalCta";
import { lightPage, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { CardGrid, Checklist, FaqSection, Pills, PricingStrip, StepList } from "@/components/site/ServiceBlocks";
import WorkTabs from "@/components/site/WorkTabs";
import { podcastWorkTabs } from "@/data/work";
import usePageMeta from "@/hooks/use-page-meta";
import { CALENDLY_URL } from "@/lib/site";

const pack = [
  { title: "Full episode edit", text: "The complete episode, cut and ready for YouTube and your podcast feed." },
  { title: "A teaser", text: "One short trailer to give people a reason to press play." },
  { title: "3 to 5 Shorts", text: "Vertical clips from the episode's best moments, with captions." },
  { title: "Thumbnails", text: "Made for the episode and the clips, so they get noticed in the feed." },
];

const edit = [
  { title: "Tighter conversation", text: "We cut the false starts, long pauses and tangents that lose people, and keep the moments that make your show yours." },
  { title: "Camera cuts", text: "On video podcasts we switch between angles so the episode feels like a show, not a static recording." },
  { title: "Clean, even sound", text: "Levels balanced between hosts and guests, with background noise and room echo brought down." },
  { title: "Colour and framing", text: "Consistent colour and framing across every camera, every episode." },
  { title: "Titles and graphics", text: "Your intro, lower thirds for guests and on-screen text where it helps the story." },
  { title: "Ready to upload", text: "Exported for YouTube and your audio feed, delivered to a shared folder." },
];

const audience = [
  { title: "Hosts", text: "You'd rather spend your time booking guests and recording than sitting in an edit timeline." },
  { title: "Production companies", text: "You run several shows and need a team that can take the editing off your plate, week after week." },
  { title: "Brands and funds with a show", text: "Your podcast represents the company, so every episode has to look and sound the part." },
];

const steps = [
  {
    when: "Day 0",
    title: "Send the raw files",
    text: "Drop the recordings in a shared folder, with any notes on the episode.",
    details: ["Video and audio from every camera and mic.", "Timestamps for anything to cut or keep.", "Your guest's name and links for the titles."],
  },
  {
    when: "Within 3 days",
    title: "We edit",
    text: "The same editors who know your show cut the episode, the teaser and the Shorts.",
    details: ["Full episode edit.", "Teaser and 3 to 5 Shorts.", "Thumbnails for the episode and clips."],
  },
  {
    when: "One round",
    title: "You review and publish",
    text: "Send your notes together in one round. We make the changes and you publish.",
    details: ["All notes in one place.", "Changes back quickly.", "Final files in your folder."],
  },
];

const onboarding = [
  "A few episodes you've published, so we can match the style.",
  "Your intro, outro, music and fonts.",
  "Your logo and brand colours for titles and thumbnails.",
  "How you share recordings: Drive, Dropbox or anything else.",
  "Where you publish: YouTube, Spotify, Apple, or all of them.",
  "Your release day, so we plan the turnaround around it.",
];

const shows = ["Kleiner Perkins", "Infinite Loops", "The Intrinsic Value Podcast", "TIP"];

const faqs = [
  { q: "How fast is the turnaround?", a: "3 days from the moment we have your raw files, for the full episode, the teaser and the Shorts." },
  { q: "Will the same editors work on my show?", a: "Yes. One fixed team works on your show every week, so they learn your style and you stop repeating yourself." },
  { q: "How do revisions work?", a: "You review each edit in one round. Send your notes together, we make the changes, and you publish." },
  { q: "Do you work with audio-only podcasts?", a: "Yes. We edit audio-only episodes for your feed, and can still cut teasers and audiograms from them." },
  { q: "What time zone do you work in?", a: "We work US and UK hours, so you get answers during your working day." },
  { q: "Can I try you before committing?", a: "Yes. Send us a link to one episode and we'll cut you a free sample." },
  { q: "How much does it cost?", a: "It depends on how many episodes you publish and what you need from each one. Book a call and we'll quote within 24 hours." },
];

export default function Podcasts() {
  usePageMeta({
    title: "Podcast Editing: Full Episodes, Teasers and Shorts | Nucleus",
    description: "Full episode edit, a teaser and 3 to 5 Shorts every week, plus thumbnails. 3-day turnaround from a fixed team working US and UK hours.",
    path: "/podcasts",
  });

  return (
    <div className={lightPage}>
      <Navbar />
      <main>
        <PageHero
          seed={0}
          eyebrow="Podcast editing"
          title="You record. We handle everything after."
          description="Full episode edit, a teaser and 3 to 5 Shorts every week, plus thumbnails. One fixed team, working your hours, with a 3-day turnaround."
        >
          <CtaLink href={CALENDLY_URL} variant="light">Book a call</CtaLink>
          <CtaLink href="#samples" variant="ghostDark">See samples</CtaLink>
        </PageHero>

        <Section id="package">
          <SectionHeading eyebrow="The weekly package" title="One recording. Everything you need to publish." description="Every episode comes back as a full set, ready for YouTube, your feed and social." />
          <CardGrid items={pack} />
        </Section>

        <Section id="samples">
          <SectionHeading eyebrow="Samples" title="Work by format." description="Teasers, Shorts and full episodes we've edited for real shows." />
          <WorkTabs tabs={podcastWorkTabs} />
          <p className="mt-12 text-sm text-neutral-500">Shows we've edited for</p>
          <Pills items={shows} />
        </Section>

        <CaseStudies />

        <Section id="edit">
          <SectionHeading eyebrow="What goes into a full edit" title="An episode people watch to the end." />
          <CardGrid items={edit} columns={3} />
        </Section>

        <Section id="who">
          <SectionHeading eyebrow="Who it's for" title="Shows that publish every week." />
          <CardGrid items={audience} columns={3} tick={false} />
        </Section>

        <Section id="turnaround">
          <SectionHeading eyebrow="How it works" title="3 days from raw files to edit." description="Three steps, the same every week." />
          <StepList steps={steps} />
        </Section>

        <Section id="kickoff">
          <SectionHeading eyebrow="Getting started" title="For the first episode, we'll ask for:" description="After that, you just send the recordings." />
          <Checklist items={onboarding} />
        </Section>

        <FaqSection faqs={faqs} />

        <PricingStrip title="Pricing depends on volume and format." />

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
