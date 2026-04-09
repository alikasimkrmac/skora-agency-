'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const gears = [
  {
    number: '01',
    title: 'AMAÇ',
    description: 'Danışman başarı metriği',
  },
  {
    number: '02',
    title: 'ENTEGRASYON',
    description: 'Ekipler entegre',
  },
  {
    number: '03',
    title: 'İLİŞKİLENDİRME',
    description: 'OI güvenilirliğiniz',
  },
]

function OdometerNumber({
  target,
  duration = 2000,
}: {
  target: number
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, target, duration])

  return (
    <div
      ref={ref}
      className="font-[family-name:var(--font-space-grotesk)] text-7xl md:text-8xl font-bold tracking-tighter"
    >
      {String(count).padStart(2, '0')}
    </div>
  )
}

export default function ShiftGears() {
  return (
    <section id="klasikleşmiş" className="bg-obsidian py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
            SHIFT GEARS
          </h2>
        </motion.div>

        {/* Gears Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {gears.map((gear, index) => (
            <motion.div
              key={gear.number}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Number with Odometer */}
              <div className="mb-6 text-white/10 group-hover:text-white/20 transition-colors duration-500">
                <OdometerNumber target={parseInt(gear.number)} />
              </div>

              {/* Title */}
              <h3
                className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold uppercase mb-3 tracking-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                {gear.title}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-manrope)] text-white/50 text-sm">
                {gear.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
