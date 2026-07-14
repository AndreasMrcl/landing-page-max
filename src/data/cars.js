// Katalog unit — memakai aset asli di src/assets.
// Harga adalah harga jual per unit (estimasi OTR, ganti sesuai pricelist dealer).
// cc/power/tech juga estimasi untuk tampilan; sesuaikan dengan spesifikasi resmi.

import ertigaGa from '../assets/all-new-ertiga-ga.webp'
import ertigaGl from '../assets/all-new-ertiga-gl.webp'
import ertigaHybridGx from '../assets/all-new-ertiga-hybrid-gx.webp'
import ertigaHybridCruise from '../assets/all-new-ertiga-hybrid-cruise.webp'
import xl7Zeta from '../assets/xl7-zeta.webp'
import xl7Beta from '../assets/xl7-hybrid-beta.webp'
import xl7Alpha from '../assets/xl7-hybrid-alpha.webp'
import xl7AlphaKuro from '../assets/xl7-hybrid-alpha-kuro.webp'
import fronxGl from '../assets/fronx-hybrid-gl.webp'
import fronxGx from '../assets/fronx-hybrid-gx.webp'
import fronxSgx from '../assets/fronx-hybrid-sgx.webp'
import grandVitaraGlx from '../assets/grand-vitara-glx.webp'
import grandVitaraGlxTwoTone from '../assets/grand-vitara-glx-two-one.webp'
import jimny3 from '../assets/jimny-3-doors.webp'
import jimny5 from '../assets/jimny-5-doors.webp'
import carryFd from '../assets/carry-fd.webp'
import carryWd from '../assets/carry-wd.webp'
import sPresso from '../assets/s-presso.webp'

// group dipakai untuk filter kategori pada katalog.
export const cars = [
  // XL7
  { id: 'xl7-zeta', brand: 'XL7', variant: 'Zeta', group: 'XL7', image: xl7Zeta, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 285000000, cc: 1462, power: '105 PS', tech: 'Dual VVT & ESP' },
  { id: 'xl7-beta', brand: 'XL7 Hybrid', variant: 'Beta', group: 'XL7', image: xl7Beta, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 313500000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'xl7-alpha', brand: 'XL7 Hybrid', variant: 'Alpha', group: 'XL7', image: xl7Alpha, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 325000000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid & Cruise Control' },
  { id: 'xl7-alpha-kuro', brand: 'XL7 Hybrid', variant: 'Alpha Kuro', group: 'XL7', image: xl7AlphaKuro, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 340500000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid & Suzuki Safety Support' },

  // Ertiga
  { id: 'ertiga-ga', brand: 'All New Ertiga', variant: 'GA', group: 'Ertiga', image: ertigaGa, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 255100000, cc: 1462, power: '105 PS', tech: 'Dual VVT & ESP' },
  { id: 'ertiga-gl', brand: 'All New Ertiga', variant: 'GL', group: 'Ertiga', image: ertigaGl, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 279000000, cc: 1462, power: '105 PS', tech: 'Dual VVT & ESP' },
  { id: 'ertiga-hybrid-gx', brand: 'All New Ertiga Hybrid', variant: 'GX', group: 'Ertiga', image: ertigaHybridGx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 304800000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'ertiga-hybrid-cruise', brand: 'All New Ertiga Hybrid', variant: 'CRUISE', group: 'Ertiga', image: ertigaHybridCruise, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 318300000, cc: 1462, power: '105 PS', tech: 'Smart Hybrid & Cruise Control' },
  
  // Fronx
  { id: 'fronx-gl', brand: 'Fronx Hybrid', variant: 'GL', group: 'Fronx', image: fronxGl, transmission: 'Manual', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 272500000, cc: 1462, power: '100 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'fronx-gx', brand: 'Fronx Hybrid', variant: 'GX', group: 'Fronx', image: fronxGx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 300400000, cc: 1462, power: '100 PS', tech: 'Smart Hybrid (SHVS)' },
  { id: 'fronx-sgx', brand: 'Fronx Hybrid', variant: 'SGX', group: 'Fronx', image: fronxSgx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 316700000, cc: 1462, power: '100 PS', tech: 'Smart Hybrid & Suzuki Safety Support' },
  
  // Niaga
  { id: 'carry-fd', brand: 'Carry Pick Up', variant: 'FD', group: 'Carry Pick Up', image: carryFd, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 202000000, cc: 1462, power: '97 PS', tech: 'Immobilizer' },
  { id: 'carry-wd', brand: 'Carry Pick Up', variant: 'WD', group: 'Carry Pick Up', image: carryWd, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 203100000, cc: 1462, power: '97 PS', tech: 'Immobilizer' },

  // Grand Vitara
  { id: 'grand-vitara-glx', brand: 'Grand Vitara', variant: 'GLX', group: 'Grand Vitara', image: grandVitaraGlx, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 445000000, cc: 1462, power: '103 PS', tech: 'Smart Hybrid & AllGrip' },
  { id: 'grand-vitara-glx-two-tone', brand: 'Grand Vitara', variant: 'GLX TWO TONE', group: 'Grand Vitara', image: grandVitaraGlxTwoTone, transmission: 'Matic', fuel: 'Hybrid', payment: 'Cash/Kredit', price: 448000000, cc: 1462, power: '103 PS', tech: 'Smart Hybrid & AllGrip' },
  
  // City car
  { id: 's-presso', brand: 'S-Presso', group: 'S-Presso', image: sPresso, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 189400000, cc: 998, power: '68 PS', tech: 'ISS & Dual Airbag' },
  
  // Jimny
  { id: 'jimny-3', brand: 'Jimny', variant: '3 Doors', group: 'Jimny', image: jimny3, transmission: 'Manual', fuel: 'Bensin', payment: 'Cash/Kredit', price: 496200000, cc: 1462, power: '102 PS', tech: 'AllGrip Pro 4x4' },
  { id: 'jimny-5', brand: 'Jimny', variant: '5 Doors', group: 'Jimny', image: jimny5, transmission: 'Matic', fuel: 'Bensin', payment: 'Cash/Kredit', price: 511900000, cc: 1462, power: '102 PS', tech: 'AllGrip Pro 4x4' },
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
