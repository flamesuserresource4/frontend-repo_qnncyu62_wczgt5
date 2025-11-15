import React from 'react'
import { Zap, Sparkles, Rocket, PenTool } from 'lucide-react'

export default function Why({ lang }) {
  const items = [
    { icon: Zap, en: 'Speed of execution', id: 'Kecepatan eksekusi' },
    { icon: Sparkles, en: 'Obsessed with UX', id: 'Fokus pada UX' },
    { icon: Rocket, en: 'Automation-first mindset', id: 'Mindset automation-first' },
    { icon: PenTool, en: 'Creative Gen-Z energy', id: 'Energi kreatif Gen-Z' }
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">{lang === 'id' ? 'Mengapa Memilih Lumera' : 'Why Choose Lumera'}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:-translate-y-1 transition will-change-transform">
              <it.icon className="text-cyan-400" />
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{lang === 'id' ? it.id : it.en}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 opacity-70 flex flex-wrap items-center gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-28 rounded-lg bg-gradient-to-r from-white/40 to-white/20 dark:from-white/10 dark:to-white/5 border border-white/20" aria-label="Client logo placeholder" />
          ))}
        </div>
      </div>
    </section>
  )
}
