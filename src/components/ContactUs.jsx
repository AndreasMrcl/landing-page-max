import salesPhoto from '../assets/sales.png'
import { site } from '../data/site'
import BookingForm from './BookingForm'
import Reveal from './Reveal'
import { Icon } from './icons'

const socials = [
  { key: 'instagram', ...site.social.instagram, label: 'Instagram', Comp: Icon.Instagram },
  { key: 'facebook', ...site.social.facebook, label: 'Facebook', Comp: Icon.Facebook },
  { key: 'whatsapp', ...site.social.whatsapp, label: 'WhatsApp', Comp: Icon.Whatsapp },
]

const contactInfo = [
  { icon: Icon.MapPin, label: site.address },
  { icon: Icon.Phone, label: site.phoneDisplay },
  { icon: Icon.Clock, label: site.hours },
]

export default function ContactUs() {
  return (
    <section id="kontak" className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Kolom kiri: profil sales + kanal kontak + form */}
          <div>
            <Reveal as="h2" className="text-3xl font-extrabold text-ink sm:text-4xl">
              Contact Us
            </Reveal>
            <Reveal as="p" delay={80} className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Butuh informasi lebih lanjut mengenai promo, harga, atau pembelian mobil Suzuki? Hubungi kami sekarang.
            </Reveal>

            {/* Foto sales dan kanal sosial bersebelahan */}
            <Reveal delay={140} className="mt-6 flex items-center gap-4 sm:gap-5">
              <img
                src={salesPhoto}
                alt={`Sales Suzuki ${site.city}`}
                className="h-36 w-28 shrink-0 rounded-2xl bg-field object-cover object-top sm:h-44 sm:w-36"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                {socials.map(({ key, href, handle, label, Comp }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition group-hover:bg-navy-dark">
                      <Comp className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-soft">
                        {label}
                      </span>
                      <span className="block wrap-break-word text-sm font-bold text-ink transition group-hover:text-brand">
                        {handle}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260} className="mt-8 rounded-3xl bg-white p-6 shadow-card sm:p-7">
              <BookingForm submitLabel="Hubungi Sales" accent="navy" />
            </Reveal>
          </div>

          {/* Kolom kanan: peta + info kontak */}
          <div className="flex flex-col gap-6">
            <Reveal className="overflow-hidden rounded-3xl shadow-card">
              <iframe
                title={`Lokasi ${site.name}`}
                src={site.mapEmbed}
                className="h-72 w-full border-0 lg:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>

            <Reveal delay={100} className="grid gap-4 rounded-3xl bg-white p-6 shadow-card sm:grid-cols-3">
              {contactInfo.map(({ icon: InfoIcon, label }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-[13px] leading-relaxed text-ink-soft">{label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
