import CarIllustration from './CarIllustration'
import { Icon } from './icons'
import { formatRupiah } from '../data/models'
import { waLink } from '../data/site'

export default function ModelCard({ model }) {
  const specs = [
    { icon: Icon.Seat, label: `${model.seats} Kursi` },
    { icon: Icon.Gear, label: model.transmission },
    { icon: Icon.Fuel, label: model.fuel },
  ]

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        {model.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-suzuki-500 px-3 py-1 text-xs font-semibold text-white">
            {model.badge}
          </span>
        )}
        <CarIllustration
          accent={model.accent}
          className="w-full max-w-xs transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-suzuki-600">
          {model.category}
        </p>
        <h3 className="mt-1 text-xl font-bold text-ink">{model.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{model.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {specs.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-1.5 text-xs text-ink/70">
              <s.icon className="h-4 w-4 text-suzuki-500" />
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-ink/10 pt-4">
          <p className="text-xs text-ink/50">Estimasi OTR mulai</p>
          <p className="text-2xl font-extrabold text-ink">{formatRupiah(model.price)}</p>
        </div>

        <a
          href={waLink(`Halo, saya tertarik dengan Suzuki ${model.name}. Boleh minta info harga & promo kreditnya?`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-suzuki-500"
        >
          <Icon.Whatsapp className="h-4 w-4" />
          Tanya Harga & Promo
        </a>
      </div>
    </article>
  )
}
