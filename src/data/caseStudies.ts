// Case studies for the homepage. A card only appears once it has at least one stat,
// and the whole section stays hidden until then, so no unbacked numbers go live.
//
// TODO(case-studies): fill in real numbers from YouTube Studio or the client, e.g.
//   stats: [
//     { value: "1.2M", label: "views" },
//     { value: "+8,400", label: "subscribers" },
//     { value: "6 months", label: "timeframe" },
//   ],

export type CaseStudy = {
  id: string;
  client: string;
  title: string;
  summary: string;
  youtubeId: string;
  stats: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "kleiner-perkins",
    client: "Kleiner Perkins",
    title: "A teaser for the episode with Matt Mullenweg",
    summary: "We cut the teaser for Kleiner Perkins' founder interview with the co-founder of WordPress.",
    youtubeId: "-H-Y7i9EtbQ",
    stats: [],
  },
  {
    id: "infinite-loops",
    client: "Infinite Loops",
    title: "Full episodes and teasers",
    summary: "We edit full episodes and teasers for Infinite Loops, including the Spencer Greenberg interview.",
    youtubeId: "nJBxhS4GqFU",
    stats: [],
  },
];
