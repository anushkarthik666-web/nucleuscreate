// Work samples shown on the homepage, /podcasts and /agencies.
//
// Each video is either a YouTube embed (youtubeId), a local MP4 (src + poster)
// or a placeholder tile (placeholder: true) that renders a "coming soon" card.
// Search for "TODO(work)" to find every slot that still needs a real link.

export type WorkVideo = {
  id: string;
  show: string;
  format: string;
  work: string;
  youtubeId?: string;
  src?: string;
  poster?: string;
  vertical?: boolean;
  placeholder?: boolean;
};

export type WorkTab = {
  id: string;
  label: string;
  videos: WorkVideo[];
};

export const podcastTeasers: WorkVideo[] = [
  {
    id: "kp-mullenweg-teaser",
    show: "Kleiner Perkins",
    format: "Podcast teaser",
    work: "Teaser edit for the episode with Matt Mullenweg",
    youtubeId: "-H-Y7i9EtbQ",
  },
  {
    id: "infinite-loops-teaser",
    show: "Infinite Loops",
    format: "Podcast teaser",
    work: "Teaser edit for the Jim and Emma episode",
    youtubeId: "kRmeoZhi8sw",
  },
  {
    id: "intrinsic-value-teaser",
    show: "The Intrinsic Value Podcast",
    format: "Podcast teaser",
    work: "Teaser edit for the podcast",
    youtubeId: "t8vLk50R4kw",
  },
  {
    id: "tip-ludmer-teaser",
    show: "TIP",
    format: "Podcast teaser",
    work: "Teaser edit for the Matt Ludmer episode",
    youtubeId: "Af0xmpUVLGM",
  },
];

// TODO(work): add the show name for each Short once confirmed. The playlist titles only say "Short #1" to "#3".
export const shorts: WorkVideo[] = [
  {
    id: "short-1",
    show: "Podcast Short",
    format: "Short, 9:16",
    work: "Vertical cut from a full episode",
    youtubeId: "kwQuXjeiOlY",
    vertical: true,
  },
  {
    id: "short-2",
    show: "Podcast Short",
    format: "Short, 9:16",
    work: "Vertical cut from a full episode",
    youtubeId: "A6Lz6CsSQ14",
    vertical: true,
  },
  {
    id: "short-3",
    show: "Podcast Short",
    format: "Short, 9:16",
    work: "Vertical cut from a full episode",
    youtubeId: "vmbrKkfUHQo",
    vertical: true,
  },
];

export const fullEpisodes: WorkVideo[] = [
  {
    id: "infinite-loops-greenberg",
    show: "Infinite Loops",
    format: "Full episode",
    work: "Full episode edit, Spencer Greenberg interview",
    youtubeId: "nJBxhS4GqFU",
  },
  // TODO(work): add the Kleiner Perkins full episode link (the one the teaser above was cut from).
  {
    id: "episode-placeholder-1",
    show: "Kleiner Perkins",
    format: "Full episode",
    work: "Link coming soon",
    placeholder: true,
  },
  // TODO(work): add one more full episode link.
  {
    id: "episode-placeholder-2",
    show: "Full episode",
    format: "Full episode",
    work: "Link coming soon",
    placeholder: true,
  },
];

// TODO(work): no motion graphics links were provided. Replace these three placeholders with YouTube links.
export const motionGraphics: WorkVideo[] = [
  { id: "motion-placeholder-1", show: "Motion graphics", format: "Explainer", work: "Sample coming soon", placeholder: true },
  { id: "motion-placeholder-2", show: "Motion graphics", format: "Title and lower-third pack", work: "Sample coming soon", placeholder: true },
  { id: "motion-placeholder-3", show: "Motion graphics", format: "Animated promo", work: "Sample coming soon", placeholder: true },
];

// These three ads already live in the repo and on the AI Video page.
// TODO(work): swap for YouTube links if you would rather not serve the MP4s from the site.
export const aiVideo: WorkVideo[] = [
  {
    id: "thetabody",
    show: "Thetabody",
    format: "Product ad",
    work: "AI generated with editing",
    src: "/video-assets/THETABODY_Video_10_V7.mp4",
    poster: "/posters/thetabody.jpg",
    vertical: true,
  },
  {
    id: "sapphire-events",
    show: "Sapphire Events",
    format: "Brand film",
    work: "AI generated with editing",
    src: "/video-assets/Sapphire_Events.mp4",
    poster: "/posters/sapphire-events.jpg",
    vertical: true,
  },
  {
    id: "lord-milano",
    show: "Lord Milano",
    format: "Product ad",
    work: "AI generated with editing",
    src: "/video-assets/Lord Milano Video 02 [No VO].mp4",
    poster: "/posters/lord-milano.jpg",
    vertical: true,
  },
];

export const homeWorkTabs: WorkTab[] = [
  { id: "teasers", label: "Podcast teasers", videos: podcastTeasers },
  { id: "shorts", label: "Shorts", videos: shorts },
  { id: "episodes", label: "Full episodes", videos: fullEpisodes },
  { id: "motion", label: "Motion graphics", videos: motionGraphics },
  { id: "ai", label: "AI video", videos: aiVideo },
];

export const podcastWorkTabs: WorkTab[] = [
  { id: "teasers", label: "Teasers", videos: podcastTeasers },
  { id: "shorts", label: "Shorts", videos: shorts },
  { id: "episodes", label: "Full episodes", videos: fullEpisodes },
];

// TODO(work): add paid social hook, cutdown and variation samples for the agencies page.
export const agencyWorkTabs: WorkTab[] = [
  { id: "teasers", label: "Teasers", videos: podcastTeasers },
  { id: "shorts", label: "Short-form cutdowns", videos: shorts },
  {
    id: "hooks",
    label: "Hooks and variations",
    videos: [
      { id: "hook-placeholder-1", show: "Paid social", format: "Hook variations", work: "Sample coming soon", placeholder: true },
      { id: "hook-placeholder-2", show: "Paid social", format: "Cutdown", work: "Sample coming soon", placeholder: true },
      { id: "hook-placeholder-3", show: "Paid social", format: "UGC edit", work: "Sample coming soon", placeholder: true },
    ],
  },
];
