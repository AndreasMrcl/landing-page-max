import { useState } from 'react'
import Reveal from './Reveal'
import { Icon } from './icons'
import { models } from '../data/models'
import { site, waLink } from '../data/site'

const empty = { nama: '', hp: '', model: models[0].name, jadwal: '', pesan: '' }

export default function LeadForm() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Halo ${site.dealerName}, saya ingin jadwalkan TEST DRIVE.
Nama: ${form.nama}
No. HP: ${form.hp}
Model: ${form.model}
Jadwal diinginkan: ${form.jadwal || '-'}
Catatan: ${form.pesan || '-'}`
    window.open(waLink(message), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section id="test-drive" className="relative overflow-hidden bg-ink py-16 lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-suzuki-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-suzuki-700/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal className="text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-suzuki-300">
            Jadwalkan Test Drive
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Coba Dulu, Baru Yakin. Gratis & Tanpa Paksaan.
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Isi form di samping, dan tim sales kami akan menghubungi Anda untuk mengatur
            jadwal test drive — bisa di dealer atau langsung ke rumah Anda.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-white/85">
              <Icon.Phone className="h-5 w-5 text-suzuki-300" />
              {site.phoneDisplay}
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <Icon.MapPin className="h-5 w-5 text-suzuki-300" />
              {site.address}
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <Icon.Clock className="h-5 w-5 text-suzuki-300" />
              {site.hours}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-3xl bg-white p-6 shadow-card lg:p-8">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Icon.Check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">Permintaan Terkirim!</h3>
              <p className="mt-2 max-w-sm text-ink/65">
                Kami membuka WhatsApp untuk menyelesaikan pengiriman. Jika belum terbuka,
                silakan hubungi kami langsung. Terima kasih, {form.nama || 'Sahabat Suzuki'}!
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(empty)
                  setSent(false)
                }}
                className="mt-6 text-sm font-semibold text-suzuki-600 hover:underline"
              >
                Kirim permintaan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nama" className="text-sm font-semibold text-ink">
                  Nama Lengkap
                </label>
                <input
                  id="nama"
                  type="text"
                  required
                  value={form.nama}
                  onChange={update('nama')}
                  placeholder="Nama Anda"
                  className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-suzuki-400 focus:ring-2 focus:ring-suzuki-100"
                />
              </div>

              <div>
                <label htmlFor="hp" className="text-sm font-semibold text-ink">
                  Nomor WhatsApp
                </label>
                <input
                  id="hp"
                  type="tel"
                  required
                  value={form.hp}
                  onChange={update('hp')}
                  placeholder="08xxxxxxxxxx"
                  className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-suzuki-400 focus:ring-2 focus:ring-suzuki-100"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="model" className="text-sm font-semibold text-ink">
                    Model
                  </label>
                  <select
                    id="model"
                    value={form.model}
                    onChange={update('model')}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-suzuki-400 focus:ring-2 focus:ring-suzuki-100"
                  >
                    {models.map((m) => (
                      <option key={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="jadwal" className="text-sm font-semibold text-ink">
                    Tanggal
                  </label>
                  <input
                    id="jadwal"
                    type="date"
                    value={form.jadwal}
                    onChange={update('jadwal')}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-suzuki-400 focus:ring-2 focus:ring-suzuki-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pesan" className="text-sm font-semibold text-ink">
                  Catatan (opsional)
                </label>
                <textarea
                  id="pesan"
                  rows="3"
                  value={form.pesan}
                  onChange={update('pesan')}
                  placeholder="Contoh: minta dihubungi sore hari"
                  className="mt-1.5 w-full resize-none rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-suzuki-400 focus:ring-2 focus:ring-suzuki-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-suzuki-500 px-6 py-3.5 text-base font-semibold text-white shadow-lift transition hover:bg-suzuki-600"
              >
                <Icon.Whatsapp className="h-5 w-5" />
                Kirim & Jadwalkan
              </button>
              <p className="text-center text-xs text-ink/50">
                Dengan mengirim, Anda setuju dihubungi oleh tim sales kami.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
