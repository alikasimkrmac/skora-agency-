'use client'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

export default function HeroSection() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-obsidian pt-20">
      {/* Ambient glow behind content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(208,0,24,0.15)_0%,_rgba(208,0,24,0.06)_40%,_transparent_70%)] opacity-80" />

      {/* Main Hero Card with Spline 3D + Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-8">
        <Card className="w-full min-h-[500px] md:min-h-[600px] bg-obsidian/[0.96] border-white/[0.05] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="#ff0022"
          />

          <div className="flex flex-col md:flex-row h-full min-h-[500px] md:min-h-[600px]">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
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
                className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 uppercase"
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
                className="font-[family-name:var(--font-manrope)] text-white/50 text-sm md:text-base mb-10 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Sadece reklamlarla değil, veriyle beslenen ve AI ile optimize edilen bir altyapıyla hükmedin.
                SKORA, işletmenizin kalbine durdurulamaz bir büyüme motoru yerleştirir.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
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
                  className="bg-surface-container hover:bg-surface-container-high text-white px-8 py-4 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98] inline-block text-center"
                >
                  HIZLANMAYI KEŞFEDİN
                </a>
              </motion.div>
            </div>

            {/* Right content - Spline 3D Scene */}
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Labels - repositioned below card */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-surface-container/80 backdrop-blur-sm px-4 py-2 rounded-sm">
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/50">YAPAY ZEKA İLE</span>
              <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase text-white">AAA OTOMASYON</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-surface-container/80 backdrop-blur-sm px-4 py-2 rounded-sm">
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-wider text-white/50">MÜŞTERİ ÖLÇEK</span>
              <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase text-primary">-230%</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-sm">
              <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-primary">+400</div>
              <span className="font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-wider text-white/50">SONUÇ ODAKLI PROJE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
