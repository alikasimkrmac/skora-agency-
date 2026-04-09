'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="ambient-glow w-[400px] h-[400px] md:w-[800px] md:h-[800px]" />
      </div>

      {/* AI Figure */}
      <div className="absolute inset-0 flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative z-10 w-[320px] h-[450px] md:w-[440px] md:h-[620px]"
        >
          <Image
            src="/hero-figure.jpg"
            alt="SKORA AI Figure"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_0_60px_rgba(255,0,34,0.3)]"
          />
          {/* Bottom fade to blend with background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl">
        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ letterSpacing: '-0.02em' }}
        >
          REKLAM YAPMIYORUZ.
          <br />
          <span className="text-primary">OTONOM BÜYÜME</span>
          <br />
          SİSTEMLERİ İNŞA EDİYORUZ.
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-manrope)] text-white/60 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Geleneksel büyüme sistemleri bir hikayede ve sağlanmadan işler, yapay zeka ile ortak, zahmetsiz büyüme buluyoruz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Primary CTA with Pulse */}
          <motion.button
            className="relative bg-primary hover:bg-primary-container text-white px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98]"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">WHATSAPP İLE ÜSTÜNÜ ATESTE</span>
            {/* Pulse Animation */}
            <motion.span
              className="absolute inset-0 rounded-sm bg-primary"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>

          {/* Secondary CTA (Ghost) */}
          <button className="border border-primary/30 text-primary hover:bg-secondary-container px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98]">
            BAŞLAMANIZ İÇİN YETER
          </button>
        </motion.div>
      </div>

      {/* Decorative Labels */}
      <motion.div
        className="absolute top-1/4 left-[5%] md:left-[10%] font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        STANDART YAKLAŞIM
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[5%] md:right-[10%] font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/40"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        ALGORITHM APPROACH
      </motion.div>
    </section>
  )
}
