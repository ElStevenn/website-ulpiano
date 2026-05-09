"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.remove("opacity-0", "translate-y-8");
            el.classList.add("opacity-100", "translate-y-0");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
}
