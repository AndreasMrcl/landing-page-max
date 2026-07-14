// Informasi bisnis — ganti sesuai data asli.
export const site = {
  name: 'Suzuki Mobil Semarang',
  brandLine: 'Dealer Resmi',
  city: 'Semarang',
  tagline: 'Mobil Nyaman, Harga Aman.',
  // Harus sama dengan social.whatsapp di bawah (dipakai semua CTA WhatsApp & nomor telepon).
  phoneDisplay: '0821-330-7751',
  whatsapp: '628213307751',
  email: 'halo@suzukimobilsemarang.id',
  address:
    'Kompleks Graha Taman Karet, Kedungpane, Mijen, Bukit Semarang, Baru City, Kota Semarang, Jawa Tengah 50211',
  hours: 'Setiap hari, 07.00–21.00 WIB',
  // Sales pendamping — ganti nama sesuai data asli.
  sales: {
    name: 'Max',
    role: 'Sales Consultant Resmi Suzuki',
  },
  // Google Maps embed (tanpa API key). Ganti query dengan alamat asli bila perlu.
  mapEmbed:
    'https://www.google.com/maps?q=Graha%20Taman%20Karet%2C%20Kedungpane%2C%20Mijen%2C%20Kota%20Semarang%2050211&z=15&output=embed',
  // Tiap kanal: href untuk tautan, handle untuk teks yang ditampilkan.
  social: {
    instagram: { href: 'https://instagram.com/maxsuzukimobil_sit', handle: '@maxsuzukimobil_sit' },
    facebook: { href: 'https://facebook.com/maxsuzukimobilsit', handle: 'Max Suzuki SIT BSB' },
    whatsapp: { href: 'https://wa.me/628213307751', handle: '0821-330-7751 (MAX)' },
  },
}

export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const nav = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Cara Order', href: '#cara-order' },
  { label: 'Unit Mobil', href: '#unit-mobil' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Kontak', href: '#kontak' },
]
