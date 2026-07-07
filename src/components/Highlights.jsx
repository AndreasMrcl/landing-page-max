import Reveal from './Reveal'
import { Icon } from './icons'

const items = [
  {
    icon: Icon.Wallet,
    title: 'Harga Terbaik & Transparan',
    desc: 'Penawaran OTR terendah dengan rincian jelas. Tanpa biaya tersembunyi.',
  },
  {
    icon: Icon.Wrench,
    title: 'Proses Kredit Cepat',
    desc: 'Approval bisa 1 hari kerja. Bantu urus dari awal sampai mobil di tangan.',
  },
  {
    icon: Icon.Users,
    title: 'Test Drive Gratis',
    desc: 'Coba unit favorit Anda langsung di rumah tanpa biaya dan tanpa paksaan.',
  },
  {
    icon: Icon.Shield,
    title: 'After-Sales Terjamin',
    desc: 'Servis resmi, suku cadang asli, dan garansi pabrik hingga 5 tahun.',
  },
]

export default function Highlights() {
  return (
    <section id="keunggulan" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-suzuki-600">
          Kenapa Beli di Sini
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Pengalaman Beli Mobil yang Mudah & Menyenangkan
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 90}
            className="group rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-suzuki-200 hover:shadow-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-suzuki-50 text-suzuki-600 transition group-hover:bg-suzuki-500 group-hover:text-white">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
