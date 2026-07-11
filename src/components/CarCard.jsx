import { useState } from 'react'
import fuelIcon from '../assets/fuel.png'
import paymentIcon from '../assets/payment.png'
import transmissionIcon from '../assets/transmission.png'
import { formatNumber, formatRupiah } from '../data/cars'
import { waLink } from '../data/site'

function Spec({ icon, children }) {
  return (
    <span className="flex items-center gap-1.5 text-[13px] text-ink">
      <img src={icon} alt="" className="h-5 w-5 shrink-0 object-contain" />
      {children}
    </span>
  )
}

// Satu baris detail pada sisi belakang kartu.
function DetailRow({ label, value }) {
  return (
    <div className="border-b border-white/15 pb-3">
      <dt className="text-[11px] font-medium uppercase tracking-wide text-white/60">{label}</dt>
      <dd className="mt-0.5 text-base font-bold leading-snug">{value}</dd>
    </div>
  )
}

export default function CarCard({ car }) {
  const [flipped, setFlipped] = useState(false)
  const fullName = `Suzuki ${car.brand} ${car.variant}`
  const priceText = formatRupiah(car.price)
  // Tombol harga (depan): sekadar bertanya. Tombol belakang: niat memesan.
  const inquiryMessage = `Halo, saya ingin bertanya mengenai ${fullName} (${priceText}). Boleh minta info lebih lengkap dan ketersediaannya?`
  const orderMessage = `Halo, saya ingin memesan ${fullName} (${priceText}). Apakah unit tersedia?`

  const stop = (e) => e.stopPropagation()

  return (
    <div className={`flip-card h-full ${flipped ? 'is-flipped' : ''}`}>
      <div
        className="flip-inner cursor-pointer"
        onClick={() => setFlipped((v) => !v)}
      >
        {/* ── Depan ── */}
        <article className="flip-face flex h-full flex-col rounded-2xl bg-white p-6 text-left shadow-card">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-extrabold leading-none text-ink">{car.brand}</h3>
              <p className="mt-1 text-lg leading-none text-ink">{car.variant}</p>
            </div>
            {car.badge && (
              <span className="rounded-full bg-field px-3 py-1 text-[11px] font-semibold text-navy">
                {car.badge}
              </span>
            )}
          </div>

          <div className="flex flex-1 items-center justify-center py-5">
            <img
              src={car.image}
              alt={fullName}
              loading="lazy"
              className="h-auto w-full max-w-60 object-contain"
            />
          </div>

          <div className="mb-4 flex items-center justify-center gap-5">
            <Spec icon={transmissionIcon}>{car.transmission}</Spec>
            <Spec icon={fuelIcon}>{car.fuel}</Spec>
            <Spec icon={paymentIcon}>{car.payment}</Spec>
          </div>

          <div className="space-y-2.5">
            <a
              href={waLink(inquiryMessage)}
              target="_blank"
              rel="noreferrer"
              onClick={stop}
              tabIndex={flipped ? -1 : 0}
              className="btn-press flex h-12 items-center justify-center rounded-field bg-field text-base font-bold text-ink"
            >
              {priceText}
            </a>
            <button
              type="button"
              onClick={(e) => {
                stop(e)
                setFlipped(true)
              }}
              tabIndex={flipped ? -1 : 0}
              className="btn-press flex h-10 w-full items-center justify-center rounded-field border border-navy/25 text-sm font-bold text-navy"
            >
              Lihat Detail
            </button>
          </div>
        </article>

        {/* ── Belakang ── */}
        <article className="flip-face flip-back flex h-full flex-col rounded-2xl bg-navy p-6 text-left text-white shadow-card">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-extrabold leading-none">{car.brand}</h3>
              <p className="mt-1 text-sm text-white/70">{car.variant}</p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                stop(e)
                setFlipped(false)
              }}
              aria-label="Tutup detail"
              tabIndex={flipped ? 0 : -1}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg leading-none transition hover:bg-white/25"
            >
              ×
            </button>
          </div>

          <dl className="mt-5 flex flex-1 flex-col justify-center gap-3.5">
            <DetailRow label="Kapasitas Mesin" value={`${formatNumber(car.cc)} cc`} />
            <DetailRow label="Tenaga" value={car.power} />
            <DetailRow label="Teknologi" value={car.tech} />
          </dl>

          <a
            href={waLink(orderMessage)}
            target="_blank"
            rel="noreferrer"
            onClick={stop}
            tabIndex={flipped ? 0 : -1}
            className="btn-press mt-4 flex h-12 items-center justify-center rounded-field bg-white text-base font-bold text-navy"
          >
            Pesan Sekarang
          </a>
        </article>
      </div>
    </div>
  )
}
