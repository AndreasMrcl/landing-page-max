// Informasi dealer — ganti sesuai data asli.
export const site = {
  dealerName: 'Suzuki Ammertav Motor',
  city: 'Jakarta',
  phoneDisplay: '0812-3456-7890',
  phone: '+6281234567890',
  whatsapp: '6281234567890',
  address: 'Jl. Jenderal Sudirman No. 88, Jakarta Selatan',
  hours: 'Senin–Sabtu, 08.00–17.00 WIB',
  salesName: 'Tim Sales Suzuki',
}

export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const nav = [
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Model', href: '#model' },
  { label: 'Promo Kredit', href: '#promo' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
]
