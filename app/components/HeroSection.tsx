'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-obsidian pt-20">
      {/* Ambient glow behind figure - soft d00018 at 10% opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(208,0,24,0.15)_0%,_rgba(208,0,24,0.06)_40%,_transparent_70%)] opacity-80" />

      {/* Floating Labels */}
      <motion.div
        className="absolute top-[18%] left-[4%] md:left-[8%] z-20"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-surface-container/80 backdrop-blur-sm px-4 py-2 rounded-sm">
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/50">YAPAY ZEKA İLE</span>
          <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase text-white">AAA OTOMASYON</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[22%] right-[4%] md:right-[8%] z-20"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="bg-surface-container/80 backdrop-blur-sm px-4 py-2 rounded-sm text-right">
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/50">MÜŞTERİ ÖLÇEK</span>
          <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase text-primary">-230%</div>
        </div>
      </motion.div>

      {/* +400 Badge */}
      <motion.div
        className="absolute top-[45%] left-[3%] md:left-[6%] z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="bg-primary/20 backdrop-blur-sm px-3 py-2 rounded-sm">
          <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-primary">+400</div>
          <span className="font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-wider text-white/50">SONUÇ ODAKLI<br/>PROJE</span>
        </div>
      </motion.div>

      {/* AI Figure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="relative z-10 w-[300px] h-[380px] md:w-[420px] md:h-[520px] mt-8"
      >
        <Image
          src="/hero-figure.jpg"
          alt="spark. agency AI Figure"
          fill
          priority
          className="object-contain object-bottom"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-obsidian to-transparent" />
      </motion.div>

      {/* Content below figure */}
      <div className="relative z-20 text-center px-6 max-w-4xl -mt-8">
        {/* Small label above heading */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/30">
            OTONOM OLARAK. MÜHENDİSLİK GÜCÜYLE.
          </span>
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl sm:text-4xl md:text-6xl leading-tight mb-6 uppercase"
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
          className="font-[family-name:var(--font-manrope)] text-white/50 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Sadece reklamlarla değil, veriyle beslenen ve AI ile optimize edilen bir altyapıyla hükmedin.
          SKORA, işletmenizin kalbine durdurulamaz bir büyüme motoru yerleştirir. Her etkileşim bir algoritma,
          her sonuç ise bir mühendislik çıktısıdır. Tahminleri bırakın, sistemin gücüne odaklanın.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-primary hover:bg-primary-container text-white px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">WHATSAPP İLE SİSTEMİ ATEŞLE</span>
            <motion.span
              className="absolute inset-0 rounded-sm bg-primary"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.a>

          <a
            href="#hizmetler"
            className="bg-surface-container hover:bg-surface-container-high text-white px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98] inline-block"
          >
            HIZLANMAYI KEŞFEDİN
          </a>
        </motion.div>
      </div>
    </section>
  )
}
