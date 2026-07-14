import { BiSolidDollarCircle } from 'react-icons/bi'
import { MdVerifiedUser } from 'react-icons/md'
import { RiAccountCircleFill } from 'react-icons/ri'
import serviceCar from '../assets/fronx-hybrid-sgx-2.webp'
import { serviceFeatures } from '../data/content'
import Reveal from './Reveal'

// Nama ikon di data/content.js dipetakan ke komponen react-icons.
const featureIcons = {
  RiAccountCircleFill,
  BiSolidDollarCircle,
  MdVerifiedUser,
}

export default function BestService() {
  return (
    <section id="keunggulan" className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <Reveal as="h2" className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Best Service and Best Price
          </Reveal>
          <Reveal as="p" delay={80} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Dapatkan Mobil Suzuki Impian Anda Sekarang!"
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-1">
            <img
              src={serviceCar}
              alt="Suzuki Grand Vitara GLX"
              loading="lazy"
              className="mx-auto w-full max-w-xl drop-shadow-2xl"
            />
          </Reveal>

          <div className="order-2 flex flex-col gap-6">
            {serviceFeatures.map((feature, i) => {
              const FeatureIcon = featureIcons[feature.icon] ?? MdVerifiedUser
              return (
                <Reveal key={feature.id} delay={i * 120} className="flex items-start gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
                    <FeatureIcon className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
