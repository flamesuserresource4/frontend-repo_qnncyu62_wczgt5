import React from 'react'
import { Menu, Sun, Moon, Languages } from 'lucide-react'

export default function Header({ lang, setLang, theme, setTheme, onOpenChat }) {
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('lumera-theme', next)
  }

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-sm md:text-base px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
      {children}
    </a>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/50 bg-white/80 dark:bg-zinc-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <a href="#home" className="font-extrabold tracking-tight text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">
            Lumera
          </a>
        </div>
        <nav className="hidden md:flex items-center">
          <NavLink href="#home">{lang === 'id' ? 'Beranda' : 'Home'}</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#team">{lang === 'id' ? 'Tim' : 'Team'}</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} aria-label="Toggle language" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">
            <Languages size={18} />
            <span className="text-sm font-medium">{lang === 'id' ? 'ID' : 'EN'}</span>
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="https://wa.me/6281536164746" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-transform">
            {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
          </a>
        </div>
      </div>
    </header>
  )
}
