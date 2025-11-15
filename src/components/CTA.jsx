import React from 'react'

export default function CTA({ lang, onOpenChat }) {
  return (
    <section className="py-16 sm:py-24 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">
          {lang === 'id' ? 'Mulai Transformasi Digital Anda Hari Ini' : 'Start Your Digital Transformation Today'}
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/6281536164746" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-95 transition">
            WhatsApp
          </a>
          <button onClick={onOpenChat} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/80 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 text-zinc-900 dark:text-white font-semibold hover:bg-white/90 dark:hover:bg-white/10 transition">
            {lang === 'id' ? 'Mulai Chat' : 'Chat Now'}
          </button>
        </div>
      </div>
    </section>
  )
}
