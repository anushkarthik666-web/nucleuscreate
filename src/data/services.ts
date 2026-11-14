// The four services. Used by the nav dropdown, the homepage service cards and the footer.
export type Service = {
  title: string;
  short: string; // one line for the nav dropdown
  text: string; // longer line for the homepage card
  to: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Podcast editing",
    short: "Full episodes, teasers and thumbnails",
    text: "Full episode edits, teasers and thumbnails every week, from a fixed team that knows your show.",
    to: "/podcasts",
    image: "https://i.ytimg.com/vi/-H-Y7i9EtbQ/maxresdefault.jpg",
  },
  {
    title: "Motion graphics",
    short: "Explainers, launch promos and app ads",
    text: "Brand explainers, launch promos and app ads, animated from script to final frame.",
    to: "/motion-graphics",
    image: "/work/motion/nucleus-explainer.jpg",
  },
  {
    title: "AI video",
    short: "Product ads and brand films",
    text: "Product ads and brand films made with AI and finished by our editors.",
    to: "/services/ai-video-strategy",
    image: "/posters/sapphire-events.jpg",
  },
  {
    title: "Clipping",
    short: "Shorts, Reels and TikToks",
    text: "Shorts, Reels and TikToks cut from your long-form, with captions and a hook in the first seconds.",
    to: "/clipping",
    image: "https://i.ytimg.com/vi/t8vLk50R4kw/maxresdefault.jpg",
  },
];
