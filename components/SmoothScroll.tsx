'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    // Conectar Lenis con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Scroll progress bar
    const progressBar = document.getElementById('scroll-progress')
    lenis.on('scroll', ({ progress }: { progress: number }) => {
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`
      }
    })

    // Mouse follow glow
    const mouseGlow = document.getElementById('mouse-glow')
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseGlow) return
      mouseGlow.style.left = `${e.clientX}px`
      mouseGlow.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <>{children}</>
}
