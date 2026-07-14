import logo from '../assets/logo-2.png'
import { nav, site } from '../data/site'
import { Icon } from './icons'

const socials = [
  { key: 'instagram', href: site.social.instagram.href, label: 'Instagram', Comp: Icon.Instagram },
  { key: 'facebook', href: site.social.facebook.href, label: 'Facebook', Comp: Icon.Facebook },
  { key: 'whatsapp', href: site.social.whatsapp.href, label: 'WhatsApp', Comp: Icon.Whatsapp },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Suzuki" className="h-22 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Dealer resmi mobil Suzuki di {site.city} — unit lengkap, harga terbaik, serta layanan
            pembelian cash maupun kredit yang mudah dan terpercaya.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ key, href, label, Comp }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Comp className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Navigasi</h4>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/70 transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Kontak</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Icon.MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {site.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon.Phone className="h-4 w-4 shrink-0" />
              {site.phoneDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon.Clock className="h-4 w-4 shrink-0" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-white/60 lg:px-8">
          © {new Date().getFullYear()} {site.name} — {site.brandLine}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}
