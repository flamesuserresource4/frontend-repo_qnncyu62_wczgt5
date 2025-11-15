import React, { useState } from 'react'
import { Mail, MapPin, Send, Instagram, Twitter, Github } from 'lucide-react'

export default function Contact({ lang }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      const msg = encodeURIComponent(`Lumera Contact Form\nName: ${name}\nEmail: ${email}\nMessage: ${message}`)
      window.open(`https://wa.me/6281536164746?text=${msg}`, '_blank')
    }, 600)
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-bold">{lang === 'id' ? 'Kontak' : 'Contact'}</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">{lang === 'id' ? 'Tinggalkan pesan — kami akan merespon cepat.' : 'Leave a message — we respond fast.'}</p>
          <div className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <p className="inline-flex items-center gap-2"><Mail size={16} /> hello@lumera.dev</p>
            <p className="inline-flex items-center gap-2"><MapPin size={16} /> Jakarta, Indonesia</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"><Instagram size={16} /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"><Twitter size={16} /></a>
              <a href="#" aria-label="Github" className="p-2 rounded-md bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"><Github size={16} /></a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">{lang === 'id' ? 'Nama' : 'Name'}</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm">{lang === 'id' ? 'Pesan' : 'Message'}</label>
            <textarea required rows="5" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          </div>
          <button disabled={status==='loading'} className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold disabled:opacity-50">
            <Send size={16} /> {status==='loading' ? (lang==='id' ? 'Mengirim...' : 'Sending...') : (lang==='id' ? 'Kirim' : 'Send')}
          </button>
        </form>
      </div>
    </section>
  )
}
