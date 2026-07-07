import logo from '../assets/logo-suzuki.png'
import { nav, site, waLink } from '../data/site'
import { Icon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img src={logo} alt="Suzuki" className="h-8 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
            {site.dealerName} — dealer resmi Suzuki di {site.city}. Melayani penjualan
            unit baru, kredit, tukar tambah, dan servis resmi.
          </p>
          <a
            href={waLink('Halo, saya ingin konsultasi mobil Suzuki.')}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-suzuki-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-suzuki-600"
          >
            <Icon.Whatsapp className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">Navigasi</h4>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ink/60 transition hover:text-suzuki-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">Kontak</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink/60">
            <li className="flex items-start gap-2">
              <Icon.MapPin className="mt-0.5 h-4 w-4 shrink-0 text-suzuki-500" />
              {site.address}
            </li>
            <li className="flex items-center gap-2">
              <Icon.Phone className="h-4 w-4 shrink-0 text-suzuki-500" />
              {site.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Icon.Clock className="h-4 w-4 shrink-0 text-suzuki-500" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-ink/50 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {site.dealerName}. Seluruh hak cipta dilindungi.</p>
          <p>
            Harga & simulasi bersifat ilustrasi, bukan penawaran resmi mengikat.
          </p>
        </div>
      </div>
    </footer>
  )
}
