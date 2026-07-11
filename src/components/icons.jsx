// Kumpulan ikon SVG inline agar tidak bergantung pada aset/CDN eksternal.
// Semua ikon memakai stroke `currentColor` kecuali logo brand (Instagram/Facebook/WA).

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  Menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: (p) => (
    <svg {...base} {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Phone: (p) => (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  MapPin: (p) => (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Document: (p) => (
    <svg {...base} {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  ),
  Car: (p) => (
    <svg {...base} {...p}>
      <path d="M5 11l1.5-3.9A2 2 0 0 1 8.4 5.8h7.2a2 2 0 0 1 1.9 1.3L19 11" />
      <path d="M3 16v-2.2A2.8 2.8 0 0 1 5.8 11h12.4A2.8 2.8 0 0 1 21 13.8V16a1 1 0 0 1-1 1h-1M4 17H3M7 17h10" />
      <path d="M6 17v1.5M18 17v1.5" />
      <circle cx="7.5" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  User: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  ),
  Dollar: (p) => (
    <svg {...base} {...p}>
      <path d="M12 2v20M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.8 7 7s2.2 3 5 3.5 5 1.4 5 3.7-2.2 3.3-5 3.3-5-1.1-5-3" />
    </svg>
  ),
  ShieldCheck: (p) => (
    <svg {...base} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Calendar: (p) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.4" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  ),
  // Ikon spesifikasi kartu mobil
  Transmission: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <path d="M4.2 10.5c2.2.4 4.6.6 7.8.6s5.6-.2 7.8-.6M12 14.2V21" />
    </svg>
  ),
  Fuel: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="3.5" width="8.5" height="17" rx="1.6" />
      <path d="M4 9h8.5" />
      <path d="M12.5 6.6l3.8 3v8a1.9 1.9 0 0 0 3.8 0V9.6L16.6 6" />
    </svg>
  ),
  Driver: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6" />
    </svg>
  ),
  // Ikon sosial (memakai fill agar tampil solid)
  Whatsapp: (p) => (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6a11 11 0 0 1-4.7-4.1c-.3-.5-.8-1.3-.8-2.5 0-1.2.6-1.8.9-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6-.3.3c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.2.5.1.7-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.4.1.1.1.6-.1 1.5Z" />
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (p) => (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
      <path d="M13.5 21v-7.3h2.4l.4-2.9h-2.8V8.9c0-.8.2-1.4 1.4-1.4h1.5V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H8v2.9h2.5V21z" />
    </svg>
  ),
}
