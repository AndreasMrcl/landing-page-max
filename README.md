# Suzuki Mobil Semarang — Landing Page Rental

Landing page rental mobil Suzuki: hero + form pemesanan, cara sewa (How To
Order), katalog unit dengan filter kategori, keunggulan layanan, dan kontak
dengan peta. Dibangun dengan **React 19 + Vite + Tailwind CSS v4**, konten
berbahasa Indonesia, dan responsif (mobile-first).

Desain mengikuti prototipe pada folder `vite-app/` (hanya referensi), namun
ditulis ulang dengan struktur komponen yang rapi, data-driven, dan responsif.

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
├── index.css              # Tailwind v4 + theme warna rental (biru)
├── assets/                # gambar mobil Suzuki + logo (disediakan pengguna)
├── data/
│   ├── site.js            # info bisnis, WhatsApp, navigasi, peta, opsi kebutuhan
│   ├── cars.js            # katalog unit (import 18 aset) + format Rupiah
│   └── content.js         # langkah "How To Order" + fitur "Best Service"
└── components/
    ├── Header.jsx         # header sticky + menu mobile
    ├── Hero.jsx           # judul + tagline + form pemesanan + mobil unggulan
    ├── BookingForm.jsx    # form pemesanan reusable → WhatsApp (Hero & Kontak)
    ├── HowToOrder.jsx     # 3 langkah pemesanan
    ├── UnitCars.jsx       # katalog unit + filter kategori
    ├── CarCard.jsx        # kartu tiap unit + tombol harga → WhatsApp
    ├── BestService.jsx    # keunggulan layanan
    ├── ContactUs.jsx      # sosial media + form + Google Maps embed
    ├── Footer.jsx
    ├── FloatingWhatsapp.jsx
    ├── Reveal.jsx         # animasi muncul saat scroll
    └── icons.jsx          # ikon SVG inline (tanpa CDN)
```

## Kustomisasi cepat

- **Nomor WhatsApp, alamat, jam buka, sosial media, lokasi peta** → `src/data/site.js`
- **Unit mobil, tarif sewa/hari, transmisi/bahan bakar** → `src/data/cars.js`
  (tambahkan aset baru ke `src/assets/` lalu import di file ini)
- **Langkah pemesanan & keunggulan** → `src/data/content.js`
- **Warna brand / field** → variabel `--color-*` di `src/index.css`

## Catatan

- Form pemesanan dan tombol harga mengarah ke WhatsApp (`wa.me`) — tanpa
  backend. Untuk menyimpan pemesanan ke database, hubungkan `handleSubmit` di
  `BookingForm.jsx` ke API/endpoint Anda.
- Peta memakai Google Maps embed (tanpa API key); ganti `mapEmbed` di
  `src/data/site.js` dengan lokasi asli.
- Aset yang belum tersedia (mis. gambar hero/section khusus) sementara memakai
  aset mobil yang ada dan mudah diganti nanti.
- Tarif sewa bersifat estimasi untuk tampilan, bukan penawaran resmi.
