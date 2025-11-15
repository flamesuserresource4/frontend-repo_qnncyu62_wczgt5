import React from 'react'
import { Code2, Smartphone, Cog, Palette, Landmark } from 'lucide-react'

const copy = {
  en: {
    title: 'Services',
    items: [
      {
        icon: Code2,
        title: 'Web App Development',
        desc: 'Scalable, cloud-ready web apps with modern stacks.'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native & cross-platform apps with smooth UX.'
      },
      {
        icon: Cog,
        title: 'n8n AI Automation',
        desc: 'Workflow automation and AI integrations that scale.'
      },
      {
        icon: Palette,
        title: 'Graphic Design',
        desc: 'Branding, UI/UX, and visual systems that stand out.'
      },
      {
        icon: Landmark,
        title: 'IT Consulting',
        desc: 'Strategy, architecture, and technology roadmaps.'
      }
    ]
  },
  id: {
    title: 'Layanan',
    items: [
      { icon: Code2, title: 'Web App Development', desc: 'Aplikasi web modern yang scalable dan siap cloud.' },
      { icon: Smartphone, title: 'Mobile App Development', desc: 'Aplikasi native & cross-platform dengan UX mulus.' },
      { icon: Cog, title: 'n8n AI Automation', desc: 'Automasi workflow dan integrasi AI yang skalabel.' },
      { icon: Palette, title: 'Desain Grafis', desc: 'Branding, UI/UX, dan sistem visual yang standout.' },
      { icon: Landmark, title: 'Konsultasi TI', desc: 'Strategi, arsitektur, dan peta jalan teknologi.' }
    ]
  }
}

export default function Services({ lang }) {
  const t = copy[lang]
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
          {t.title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2 max-w-2xl">
          {lang === 'id' ? 'Solusi produk SaaS dengan fokus pada performa, UX, dan automasi.' : 'SaaS product solutions with a focus on performance, UX, and automation.'}
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((it, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 transition will-change-transform hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <it.icon className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{it.desc}</p>
              <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
