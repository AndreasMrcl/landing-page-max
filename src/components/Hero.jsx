import jimny from '../assets/jimny-3-doors.png'
import logo from '../assets/logo-suzuki.png'
import { site } from '../data/site'
import Reveal from './Reveal'
import { Icon } from './icons'

// Kata kedua nama bisnis diberi aksen merah Suzuki ("Suzuki *Mobil* Semarang").
const nameWords = site.name.split(' ')

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* Dua bidang diagonal: lapisan lembut di belakang, biru pekat di depan */}
      <div className="hero-slash-soft absolute inset-0" aria-hidden="true" />
      <div className="hero-slash absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 pt-12 sm:px-6 lg:grid lg:min-h-168 lg:grid-cols-2 lg:items-start lg:gap-0 lg:px-8 lg:pt-24">
        {/* Kolom teks — di area terang; z-10 agar ujung h1 tampil di atas mobil */}
        <div className="relative z-10 max-w-xl lg:max-w-none">
          <Reveal>
            <img src={logo} alt="Suzuki" className="h-6 w-auto sm:h-8 lg:h-10" />
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-8 text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:whitespace-nowrap lg:text-6xl"
          >
            {nameWords.map((word, i) => (
              <span key={word} className={i === 1 ? 'text-suzuki-red' : undefined}>
                {i > 0 ? ' ' : ''}
                {word}
              </span>
            ))}
          </Reveal>

          <Reveal
            as="h2"
            delay={140}
            className="mt-4 text-xl font-semibold leading-snug text-ink-soft sm:text-4xl"
          >
            {site.tagline}
          </Reveal>

          <Reveal delay={200} className="mt-9">
            <a
              href="#unit-mobil"
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-4 text-base font-bold text-white shadow-lift"
            >
              Lihat Unit
              <Icon.ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>

        {/* Kolom mobil — berdiri di atas bidang diagonal, mepet tepi bawah section */}
        <Reveal delay={140} className="relative mt-12 lg:mt-0 lg:self-end">
          <img
            src={jimny}
            alt="Suzuki Jimny 3 pintu"
            className="mx-auto block w-[96%] max-w-lg drop-shadow-2xl sm:max-w-xl lg:w-full lg:max-w-2xl"
          />
        </Reveal>
      </div>
    </section>
  )
}
