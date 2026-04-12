'use client'
import { motion } from 'framer-motion'

const comparisonData = [
  {
    category: 'VERİ STRATEJİSİ',
    traditional: 'Manuel Tahminler',
    skora: 'Algoritmik Hassasiyet',
  },
  {
    category: 'OPERASYON',
    traditional: 'İnsan Gücü (Yavaş)',
    skora: 'AI Destekli Otomasyon (7/24)',
  },
  {
    category: 'RAPORLAMA',
    traditional: 'Aylık Statik Slaytlar',
    skora: 'Gerçek Zamanlı Veri Telemetrisi',
  },
  {
    category: 'SONUÇ',
    traditional: 'Boş Metrikler (Beğeni/Tık)',
    skora: 'Net ROI ve Ölçeklendirme',
  },
]

export default function ComparisonTable() {
  return (
    <section id="problemleri" className="bg-surface py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            STANDART: <span className="text-primary">ESKİ PAZARLAMA ÇÖKTÜ.</span>
          </h2>
          <p className="font-[family-name:var(--font-manrope)] text-white/60 max-w-2xl">
            Geleneksel ajanslar tahminlerle çalışarak bir zamanın sınırlar, muhasebe ve zamanlamaya tedim işe zıtsa imkânsıza çalışan bir büyüme modeli sunuyoruz.
          </p>
        </motion.div>

        {/* Table */}
        <div className="space-y-0">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-4 md:gap-8 py-6"
              style={{
                background:
                  index % 2 === 0
                    ? 'transparent'
                    : 'rgba(255, 255, 255, 0.02)',
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Traditional */}
              <div className="font-[family-name:var(--font-manrope)] text-white/40 text-sm px-4">
                {row.traditional}
              </div>

              {/* Category */}
              <div className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-center text-white/60">
                {row.category}
              </div>

              {/* SKORA */}
              <div className="relative font-[family-name:var(--font-manrope)] text-white font-medium text-sm text-right px-4">
                {row.skora}
                {/* Kinetic Indicator */}
                <span className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-container text-white px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98] flex-1 text-center"
          >
            ŞİMDİ WHATSAPP&apos;A BAĞLAN
          </a>
          <a
            href="#hizmetler"
            className="border border-primary/30 text-primary hover:bg-secondary-container px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98] flex-1 text-center"
          >
            HİZMETLERİ İNCELE
          </a>
        </motion.div>
      </div>
    </section>
  )
}
