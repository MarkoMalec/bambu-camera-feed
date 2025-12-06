"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { removeFeed } from "~/utils/feedActions";

type Props = { id: string; src: string; name: string };

export default function SingleCameraFeedCard({ id, src, name }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegURL")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      console.log("hls is supported");
      const hls = new Hls({
        lowLatencyMode: true,
        maxBufferLength: 5,
        liveSyncDuration: 2,
        liveMaxLatencyDuration: 4,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else {
      console.error("HLS not supported");
    }
  }, [src]);

  const handleRemoveFeed = async (feedId: string) => {
    await removeFeed(feedId);
  };

  return (
    <div className="relative rounded-lg border border-gray-200 p-4">
      <h2 className="absolute top-6 left-7 z-10 mb-2 text-lg font-semibold text-white">
        {name}
      </h2>
      <button
        onClick={() => handleRemoveFeed(id)}
        className="absolute top-6 right-7 z-10 mb-2 text-lg font-semibold text-white"
      >
        Remove
      </button>
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className="h-auto w-full rounded-md"
      />
    </div>
  );
}
