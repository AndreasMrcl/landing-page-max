import Reveal from './Reveal'
import { Icon } from './icons'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Ertiga',
    quote:
      'Prosesnya cepat banget, sehari langsung di-approve. Sales-nya sabar jelasin simulasi kredit sampai saya paham. Recommended!',
    initials: 'BS',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Pemilik XL7 Hybrid',
    quote:
      'Test drive-nya dianter ke rumah, jadi bisa coba dulu tanpa ribet. DP-nya juga ringan sesuai budget keluarga.',
    initials: 'SN',
  },
  {
    name: 'Andi Wijaya',
    role: 'Pengusaha (Carry Pick Up)',
    quote:
      'Beli 3 unit Carry buat usaha, dapat harga spesial dan after-sales-nya jelas. Servis gampang, sparepart murah.',
    initials: 'AW',
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-suzuki-600">
            Testimoni
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Dipercaya Ribuan Keluarga Indonesia
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-suzuki-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon.Star key={i} className="h-5 w-5" />
            ))}
            <span className="ml-2 text-sm font-semibold text-ink">
              4.9/5 dari 1.200+ pelanggan
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-suzuki-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon.Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-ink/80">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-suzuki-100 text-sm font-bold text-suzuki-700">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/60">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
