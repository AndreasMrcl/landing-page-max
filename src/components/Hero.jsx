import CarIllustration from './CarIllustration'
import Reveal from './Reveal'
import { Icon } from './icons'
import { site, waLink } from '../data/site'

const stats = [
  { value: '20 Jt-an', label: 'DP ringan' },
  { value: '4.9/5', label: 'Rating pelanggan' },
  { value: '1 Hari', label: 'Proses cepat' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-suzuki-50 via-white to-white pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* ornamen latar */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-suzuki-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-suzuki-200 bg-white px-4 py-1.5 text-xs font-semibold text-suzuki-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-suzuki-500" />
            Dealer Resmi Suzuki • {site.city}
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Wujudkan Mobil{' '}
            <span className="bg-gradient-to-r from-suzuki-500 to-suzuki-700 bg-clip-text text-transparent">
              Suzuki
            </span>{' '}
            Impian Keluarga Anda
          </Reveal>

          <Reveal as="p" delay={160} className="mt-5 max-w-xl text-lg text-ink/70">
            Promo kredit terbaik bulan ini, DP ringan, angsuran fleksibel, dan{' '}
            <strong className="text-ink">test drive gratis</strong> di rumah Anda.
            Konsultasi langsung tanpa biaya dengan sales berpengalaman.
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink('Halo, saya mau tanya promo kredit Suzuki terbaru.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-suzuki-500 px-7 py-3.5 text-base font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-suzuki-600"
            >
              <Icon.Whatsapp className="h-5 w-5" />
              Konsultasi Gratis
            </a>
            <a
              href="#model"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30"
            >
              Lihat Semua Model
              <Icon.ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-ink lg:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-ink/60 lg:text-sm">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative">
          <div className="animate-float rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-ink/5 lg:p-8">
            <div className="rounded-2xl bg-gradient-to-br from-suzuki-500 to-suzuki-700 p-6">
              <CarIllustration accent="#ffffff" className="w-full drop-shadow-lg" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-ink/60">Mulai dari</p>
                <p className="text-2xl font-extrabold text-ink">Rp 168 Juta</p>
              </div>
              <span className="rounded-full bg-suzuki-50 px-4 py-2 text-sm font-semibold text-suzuki-700">
                Bunga 0%*
              </span>
            </div>
          </div>

          {/* kartu mengambang */}
          <div className="absolute -left-4 -bottom-4 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink/5 sm:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Icon.Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Garansi 5 Tahun</p>
              <p className="text-xs text-ink/60">100.000 km</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
