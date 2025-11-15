import React from 'react'

export default function Footer({ lang }) {
  return (
    <footer className="mt-16 border-t border-white/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">Lumera</div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{lang==='id' ? 'Studio inovasi teknologi Gen-Z.' : 'Gen-Z tech innovation studio.'}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">{lang==='id' ? 'Tautan' : 'Links'}</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#team" className="hover:underline">Team</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 md:text-right">
          <p>© 2025 Lumera. {lang==='id' ? 'Semua Hak Dilindungi.' : 'All Rights Reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
