"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

type Props = { src: string };

export default function SingleCameraFeedCard({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegURL")) {
      video.src = src;
    } else if (Hls.isSupported()) {
        console.log('hls is supported')
      const hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else {
      console.error("HLS not supported");
    }
  }, [src]);

  return (
    <div className="rounded-lg border border-gray-200 p-4">
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
