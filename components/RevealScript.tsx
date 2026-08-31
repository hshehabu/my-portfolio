'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function RevealScript() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      const els = document.querySelectorAll('.reveal')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 }
      )
      els.forEach((el) => observer.observe(el))
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])
  
  return null
}
