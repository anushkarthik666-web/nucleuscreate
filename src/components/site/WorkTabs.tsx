import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Clapperboard } from "lucide-react";
import type { WorkTab, WorkVideo } from "@/data/work";
import LiteYouTube from "./LiteYouTube";
import LocalVideo from "./LocalVideo";

function VideoCard({ video }: { video: WorkVideo }) {
  const title = `${video.show}, ${video.format}`;
  return (
    <figure>
      {video.youtubeId ? (
        <LiteYouTube youtubeId={video.youtubeId} title={title} vertical={video.vertical} />
      ) : video.src ? (
        <LocalVideo src={video.src} poster={video.poster} title={title} vertical={video.vertical} />
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-white/40">
          <Clapperboard className="h-5 w-5" />
          <span className="text-sm">Sample coming soon</span>
        </div>
      )}
      <figcaption className="mt-3 text-sm leading-snug">
        <span className="font-medium text-white">{video.show}</span>
        <span className="text-white/55"> · {video.format}. {video.work}</span>
      </figcaption>
    </figure>
  );
}

// Inactive tabs are not mounted, so only the visible tab's thumbnails are requested.
export default function WorkTabs({ tabs }: { tabs: WorkTab[] }) {
  return (
    <TabsPrimitive.Root defaultValue={tabs[0].id} className="mt-10">
      <TabsPrimitive.List
        aria-label="Work by format"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => {
        const vertical = tab.videos.some((v) => v.vertical);
        return (
          <TabsPrimitive.Content key={tab.id} value={tab.id} className="mt-8 focus-visible:outline-none">
            <div
              className={
                vertical
                  ? "grid max-w-4xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6"
                  : "grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {tab.videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsPrimitive.Content>
        );
      })}
    </TabsPrimitive.Root>
  );
}
