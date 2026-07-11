import arrow from '../assets/arrow.png'
import { orderSteps } from '../data/content'
import Reveal from './Reveal'
import { Icon } from './icons'

export default function HowToOrder() {
  return (
    <section id="cara-order" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <Reveal as="h2" className="text-3xl font-extrabold text-ink sm:text-4xl">
          How To Order
        </Reveal>
        <Reveal as="p" delay={80} className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Hanya tiga langkah mudah untuk mulai berkendara bersama unit Suzuki pilihan Anda.
        </Reveal>

        <div className="mt-14 flex flex-col items-stretch gap-6 md:flex-row md:items-start md:justify-center md:gap-2">
          {orderSteps.map((step, i) => {
            const StepIcon = Icon[step.icon] ?? Icon.Car
            return (
              <div key={step.id} className="contents md:flex md:items-start">
                {/* Mobile: ikon kiri + teks kanan. Desktop (md+): tersusun vertikal, rata tengah. */}
                <Reveal delay={i * 120} className="mx-auto w-full max-w-md md:w-72 md:max-w-xs">
                  <div className="flex items-center gap-4 text-left md:block md:text-center">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-navy text-white md:mx-auto md:h-28 md:w-28 md:rounded-3xl">
                      <StepIcon className="h-9 w-9 md:h-12 md:w-12" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink md:mt-6">{step.title}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-soft md:mx-auto md:mt-2 md:max-w-60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Konektor panah panjang antar langkah (desktop) */}
                {i < orderSteps.length - 1 && (
                  <div className="hidden w-24 shrink-0 items-center justify-center self-start px-2 pt-13 md:flex lg:w-36">
                    <img src={arrow} alt="" className="w-full opacity-70" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
