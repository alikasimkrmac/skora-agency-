'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_rgba(0,0,0,0.4)_0%,_transparent_70%)]" />

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
            className="object-contain object-bottom"
          />
          {/* Bottom fade to blend into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-16 md:bottom-24 z-20 w-full px-6">
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Primary CTA with Pulse */}
          <motion.button
            className="relative bg-obsidian hover:bg-surface text-white px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98]"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">WHATSAPP İLE ÜSTÜNÜ ATESTE</span>
            <motion.span
              className="absolute inset-0 rounded-sm bg-obsidian"
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
          <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98]">
            BAŞLAMANIZ İÇİN YETER
          </button>
        </motion.div>
      </div>

      {/* Decorative Labels */}
      <motion.div
        className="absolute top-1/4 left-[5%] md:left-[10%] font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/60"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        STANDART YAKLAŞIM
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[5%] md:right-[10%] font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/60"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        ALGORITHM APPROACH
      </motion.div>
    </section>
  )
}
