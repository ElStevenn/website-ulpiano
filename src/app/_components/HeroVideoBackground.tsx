'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const VIDEOS = ['/clip_1.mp4', '/clip_2.mp4', '/clip_3.mp4'];

type Layer = 0 | 1;

export default function HeroVideoBackground() {
  const [frontLayer, setFrontLayer] = useState<Layer>(0);
  const [frontOpacity, setFrontOpacity] = useState(1);
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const transitionLockRef = useRef(false);

  const refs: [React.RefObject<HTMLVideoElement | null>, React.RefObject<HTMLVideoElement | null>] = [ref0, ref1];

  useEffect(() => {
    const v0 = ref0.current;
    const v1 = ref1.current;
    if (!v0 || !v1) return;

    v0.src = VIDEOS[0];
    v0.setAttribute('data-clip-index', '0');
    v0.load();

    // Defer downloading the second clip until the first one is actually
    // playing, so it does not compete with above-the-fold resources.
    const loadNextClip = () => {
      v1.src = VIDEOS[1];
      v1.setAttribute('data-clip-index', '1');
      v1.load();
    };
    v0.addEventListener('playing', loadNextClip, { once: true });

    v0.play().catch((e) => console.error('Autoplay prevented:', e));

    return () => v0.removeEventListener('playing', loadNextClip);
  }, []);

  const finishCrossfade = useCallback(
    (oldFront: Layer) => {
      const oldEl = refs[oldFront].current;
      const newFront: Layer = oldFront === 0 ? 1 : 0;
      const newEl = refs[newFront].current;
      if (!oldEl || !newEl) {
        transitionLockRef.current = false;
        return;
      }

      oldEl.pause();
      const newPlaying = Number(newEl.getAttribute('data-clip-index')) || 0;
      const preloadIndex = (newPlaying + 1) % VIDEOS.length;
      oldEl.src = VIDEOS[preloadIndex];
      oldEl.setAttribute('data-clip-index', String(preloadIndex));
      oldEl.load();

      setFrontLayer(newFront);
      setFrontOpacity(1);
      transitionLockRef.current = false;
    },
    [refs]
  );

  const handleEnded = useCallback(
    (endedLayer: Layer) => {
      if (endedLayer !== frontLayer || transitionLockRef.current) return;
      transitionLockRef.current = true;

      const backLayer: Layer = endedLayer === 0 ? 1 : 0;
      const backEl = refs[backLayer].current;
      const frontEl = refs[endedLayer].current;

      if (!backEl || !frontEl) {
        transitionLockRef.current = false;
        return;
      }

      const runFade = () => {
        backEl.currentTime = 0;
        backEl
          .play()
          .then(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setFrontOpacity(0);
              });
            });
          })
          .catch((e) => {
            console.error('Crossfade play failed:', e);
            transitionLockRef.current = false;
          });
      };

      if (backEl.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        runFade();
      } else {
        const onReady = () => {
          backEl.removeEventListener('canplaythrough', onReady);
          runFade();
        };
        backEl.addEventListener('canplaythrough', onReady);
      }
    },
    [frontLayer, refs]
  );

  const onFrontTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLVideoElement>) => {
      if (e.propertyName !== 'opacity' || frontOpacity !== 0) return;
      finishCrossfade(frontLayer);
    },
    [finishCrossfade, frontLayer, frontOpacity]
  );

  return (
    <div className="absolute inset-0 z-0 min-h-full overflow-hidden bg-[#0A0F28]">
      <div className="absolute inset-0 z-0">
        <video
          ref={ref0}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleEnded(0)}
          onTransitionEnd={frontLayer === 0 ? onFrontTransitionEnd : undefined}
          className={`absolute inset-0 h-full w-full min-h-full object-cover transition-opacity duration-700 ease-out ${
            frontLayer === 0 ? 'z-[2]' : 'z-[1]'
          }`}
          style={frontLayer === 0 ? { opacity: frontOpacity } : { opacity: 1 }}
        />
        <video
          ref={ref1}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleEnded(1)}
          onTransitionEnd={frontLayer === 1 ? onFrontTransitionEnd : undefined}
          className={`absolute inset-0 h-full w-full min-h-full object-cover transition-opacity duration-700 ease-out ${
            frontLayer === 1 ? 'z-[2]' : 'z-[1]'
          }`}
          style={frontLayer === 1 ? { opacity: frontOpacity } : { opacity: 1 }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#0A0F28]/90 via-[#0A0F28]/70 to-[#0A0F28]/30 md:from-[#0A0F28]/75 md:via-[#0A0F28]/60 md:to-[#0A0F28]/45" aria-hidden />
    </div>
  );
}
