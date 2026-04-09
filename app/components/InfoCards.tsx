'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    id: 1,
    label: 'AAA',
    title: 'OTONOM ÇEKİRDEK',
    description:
      'Yapay zeka sistemlerimiz, işletmenizin yüksek performanslı motoru gibi hareket ederek altyapı ve operasyonları otonom hesaplama ile yönetir.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="24" r="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 2,
    label: 'SMMA',
    title: 'ALGORİTMİK ÖLÇEK',
    description:
      'Veriye dayalı hakimiyet yoluyla agresif pazar genişlemesi. İlk hısmda büyümeyi zorlayan algoritmik stratejiler uyguluyoruz.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36L18 24L28 30L40 12" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 12H40V20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function InfoCards() {
  return (
    <section id="hizmetler" className="bg-obsidian py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-surface-container hover:bg-surface-container-high transition-colors duration-300 p-8 rounded-sm">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold uppercase tracking-tight">
                      {card.label}:{' '}
                      <span className="text-primary italic">{card.title}</span>
                    </h3>
                  </div>
                </div>

                {/* Description + Icon row */}
                <div className="flex items-end justify-between gap-4">
                  <p className="font-[family-name:var(--font-manrope)] text-white/50 text-sm leading-relaxed max-w-sm">
                    {card.description}
                  </p>
                  <div className="flex-shrink-0 opacity-40">
                    {card.icon}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 w-12 h-[2px] bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
