'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const VIDEOS = ['/clip_1.mp4', '/clip_2.mp4', '/clip_3.mp4'];

type Layer = 0 | 1;

export default function HeroVideoBackground() {
  const [visibleLayer, setVisibleLayer] = useState<Layer>(0);
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const playingIndexRef = useRef(0);
  const transitionLockRef = useRef(false);

  const refs: [React.RefObject<HTMLVideoElement | null>, React.RefObject<HTMLVideoElement | null>] = [ref0, ref1];

  const preloadHidden = useCallback((hiddenLayer: Layer, afterPlayingIndex: number) => {
    const nextIndex = (afterPlayingIndex + 1) % VIDEOS.length;
    const el = refs[hiddenLayer].current;
    if (!el) return;
    if (el.getAttribute('data-clip-index') === String(nextIndex)) return;
    el.src = VIDEOS[nextIndex];
    el.setAttribute('data-clip-index', String(nextIndex));
    el.load();
  }, [refs]);

  const startVisiblePlayback = useCallback(
    (layer: Layer) => {
      const el = refs[layer].current;
      if (!el) return;
      el.currentTime = 0;
      el.play().catch((e) => console.error('Autoplay prevented:', e));
    },
    [refs]
  );

  useEffect(() => {
    const v0 = ref0.current;
    const v1 = ref1.current;
    if (!v0 || !v1) return;

    v0.src = VIDEOS[0];
    v0.setAttribute('data-clip-index', '0');
    v0.load();

    v1.src = VIDEOS[1];
    v1.setAttribute('data-clip-index', '1');
    v1.load();

    playingIndexRef.current = 0;
    v0.play().catch((e) => console.error('Autoplay prevented:', e));
  }, []);

  const handleEnded = useCallback(
    (endedLayer: Layer) => {
      if (endedLayer !== visibleLayer || transitionLockRef.current) return;
      transitionLockRef.current = true;

      const other: Layer = endedLayer === 0 ? 1 : 0;
      const nextEl = refs[other].current;
      const endedEl = refs[endedLayer].current;

      if (!nextEl || !endedEl) {
        transitionLockRef.current = false;
        return;
      }

      const nextReady = () => {
        nextEl.removeEventListener('canplaythrough', nextReady);
        nextEl.currentTime = 0;
        nextEl
          .play()
          .then(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const nextPlaying = Number(nextEl.getAttribute('data-clip-index')) || 0;
                playingIndexRef.current = nextPlaying;
                setVisibleLayer(other);
                const preloadIdx = (nextPlaying + 1) % VIDEOS.length;
                endedEl.src = VIDEOS[preloadIdx];
                endedEl.setAttribute('data-clip-index', String(preloadIdx));
                endedEl.load();
                transitionLockRef.current = false;
              });
            });
          })
          .catch((e) => {
            console.error('Crossfade play failed:', e);
            transitionLockRef.current = false;
          });
      };

      if (nextEl.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        nextReady();
      } else {
        nextEl.addEventListener('canplaythrough', nextReady, { once: true });
      }
    },
    [refs, visibleLayer]
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0F28]">
      <video
        ref={ref0}
        muted
        playsInline
        preload="auto"
        onEnded={() => handleEnded(0)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          visibleLayer === 0 ? 'z-[2] opacity-100' : 'z-[1] opacity-0'
        }`}
      />
      <video
        ref={ref1}
        muted
        playsInline
        preload="auto"
        onEnded={() => handleEnded(1)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          visibleLayer === 1 ? 'z-[2] opacity-100' : 'z-[1] opacity-0'
        }`}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#0A0F28]/90 via-[#0A0F28]/70 to-[#0A0F28]/30 md:from-[#0A0F28]/75 md:via-[#0A0F28]/60 md:to-[#0A0F28]/45" />
    </div>
  );
}
