import { Icon } from './icons'
import { site, waLink } from '../data/site'

export default function FloatingWhatsapp() {
  return (
    <a
      href={waLink(`Halo ${site.name}, saya ingin bertanya mengenai mobil Suzuki.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3.5 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      <Icon.Whatsapp className="h-6 w-6" />
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500" />
      </span>
    </a>
  )
}
