import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('id')
  const [theme, setTheme] = useState('dark')
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lumera-theme')
    const initial = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    if (initial === 'dark') document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    if (chatOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [chatOpen])

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white selection:bg-cyan-400/30 selection:text-white">
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onOpenChat={() => setChatOpen(true)} />

      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Team lang={lang} />
        <Why lang={lang} />
        <Testimonials lang={lang} />
        <CTA lang={lang} onOpenChat={() => setChatOpen(true)} />
        <Newsletter lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      {/* Floating Chatbot Button */}
      <button onClick={() => setChatOpen(true)} aria-label="Open chatbot" className="fixed bottom-6 right-6 z-40 rounded-full p-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white shadow-xl hover:scale-105 active:scale-95 transition">
        💬
      </button>

      {/* Simple Chat Widget */}
      {chatOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setChatOpen(false)} />
          <div className="relative w-full sm:max-w-md mx-auto m-4 rounded-2xl border border-white/20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Lumera Chat</p>
              <button onClick={() => setChatOpen(false)} className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5">✕</button>
            </div>
            <div className="mt-3 h-48 overflow-auto rounded-md bg-black/5 dark:bg-white/5 p-3 text-sm">
              <p className="opacity-70">{lang==='id' ? 'Halo! Ada yang bisa kami bantu?' : 'Hi! How can we help?'}</p>
            </div>
            <div className="mt-3 flex gap-2">
              <input placeholder={lang==='id' ? 'Tulis pesan...' : 'Type a message...'} className="flex-1 px-3 py-2 rounded-md bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10" />
              <a href="https://wa.me/6281536164746" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold">WA</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
