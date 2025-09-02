"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

type Props = { src: string; name: string };

export default function SingleCameraFeedCard({ src, name }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegURL")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      console.log("hls is supported");
      const hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else {
      console.error("HLS not supported");
    }
  }, [src]);

  return (
    <div className="relative rounded-lg border border-gray-200 p-4">
      <h2 className="absolute top-6 left-7 z-10 mb-2 text-lg font-semibold text-white">
        {name}
      </h2>
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
