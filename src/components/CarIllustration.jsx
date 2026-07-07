// Ilustrasi mobil side-view sebagai SVG inline (tanpa aset foto eksternal).
// Warna bodi mengikuti `accent` tiap model.

export default function CarIllustration({ accent = '#ed1c24', className = '' }) {
  const dark = shade(accent, -0.25)
  const light = shade(accent, 0.35)

  return (
    <svg
      viewBox="0 0 420 200"
      className={className}
      role="img"
      aria-label="Ilustrasi mobil Suzuki"
    >
      <defs>
        <linearGradient id={`body-${accent}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      {/* bayangan */}
      <ellipse cx="210" cy="176" rx="180" ry="12" fill="rgba(11,16,32,0.12)" />

      {/* bodi bawah */}
      <path
        d="M18 150 C18 132 40 128 60 126 L120 120 C140 96 168 86 210 86 C258 86 288 98 312 120 L372 130 C392 134 404 140 404 152 L404 158 C404 164 400 166 394 166 L28 166 C22 166 18 162 18 156 Z"
        fill={`url(#body-${accent})`}
      />

      {/* atap + kabin */}
      <path
        d="M132 118 C150 98 176 90 210 90 C246 90 274 100 296 118 Z"
        fill={dark}
      />

      {/* kaca depan & samping */}
      <path
        d="M150 116 C166 102 184 96 206 96 L206 116 Z"
        fill="url(#glass)"
      />
      <path
        d="M214 96 C242 97 264 105 282 116 L214 116 Z"
        fill="url(#glass)"
      />

      {/* garis bodi */}
      <path
        d="M40 140 L372 140"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
        fill="none"
      />

      {/* lampu depan & belakang */}
      <path d="M392 138 l14 4 v10 h-14 Z" fill="#fde68a" />
      <rect x="20" y="136" width="10" height="10" rx="2" fill="#fca5a5" />

      {/* roda */}
      {[128, 300].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="166" r="30" fill="#0b1020" />
          <circle cx={cx} cy="166" r="14" fill="#cbd5e1" />
          <circle cx={cx} cy="166" r="5" fill="#64748b" />
        </g>
      ))}
    </svg>
  )
}

// Menggelapkan / mencerahkan warna hex tanpa dependensi.
function shade(hex, amt) {
  const c = hex.replace('#', '')
  const num = parseInt(
    c.length === 3
      ? c
          .split('')
          .map((x) => x + x)
          .join('')
      : c,
    16,
  )
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff
  const t = amt < 0 ? 0 : 255
  const p = Math.abs(amt)
  r = Math.round((t - r) * p) + r
  g = Math.round((t - g) * p) + g
  b = Math.round((t - b) * p) + b
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}
