import React, { useRef, useEffect } from 'react'

const testimonials = [
  {
    name: 'Alya',
    role: 'Founder, NovaLabs',
    textEn: 'Lumera delivered fast with remarkable UX. Our activation rate jumped 32%.',
    textId: 'Lumera bekerja cepat dengan UX yang memukau. Aktivasi naik 32%.',
  },
  {
    name: 'Rafi',
    role: 'COO, OrbitPay',
    textEn: 'Automation flows saved us ~50 hours/month. Team is proactive and creative.',
    textId: 'Automasi menghemat ~50 jam/bulan. Tim proaktif dan kreatif.',
  },
  {
    name: 'Nadia',
    role: 'PM, CloudX',
    textEn: 'Clean design, solid code. Great partner for product growth.',
    textId: 'Desain rapi, kode solid. Partner yang tepat untuk growth.',
  },
]

export default function Testimonials({ lang }) {
  const trackRef = useRef(null)
  const idxRef = useRef(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const update = () => {
      const width = el.clientWidth
      el.scrollTo({ left: (idxRef.current % testimonials.length) * (width * 0.9 + 16), behavior: 'smooth' })
    }
    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % testimonials.length
      update()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">{lang === 'id' ? 'Testimoni' : 'Testimonials'}</h2>
        <div ref={trackRef} className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none">
          {testimonials.map((t, i) => (
            <figure key={i} className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-center rounded-2xl p-6 border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl">
              <blockquote className="text-zinc-700 dark:text-zinc-300">{lang === 'id' ? t.textId : t.textEn}</blockquote>
              <figcaption className="mt-4 text-sm text-zinc-500">{t.name} — {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
