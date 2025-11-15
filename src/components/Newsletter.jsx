import React, { useState } from 'react'

export default function Newsletter({ lang }) {
  const [email, setEmail] = useState('')
  const [optWA, setOptWA] = useState(true)
  const [status, setStatus] = useState('idle')

  const handleSubscribe = () => {
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      if (optWA) {
        const msg = encodeURIComponent(`Lumera Newsletter Subscribe\nEmail: ${email}\nPlease confirm my subscription.`)
        window.open(`https://wa.me/6281536164746?text=${msg}`, '_blank')
      } else {
        alert(lang === 'id' ? 'Berhasil berlangganan!' : 'Subscribed successfully!')
      }
    }, 600)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl sm:text-3xl font-bold">{lang === 'id' ? 'Berlangganan Newsletter' : 'Subscribe to Newsletter'}</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">{lang === 'id' ? 'Dapatkan update produk, insight, dan ide automasi.' : 'Get product updates, insights, and automation ideas.'}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <input type="email" aria-label="Email" placeholder="email@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-lg bg-white/80 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button onClick={handleSubscribe} disabled={!email || status==='loading'} className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold disabled:opacity-50">
            {status === 'loading' ? (lang === 'id' ? 'Memproses...' : 'Processing...') : (lang === 'id' ? 'Subscribe' : 'Subscribe')}
          </button>
        </div>
        <label className="mt-3 inline-flex items-center gap-2">
          <input type="checkbox" checked={optWA} onChange={(e) => setOptWA(e.target.checked)} />
          <span className="text-sm text-zinc-600 dark:text-zinc-300">{lang === 'id' ? 'Kirim konfirmasi via WhatsApp' : 'Send confirmation via WhatsApp'}</span>
        </label>
      </div>
    </section>
  )
}
