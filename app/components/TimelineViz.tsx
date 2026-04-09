'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const timelinePoints = [
  { id: 1, year: 'YIL 1', label: 'KURULUM', angle: 0 },
  { id: 2, year: 'YIL 3', label: 'GELİŞİM', angle: 90 },
  { id: 3, year: 'YIL 6', label: 'OPTİMİZASYON', angle: 180 },
  { id: 4, year: 'YIL 12', label: 'HAKİMİYET', angle: 270 },
]

export default function TimelineViz() {
  const [activePoint, setActivePoint] = useState<number | null>(null)

  return (
    <section id="tasarim" className="relative bg-surface py-24 md:py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="md:absolute md:top-24 md:left-12 max-w-md mb-12 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold uppercase leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            SECURE THE <span className="text-primary">ROI</span> FOR OVER{' '}
            <span className="text-primary">12 YEARS</span>.
          </h2>
        </motion.div>

        {/* Timeline Circle */}
        <div className="flex items-center justify-center min-h-[400px] md:min-h-[600px]">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/30 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase text-primary">
                  CORE
                </span>
              </div>
            </motion.div>

            {/* Orbit Ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-white/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Timeline Points */}
            {timelinePoints.map((point, index) => {
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 125 : 200
              const x = Math.cos((point.angle * Math.PI) / 180) * radius
              const y = Math.sin((point.angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={point.id}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onHoverStart={() => setActivePoint(point.id)}
                  onHoverEnd={() => setActivePoint(null)}
                >
                  {/* Point Indicator */}
                  <div className="relative">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activePoint === point.id
                          ? 'bg-primary scale-150'
                          : 'bg-primary/50'
                      }`}
                    />

                    {/* Glow on hover */}
                    {activePoint === point.id && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                    <div className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/40 mb-1">
                      {point.year}
                    </div>
                    <div
                      className={`font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase transition-colors duration-300 ${
                        activePoint === point.id
                          ? 'text-primary'
                          : 'text-white/60'
                      }`}
                    >
                      {point.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
