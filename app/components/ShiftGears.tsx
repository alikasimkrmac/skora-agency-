'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  {
    target: 86,
    suffix: '+',
    label: 'TAMAMLANAN PROJE',
    description: 'Farklı sektörlerden başarıyla teslim edilen otonom büyüme sistemleri.',
  },
  {
    target: 98,
    suffix: '%',
    label: 'MÜŞTERİ MEMNUNİYETİ',
    description: 'Müşterilerimizin sürdürülebilir büyüme hedeflerine ulaşma oranı.',
  },
  {
    target: 223,
    suffix: 'M',
    label: 'OLUŞTURULAN GELİR',
    description: 'Müşterilerimiz için algoritmik stratejilerle üretilen toplam gelir.',
  },
]

function OdometerNumber({
  target,
  suffix,
  duration = 2000,
}: {
  target: number
  suffix: string
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
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

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
      className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary"
    >
      {count}
      <span className="text-4xl md:text-5xl lg:text-6xl">{suffix}</span>
    </div>
  )
}

export default function ShiftGears() {
  return (
    <section id="istatistikler" className="bg-obsidian py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold uppercase mb-4 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            RAKAMLAR <span className="text-primary">KONUŞSUN.</span>
          </h2>
          <p className="font-[family-name:var(--font-manrope)] text-white/50 max-w-xl mx-auto">
            Sonuç odaklı yaklaşımımızın kanıtı, verilerimizde gizli.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Odometer Number */}
              <div className="mb-4">
                <OdometerNumber target={stat.target} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3
                className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase mb-3 tracking-widest text-white/70"
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-manrope)] text-white/40 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative glow on hover */}
              <div className="mt-6 h-1 w-16 mx-auto rounded-full bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
