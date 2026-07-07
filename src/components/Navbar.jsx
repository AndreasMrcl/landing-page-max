import { useEffect, useState } from 'react'
import logo from '../assets/logo-suzuki.png'
import { nav, site, waLink } from '../data/site'
import { Icon } from './icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Suzuki" className="h-7 w-auto lg:h-8" />
          <span className="hidden text-sm font-semibold text-ink sm:block">
            {site.dealerName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition hover:text-suzuki-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink('Halo, saya ingin konsultasi mobil Suzuki.')}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-suzuki-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition hover:bg-suzuki-600 sm:inline-flex"
          >
            <Icon.Whatsapp className="h-4 w-4" />
            Chat Sales
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          >
            {open ? <Icon.Close className="h-6 w-6" /> : <Icon.Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-ink/5 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-3 text-sm font-medium text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink('Halo, saya ingin konsultasi mobil Suzuki.')}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-suzuki-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <Icon.Whatsapp className="h-4 w-4" />
              Chat Sales
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
