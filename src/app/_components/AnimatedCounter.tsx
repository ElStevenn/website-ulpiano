'use client'

import { useEffect, useRef } from 'react'

interface Props {
  value: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ value, suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const start = performance.now()

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.floor(eased * value) + suffix
            if (progress < 1) requestAnimationFrame(tick)
            else el.textContent = value + suffix
          }

          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
