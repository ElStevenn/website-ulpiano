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
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(90deg, rgba(10,15,40,0.72) 0%, rgba(10,15,40,0.45) 100%)',
        }}
      />
    </>
  );
}