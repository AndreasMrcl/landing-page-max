import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import { Icon } from './icons'
import { models, formatRupiah } from '../data/models'
import { waLink } from '../data/site'

const tenors = [12, 24, 36, 48, 60]
const FLAT_RATE = 0.04 // bunga flat per tahun (ilustrasi)

const benefits = [
  'DP ringan mulai 20 jutaan',
  'Bunga kompetitif & tenor sampai 5 tahun',
  'Gratis biaya admin untuk pemesanan bulan ini',
  'Bantu proses BI checking & approval cepat',
]

export default function PromoKredit() {
  const [modelId, setModelId] = useState(models[0].id)
  const [dpPercent, setDpPercent] = useState(20)
  const [tenor, setTenor] = useState(36)

  const model = models.find((m) => m.id === modelId)

  const { dp, monthly } = useMemo(() => {
    const otr = model.price
    const dpValue = Math.round((otr * dpPercent) / 100)
    const loan = otr - dpValue
    const interest = loan * FLAT_RATE * (tenor / 12)
    const monthlyValue = Math.round((loan + interest) / tenor)
    return { dp: dpValue, monthly: monthlyValue }
  }, [model, dpPercent, tenor])

  const waMessage = `Halo, saya mau simulasi kredit Suzuki ${model.name}.
DP: ${formatRupiah(dp)} (${dpPercent}%)
Tenor: ${tenor} bulan
Estimasi angsuran: ${formatRupiah(monthly)}/bulan
Mohon info penawaran resminya, terima kasih.`

  return (
    <section id="promo" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-suzuki-600">
            Promo Kredit
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Hitung Angsuran Impian Anda dalam Hitungan Detik
          </h2>
          <p className="mt-4 text-ink/65">
            Geser DP dan pilih tenor untuk melihat estimasi cicilan bulanan. Simulasi
            gratis, langsung terhubung ke sales untuk penawaran resmi.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Icon.Check className="h-4 w-4" />
                </span>
                <span className="text-ink/80">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Kalkulator */}
        <Reveal delay={120} className="rounded-3xl bg-ink p-1 shadow-card">
          <div className="rounded-[1.35rem] bg-white p-6 lg:p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="model" className="text-sm font-semibold text-ink">
                  Pilih Model
                </label>
                <select
                  id="model"
                  value={modelId}
                  onChange={(e) => setModelId(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm font-medium text-ink outline-none focus:border-suzuki-400 focus:ring-2 focus:ring-suzuki-100"
                >
                  {models.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} — {formatRupiah(m.price)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="dp" className="text-sm font-semibold text-ink">
                    Uang Muka (DP)
                  </label>
                  <span className="text-sm font-bold text-suzuki-600">{dpPercent}%</span>
                </div>
                <input
                  id="dp"
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={dpPercent}
                  onChange={(e) => setDpPercent(Number(e.target.value))}
                  className="mt-3 w-full accent-suzuki-500"
                />
                <p className="mt-1 text-sm text-ink/60">{formatRupiah(dp)}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">Tenor</p>
                <div className="mt-2 grid grid-cols-5 gap-2">
                  {tenors.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTenor(t)}
                      className={`rounded-lg py-2 text-sm font-semibold transition ${
                        tenor === t
                          ? 'bg-suzuki-500 text-white'
                          : 'bg-slate-100 text-ink/70 hover:bg-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-xs text-ink/50">dalam bulan</p>
              </div>

              <div className="rounded-2xl bg-suzuki-50 p-5 text-center">
                <p className="text-sm text-ink/60">Estimasi angsuran per bulan</p>
                <p className="mt-1 text-3xl font-extrabold text-suzuki-700">
                  {formatRupiah(monthly)}
                </p>
                <p className="mt-1 text-xs text-ink/50">
                  *Ilustrasi. Angka final mengikuti penawaran leasing.
                </p>
              </div>

              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-suzuki-500 px-6 py-3.5 text-base font-semibold text-white shadow-lift transition hover:bg-suzuki-600"
              >
                <Icon.Whatsapp className="h-5 w-5" />
                Ajukan Kredit Sekarang
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
