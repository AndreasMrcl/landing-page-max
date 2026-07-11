import { useId, useState } from 'react'
import { carOptions } from '../data/cars'
import { site, waLink } from '../data/site'

const emptyForm = {
  name: '',
  phone: '',
  carType: '',
  message: '',
}

// Kelas field seragam mengikuti gaya prototipe (latar biru muda, sudut membulat).
const fieldClass =
  'w-full rounded-field bg-field px-4 text-sm font-medium text-ink placeholder:text-placeholder ' +
  'outline-none transition focus:bg-field-strong focus:ring-2 focus:ring-brand/40'
const inputClass = `h-11 ${fieldClass}`
// select-arrow (index.css): panah kustom + ruang kanan agar tidak mepet.
const selectClass = `${inputClass} select-arrow`

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-bold text-ink">
      {children}
    </label>
  )
}

/**
 * Form kontak sales: mengumpulkan minat pembelian lalu merangkainya menjadi
 * pesan WhatsApp ke sales dan membuka wa.me.
 */
export default function BookingForm({ submitLabel = 'Hubungi Sales', accent = 'brand' }) {
  const [form, setForm] = useState(emptyForm)
  const uid = useId()

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `Halo ${site.sales.name} (Sales Suzuki ${site.city}), saya tertarik membeli mobil Suzuki:`,
      `• Nama: ${form.name || '-'}`,
      `• No. WhatsApp: ${form.phone || '-'}`,
      `• Mobil yang Diminati: ${form.carType || '-'}`,
    ]
    if (form.message.trim()) lines.push(`• Pesan: ${form.message.trim()}`)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const btnBg = accent === 'navy' ? 'bg-navy' : 'bg-brand'

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-5">
        <div className="flex-1">
          <Label htmlFor={`${uid}-name`}>Nama Lengkap</Label>
          <input
            id={`${uid}-name`}
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Jenny Wilson"
            className={inputClass}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor={`${uid}-phone`}>No. WhatsApp</Label>
          <input
            id={`${uid}-phone`}
            type="tel"
            required
            value={form.phone}
            onChange={update('phone')}
            placeholder="0812-3456-7890"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-3.5">
        <Label htmlFor={`${uid}-car`}>Mobil yang Diminati</Label>
        <select
          id={`${uid}-car`}
          required
          value={form.carType}
          onChange={update('carType')}
          className={`${selectClass} ${form.carType ? '' : 'text-placeholder'}`}
        >
          <option value="" disabled>
            Contoh: Suzuki XL7 Alpha
          </option>
          {carOptions.map((opt) => (
            <option key={opt} value={opt} className="text-ink">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-3.5">
        <Label htmlFor={`${uid}-message`}>Pesan (opsional)</Label>
        <textarea
          id={`${uid}-message`}
          rows={3}
          value={form.message}
          onChange={update('message')}
          placeholder="Tulis pertanyaan atau permintaan Anda, misalnya minta simulasi kredit."
          className={`${fieldClass} resize-none py-3`}
        />
      </div>

      <button
        type="submit"
        className={`btn-press mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-field ${btnBg} text-base font-bold text-white shadow-lift`}
      >
        {submitLabel}
      </button>
    </form>
  )
}
