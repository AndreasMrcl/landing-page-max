// Katalog unit — memakai aset asli di src/assets.
// Harga adalah harga jual per unit (estimasi OTR, ganti sesuai pricelist dealer).
// cc/power/tech juga estimasi untuk tampilan; sesuaikan dengan spesifikasi resmi.

import ertigaGa from '../assets/all-new-ertiga-ga.png'
import ertigaGl from '../assets/all-new-ertiga-gl.png'
import ertigaHybridGx from '../assets/all-new-ertiga-hybrid-gx.png'
import ertigaHybridCruise from '../assets/all-new-ertiga-hybrid-cruise.png'
import xl7Zeta from '../assets/xl7-zeta.png'
import xl7Beta from '../assets/xl7-hybrid-beta.png'
import xl7Alpha from '../assets/xl7-hybrid-alpha.png'
import xl7AlphaKuro from '../assets/xl7-hybrid-alpha-kuro.png'
import fronxGl from '../assets/fronx-hybrid-gl.png'
import fronxGx from '../assets/fronx-hybrid-gx.png'
import fronxSgx from '../assets/fronx-hybrid-sgx.png'
import grandVitaraGlx from '../assets/grand-vitara-glx.png'
import grandVitaraGlxTwoTone from '../assets/grand-vitara-glx-two-one.png'
import jimny3 from '../assets/jimny-3-doors.png'
import jimny5 from '../assets/jimny-5-doors.png'
import carryFd from '../assets/carry-fd.png'
import carryWd from '../assets/carry-wd.png'
import sPresso from '../assets/s-presso.png'

// group dipakai untuk filter kategori pada katalog.
export const cars = [
  // XL7
  { id: 'xl7-zeta', brand: 'XL7', variant: 'Zeta', group: 'XL7', image: xl7Zeta, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 272000000, cc: 1462, power: '105 PS', tech: 'Dual VVT & ESP' },
  { id: 'xl7-beta', brand: 'XL7', variant: 'Beta', group: 'XL7', image: xl7Beta, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 291500000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'xl7-alpha', brand: 'XL7', variant: 'Alpha', group: 'XL7', image: xl7Alpha, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 300500000, badge: 'Populer', cc: 1462, power: '105 PS', tech: 'Smart Hybrid & Cruise Control' },
  { id: 'xl7-alpha-kuro', brand: 'XL7', variant: 'Alpha Kuro', group: 'XL7', image: xl7AlphaKuro, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 312000000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid & Suzuki Safety Support' },

  // Fronx
  { id: 'fronx-gl', brand: 'Fronx', variant: 'GL', group: 'Fronx', image: fronxGl, transmission: 'Manual', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 259000000, cc: 1462, power: '100 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'fronx-gx', brand: 'Fronx', variant: 'GX', group: 'Fronx', image: fronxGx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 289500000, cc: 1462, power: '100 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'fronx-sgx', brand: 'Fronx', variant: 'SGX', group: 'Fronx', image: fronxSgx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 321000000, badge: 'Baru', cc: 1462, power: '100 PS', tech: 'Smart Hybrid & Suzuki Safety Support' },

  // Ertiga
  { id: 'ertiga-ga', brand: 'All New Ertiga', variant: 'GA', group: 'Ertiga', image: ertigaGa, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 238000000, cc: 1462, power: '105 PS', tech: 'Dual VVT & ESP' },
  { id: 'ertiga-gl', brand: 'All New Ertiga', variant: 'GL', group: 'Ertiga', image: ertigaGl, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 258500000, cc: 1462, power: '105 PS', tech: 'Dual VVT & ESP' },
  { id: 'ertiga-hybrid-gx', brand: 'All New Ertiga', variant: 'Hybrid GX', group: 'Ertiga', image: ertigaHybridGx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 285000000, badge: 'Terlaris', cc: 1462, power: '105 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'ertiga-hybrid-cruise', brand: 'All New Ertiga', variant: 'Hybrid Cruise', group: 'Ertiga', image: ertigaHybridCruise, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 299000000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid & Cruise Control' },

  // Grand Vitara
  { id: 'grand-vitara-glx', brand: 'Grand Vitara', variant: 'GLX', group: 'Grand Vitara', image: grandVitaraGlx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 386000000, cc: 1462, power: '103 PS', tech: 'Smart Hybrid & AllGrip' },
  { id: 'grand-vitara-glx-two-tone', brand: 'Grand Vitara', variant: 'GLX Two Tone', group: 'Grand Vitara', image: grandVitaraGlxTwoTone, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 392000000, cc: 1462, power: '103 PS', tech: 'Smart Hybrid & AllGrip' },

  // Jimny
  { id: 'jimny-3', brand: 'Jimny', variant: '3 Doors', group: 'Jimny', image: jimny3, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 462000000, badge: 'Limited', cc: 1462, power: '102 PS', tech: 'AllGrip Pro 4x4' },
  { id: 'jimny-5', brand: 'Jimny', variant: '5 Doors', group: 'Jimny', image: jimny5, transmission: 'Matic', fuel: 'Bensin', payment: 'Cash/Kredit', price: 496500000, badge: 'Limited', cc: 1462, power: '102 PS', tech: 'AllGrip Pro 4x4' },

  // Niaga
  { id: 'carry-fd', brand: 'New Carry', variant: 'Flat Deck', group: 'Niaga', image: carryFd, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 173500000, cc: 1462, power: '97 PS', tech: 'Torsi Besar 135 Nm' },
  { id: 'carry-wd', brand: 'New Carry', variant: 'Wide Deck', group: 'Niaga', image: carryWd, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 179000000, cc: 1462, power: '97 PS', tech: 'Torsi Besar 135 Nm' },

  // City car
  { id: 's-presso', brand: 'S-Presso', variant: 'MT', group: 'City Car', image: sPresso, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 176500000, cc: 998, power: '68 PS', tech: 'ISS & Dual Airbag' },
]

// Daftar grup unik untuk chip filter (diawali "Semua").
export const carGroups = ['Semua', ...Array.from(new Set(cars.map((c) => c.group)))]

// Opsi <select> "Pilih Tipe Mobil" pada form pemesanan.
export const carOptions = cars.map((c) => `Suzuki ${c.brand} ${c.variant}`)

export const formatRupiah = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)

// Angka biasa dengan pemisah ribuan (mis. kapasitas mesin: 1462 → "1.462").
export const formatNumber = (value) => new Intl.NumberFormat('id-ID').format(value)
