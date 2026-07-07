// Kumpulan ikon SVG inline agar tidak bergantung pada aset/CDN eksternal.

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
  Check: (p) => (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Phone: (p) => (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  Whatsapp: (p) => (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6a11 11 0 0 1-4.7-4.1c-.3-.5-.8-1.3-.8-2.5 0-1.2.6-1.8.9-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6-.3.3c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.2.5.1.7-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.4.1.1.1.6-.1 1.5Z" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
      <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8-6.1-3.2-6.1 3.2 1.2-6.8-5-4.9 6.9-1L12 2Z" />
    </svg>
  ),
  ChevronDown: (p) => (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Wallet: (p) => (
    <svg {...base} {...p}>
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
      <path d="M21 7H6a2 2 0 0 0 0 4h15v-4Z" />
      <circle cx="17" cy="9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  Wrench: (p) => (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a4 4 0 0 1-5 5L4 17a2 2 0 1 0 3 3l5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2.3-.6-.6-2.3 2.4-2.6Z" />
    </svg>
  ),
  Users: (p) => (
    <svg {...base} {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </svg>
  ),
  Seat: (p) => (
    <svg {...base} {...p}>
      <path d="M5 4v8a2 2 0 0 0 2 2h6M7 14l-1 6M17 20l-1-4a2 2 0 0 0-2-1.5" />
      <path d="M19 20v-3a3 3 0 0 0-3-3" />
    </svg>
  ),
  Gear: (p) => (
    <svg {...base} {...p}>
      <path d="M6 3v12M6 15a3 3 0 1 0 0 .01M18 9V3M18 9a3 3 0 1 1 0 .01M6 9h9a3 3 0 0 1 3 3v.5" />
    </svg>
  ),
  Fuel: (p) => (
    <svg {...base} {...p}>
      <path d="M3 21h10V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16ZM3 9h10" />
      <path d="M13 8h2.5A1.5 1.5 0 0 1 17 9.5V16a2 2 0 0 0 4 0V9l-3-3" />
    </svg>
  ),
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
}
