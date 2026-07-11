import { useEffect, useState } from 'react'
import logo from '../assets/logo-suzuki.png'
import { nav, site, waLink } from '../data/site'
import { Icon } from './icons'

// Navbar fixed: tersembunyi saat halaman di posisi atas (hero sudah memuat
// logo + CTA sendiri), lalu turun dengan latar hampir solid saat di-scroll.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Saat navbar kembali tersembunyi, pastikan menu mobile ikut tertutup.
  useEffect(() => {
    if (!scrolled) setOpen(false)
  }, [scrolled])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/90 shadow-card backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="#beranda" className="flex items-center" onClick={() => setOpen(false)}>
            <img src={logo} alt="Suzuki" className="h-7 w-auto" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition hover:bg-brand/10 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={waLink(`Halo ${site.name}, saya ingin memesan mobil.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-press inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white sm:px-5"
            >
              <Icon.Whatsapp className="h-4 w-4" />
              Pesan
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              className="rounded-full p-2 text-ink transition hover:bg-ink/5 lg:hidden"
            >
              {open ? <Icon.Close className="h-6 w-6" /> : <Icon.Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Menu mobile: dropdown di bawah bar */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden ${
            open ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <ul className="space-y-1 border-t border-ink/10 px-4 pb-4 pt-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand/10 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
