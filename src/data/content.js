// Konten statis untuk section "How To Order" dan "Best Service".
// Ikon dirujuk lewat nama: orderSteps dipetakan ke src/components/icons.jsx,
// serviceFeatures ke react-icons (lihat BestService.jsx).

export const orderSteps = [
  {
    id: 'pilih-unit',
    icon: 'MapPin',
    title: 'Pilih Unit',
    description:
      'Tentukan unit mobil sesuai kebutuhan dan tanggal sewa Anda langsung dari katalog kami.',
    highlight: false,
  },
  {
    id: 'spk',
    icon: 'Document',
    title: 'SPK',
    description:
      'Lengkapi data pemesanan dan konfirmasi jadwal. Tim kami memproses surat pesanan Anda.',
    highlight: true,
  },
  {
    id: 'serah-terima',
    icon: 'Car',
    title: 'Serah Terima',
    description:
      'Unit siap diantar atau diambil di lokasi. Cek kondisi, lalu perjalanan Anda pun dimulai.',
    highlight: false,
  },
]

export const serviceFeatures = [
  {
    id: 'driver',
    icon: 'RiAccountCircleFill',
    title: 'Driver Professional',
    description:
      'Pengemudi berpengalaman, ramah, dan hafal rute Semarang serta kota sekitarnya untuk perjalanan yang aman.',
  },
  {
    id: 'harga',
    icon: 'BiSolidDollarCircle',
    title: 'Harga Bersaing',
    description:
      'Tarif transparan tanpa biaya tersembunyi, dengan pilihan paket harian, mingguan, hingga bulanan.',
  },
  {
    id: 'unit',
    icon: 'MdVerifiedUser',
    title: 'Unit Terjamin',
    description:
      'Armada terawat, rutin diservis, dan dilengkapi asuransi sehingga Anda berkendara dengan tenang.',
  },
]
