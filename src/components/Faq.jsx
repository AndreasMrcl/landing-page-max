import { useState } from 'react'
import Reveal from './Reveal'
import { Icon } from './icons'

const faqs = [
  {
    q: 'Berapa DP minimal untuk kredit Suzuki?',
    a: 'DP bisa mulai dari 15–20% tergantung model dan program leasing yang berjalan. Untuk beberapa unit ada promo DP ringan mulai 20 jutaan. Hubungi sales kami untuk simulasi sesuai budget Anda.',
  },
  {
    q: 'Apakah bisa test drive dulu sebelum membeli?',
    a: 'Tentu. Test drive gratis dan bisa kami antar ke rumah atau kantor Anda. Cukup isi form jadwal test drive atau chat sales kami via WhatsApp.',
  },
  {
    q: 'Berapa lama proses approval kredit?',
    a: 'Untuk data yang lengkap, approval umumnya bisa selesai dalam 1 hari kerja. Tim kami membantu proses dari pengajuan hingga serah terima unit.',
  },
  {
    q: 'Apakah harga sudah termasuk BBN dan asuransi?',
    a: 'Harga yang tertera adalah estimasi OTR. Rincian lengkap termasuk BBN, asuransi, dan biaya lain akan kami jelaskan transparan pada penawaran resmi.',
  },
  {
    q: 'Bagaimana dengan garansi dan servis berkala?',
    a: 'Semua unit bergaransi resmi pabrik hingga 5 tahun atau 100.000 km. Servis berkala dan suku cadang asli tersedia di bengkel resmi Suzuki.',
  },
]

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink">{item.q}</span>
        <Icon.ChevronDown
          className={`h-5 w-5 shrink-0 text-suzuki-500 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-ink/70">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-suzuki-600">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Pertanyaan yang Sering Diajukan
        </h2>
      </Reveal>

      <Reveal className="mt-10">
        {faqs.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </Reveal>
    </section>
  )
}
