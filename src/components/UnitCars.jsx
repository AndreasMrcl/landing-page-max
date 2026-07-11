import { useEffect, useMemo, useRef, useState } from 'react'
import { cars, carGroups } from '../data/cars'
import CarCard from './CarCard'
import Reveal from './Reveal'

// Jumlah card yang tampil sebelum tombol "Tampilkan Semua" ditekan.
const INITIAL_COUNT = 6

export default function UnitCars() {
  const [active, setActive] = useState('Semua')
  const [showAll, setShowAll] = useState(false)
  const sliderRef = useRef(null)

  const filteredCars = useMemo(
    () => (active === 'Semua' ? cars : cars.filter((c) => c.group === active)),
    [active],
  )
  const visibleCars = showAll ? filteredCars : filteredCars.slice(0, INITIAL_COUNT)

  const selectGroup = (group) => {
    setActive(group)
    setShowAll(false)
  }

  // Setelah "Tampilkan Semua", slider mengikuti tombol yang kini pindah ke ujung.
  // Kembalikan posisinya ke card pertama yang baru muncul agar urutannya terasa berlanjut.
  useEffect(() => {
    const el = sliderRef.current
    if (!showAll || !el) return

    const id = requestAnimationFrame(() => {
      if (el.scrollWidth <= el.clientWidth) return // desktop: grid, tidak bisa di-scroll
      const target = el.children[INITIAL_COUNT]
      if (!target) return

      const padLeft = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0
      const delta = target.getBoundingClientRect().left - el.getBoundingClientRect().left - padLeft
      el.scrollBy({ left: delta, behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(id)
  }, [showAll])

  const hasMore = filteredCars.length > INITIAL_COUNT
  const toggleLabel = showAll
    ? 'Tampilkan Lebih Sedikit'
    : `Tampilkan Semua (${filteredCars.length} Unit)`

  const toggleButton = (
    <button
      type="button"
      onClick={() => setShowAll((v) => !v)}
      className="btn-press rounded-full bg-navy px-8 py-3.5 text-sm font-bold text-white shadow-lift"
    >
      {toggleLabel}
    </button>
  )

  return (
    <section id="unit-mobil" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <Reveal as="h2" className="text-3xl font-extrabold text-ink sm:text-4xl">
            Our Unit Cars
          </Reveal>
          <Reveal as="p" delay={80} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Pilihan lengkap unit Suzuki dengan penawaran terbaik. Semua unit bisa dipesan secara
            cash maupun kredit.
          </Reveal>
        </div>

        {/* Filter kategori */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {carGroups.map((group) => {
            const isActive = group === active
            return (
              <button
                key={group}
                type="button"
                onClick={() => selectGroup(group)}
                aria-pressed={isActive}
                className={`btn-press rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand text-white shadow-lift'
                    : 'bg-white text-ink-soft shadow-sm hover:text-brand'
                }`}
              >
                {group}
              </button>
            )
          })}
        </div>

        {/* Grid unit */}
        {/* Mobile: slider horizontal dengan snap + peek card berikutnya. Desktop (sm+): grid. */}
        <div
          ref={sliderRef}
          className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-pl-5 px-5 pt-1 pb-9 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:p-0 lg:grid-cols-3"
        >
          {visibleCars.map((car, i) => (
            <Reveal
              key={car.id}
              delay={(i % 3) * 90}
              className="w-[85%] shrink-0 snap-start sm:w-auto"
            >
              <CarCard car={car} />
            </Reveal>
          ))}

          {/* Mobile: tombol jadi slide terakhir setelah card */}
          {hasMore && (
            <div className="flex w-[70%] shrink-0 snap-start items-center justify-center sm:hidden">
              {toggleButton}
            </div>
          )}
        </div>

        {/* Desktop: tombol di bawah grid */}
        {hasMore && <div className="mt-10 hidden text-center sm:block">{toggleButton}</div>}
      </div>
    </section>
  )
}
