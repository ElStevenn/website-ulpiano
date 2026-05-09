'use client';

import { useState, useRef, useEffect } from 'react';

const VIDEOS = ['/clip_1.mp4', '/clip_2.mp4', '/clip_3.mp4'];

export default function HeroVideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Autoplay prevented:", e));
    }
  }, [currentVideoIndex]);

  return (
    <>
      <video
        ref={videoRef}
        src={VIDEOS[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div 
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A0F28]/90 via-[#0A0F28]/70 to-[#0A0F28]/30 md:from-[#0A0F28]/75 md:via-[#0A0F28]/60 md:to-[#0A0F28]/45"
      />
    </>
  );
}