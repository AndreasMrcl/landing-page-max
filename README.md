# Suzuki Dealer — Landing Page

Landing page dealer resmi Suzuki: hero, keunggulan, katalog model, simulasi
kredit interaktif, testimoni, FAQ, dan form test drive. Dibangun dengan
**React 19 + Vite + Tailwind CSS v4**, konten berbahasa Indonesia.

## Menjalankan

```bash
npm install
npm run dev      # server pengembangan (http://localhost:5173)
npm run build    # build produksi ke folder dist/
npm run preview  # pratinjau hasil build
npm run lint     # cek lint
```

## Struktur

```
src/
├── App.jsx                # merangkai semua section
├── index.css              # Tailwind + theme brand Suzuki
├── data/
│   ├── site.js            # info dealer, nomor WhatsApp, menu navigasi
│   └── models.js          # data model mobil + format Rupiah
└── components/
    ├── Navbar.jsx         # header sticky + menu mobile
    ├── Hero.jsx           # bagian utama + CTA
    ├── Highlights.jsx     # keunggulan / kenapa beli di sini
    ├── ModelCatalog.jsx   # katalog + filter kategori
    ├── ModelCard.jsx      # kartu tiap model
    ├── PromoKredit.jsx    # kalkulator simulasi cicilan
    ├── Testimonials.jsx   # testimoni pelanggan
    ├── Faq.jsx            # accordion pertanyaan umum
    ├── LeadForm.jsx       # form test drive → WhatsApp
    ├── Footer.jsx
    ├── FloatingWhatsapp.jsx
    ├── CarIllustration.jsx# ilustrasi mobil (SVG inline)
    ├── Reveal.jsx         # animasi muncul saat scroll
    └── icons.jsx          # ikon SVG inline
```

## Kustomisasi cepat

- **Nomor WhatsApp, alamat, jam buka, nama dealer** → `src/data/site.js`
- **Model, harga, spesifikasi** → `src/data/models.js`
- **Warna brand** → variabel `--color-suzuki-*` di `src/index.css`

## Catatan

- Form test drive dan tombol kredit mengarah ke WhatsApp (`wa.me`) — tidak butuh
  backend. Untuk menyimpan leads ke database, hubungkan `handleSubmit` di
  `LeadForm.jsx` ke API/endpoint Anda.
- Harga dan simulasi cicilan bersifat ilustrasi, bukan penawaran resmi.
