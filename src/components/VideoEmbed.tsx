import { Play } from "lucide-react";

interface VideoEmbedProps {
  title: string;
  videoUrl?: string;
  showPlaceholder?: boolean;
}

export default function VideoEmbed({
  title,
  videoUrl,
  showPlaceholder = true,
}: VideoEmbedProps) {
  if (videoUrl && !showPlaceholder) {
    const videoId = videoUrl.includes("youtube.com")
      ? new URL(videoUrl).searchParams.get("v")
      : videoUrl.includes("youtu.be")
        ? videoUrl.split("/").pop()
        : null;

    if (videoId) {
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      );
    }
  }

  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-oracle-red/20 via-surface to-azure-blue/20">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
          <Play className="h-5 w-5 text-white" />
        </div>
        <span className="text-xs text-muted">{title}</span>
      </div>
    </div>
  );
}
