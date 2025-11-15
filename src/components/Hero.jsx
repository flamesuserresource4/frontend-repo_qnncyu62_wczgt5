import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ lang }) {
  const rocketRef = useRef(null)
  const rafRef = useRef(null)
  const tRef = useRef(0)

  useEffect(() => {
    // Launch on load
    const el = rocketRef.current
    if (!el) return
    el.style.transform = 'translate(-50%, 30vh) scale(0.8)'
    el.style.opacity = '0'
    requestAnimationFrame(() => {
      el.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease'
      el.style.transform = 'translate(-50%, 0) scale(1)'
      el.style.opacity = '1'
    })

    // Idle loop float on scroll
    const onScroll = () => {
      const y = window.scrollY
      const float = Math.sin(y / 200) * 4
      if (el) el.style.transform = `translate(-50%, ${float}px)`
    }
    window.addEventListener('scroll', onScroll)

    // Parallax particles
    const tick = () => {
      tRef.current += 0.01
      const t = tRef.current
      document.querySelectorAll('.lumera-p').forEach((p, i) => {
        const speed = 0.2 + (i % 5) * 0.05
        const y = Math.sin(t * speed + i) * 2
        const x = Math.cos(t * speed + i) * 2
        p.style.transform = `translate(${x}px, ${y}px)`
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-blue-500/10 to-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">
            {lang === 'id' ? 'Terangi Masa Depan Digital Anda Bersama Lumera' : 'Illuminate Your Digital Future with Lumera'}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
            {lang === 'id'
              ? 'Lumera adalah Gen-Z tech innovation studio yang membangun produk dan pengalaman digital dengan kecepatan, UX tajam, dan automasi cerdas.'
              : 'Lumera is a Gen-Z tech innovation studio crafting products and experiences with speed, sharp UX, and automation-first thinking.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-95 transition">
              {lang === 'id' ? 'Mulai' : 'Get Started'}
            </a>
            <a href="https://wa.me/6281536164746" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/80 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 text-zinc-900 dark:text-white font-semibold hover:bg-white/90 dark:hover:bg-white/10 transition">
              {lang === 'id' ? 'Hubungi via WhatsApp' : 'Contact Us on WhatsApp'}
            </a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px] lg:h-[600px]">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <svg ref={rocketRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 drop-shadow-[0_10px_20px_rgba(57,255,255,0.35)]" viewBox="0 0 128 128" role="img" aria-label="Lumera Rocket">
            <defs>
              <linearGradient id="rg" x1="0" x2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#glow)">
              <path d="M64 8c18 18 18 48 0 66-18-18-18-48 0-66z" fill="url(#rg)" />
              <circle cx="64" cy="38" r="10" fill="#0ea5e9" />
              <path d="M64 74l-10 24 10-6 10 6-10-24z" fill="#fb7185" />
              <path d="M48 50l-20 8 12-18 8 10zM80 50l20 8-12-18-8 10z" fill="#67e8f9" />
            </g>
          </svg>
          {/* floating particles */}
          {[...Array(14)].map((_, i) => (
            <div key={i} className="lumera-p absolute rounded-full bg-cyan-400/40 blur-md" style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 29) % 100}%`,
              width: `${6 + (i % 4) * 2}px`,
              height: `${6 + (i % 4) * 2}px`
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}
