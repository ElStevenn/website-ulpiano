'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement
            if (parent) {
              const siblings = parent.querySelectorAll('.reveal')
              const i = Array.from(siblings).indexOf(entry.target as HTMLElement)
              setTimeout(() => entry.target.classList.add('visible'), i * 100)
            } else {
              entry.target.classList.add('visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
