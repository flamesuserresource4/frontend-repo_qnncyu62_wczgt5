import React from 'react'
import { Linkedin } from 'lucide-react'

const members = [
  {
    name: 'Ridho Bintang Aulia',
    roleEn: 'Co-Founder & Full-Stack Engineer',
    roleId: 'Co-Founder & Full-Stack Engineer',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop',
    linkedin: '#'
  },
  {
    name: 'Alfarizi Dwi Prasetyo',
    roleEn: 'Co-Founder & Automation Specialist',
    roleId: 'Co-Founder & Automation Specialist',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2f?q=80&w=640&auto=format&fit=crop',
    linkedin: '#'
  }
]

export default function Team({ lang }) {
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">{lang === 'id' ? 'Tim' : 'Team'}</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">{lang === 'id' ? 'Kami adalah tim kecil dengan energi kreatif Gen-Z.' : 'We are a compact team with creative Gen-Z energy.'}</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {members.map((m, i) => (
            <article key={i} className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-30 blur-2xl" aria-hidden="true" />
              <div className="relative grid grid-cols-[96px_1fr] gap-5 items-center">
                <img src={m.img} alt={m.name} loading="lazy" className="w-24 h-24 object-cover rounded-xl" />
                <div>
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{lang === 'id' ? m.roleId : m.roleEn}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <a href={m.linkedin} aria-label={`LinkedIn ${m.name}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">
                      <Linkedin size={18} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
