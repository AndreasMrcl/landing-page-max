import { useMemo, useState } from 'react'
import ModelCard from './ModelCard'
import Reveal from './Reveal'
import { models } from '../data/models'

const filters = ['Semua', 'MPV', 'SUV', 'Hatchback', 'Niaga']

export default function ModelCatalog() {
  const [active, setActive] = useState('Semua')

  const shown = useMemo(
    () => (active === 'Semua' ? models : models.filter((m) => m.group === active)),
    [active],
  )

  return (
    <section id="model" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-suzuki-600">
            Katalog Model
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Pilih Suzuki yang Paling Cocok untuk Anda
          </h2>
          <p className="mt-4 text-ink/65">
            Dari MPV keluarga sampai kendaraan niaga — semua tersedia dengan promo terbaik.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === f
                  ? 'bg-suzuki-500 text-white shadow-lift'
                  : 'bg-white text-ink/70 ring-1 ring-ink/10 hover:ring-suzuki-200'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((model, i) => (
            <Reveal key={model.id} delay={(i % 3) * 90}>
              <ModelCard model={model} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
