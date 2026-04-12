'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function IgnitionForm() {
  const [formData, setFormData] = useState({
    name: '',
    companySize: '',
    email: '',
    revenue: '',
    problems: '',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Merhaba, SKORA ile iletişime geçmek istiyorum.%0A%0Aİsim: ${formData.name}%0AŞirket Büyüklüğü: ${formData.companySize}%0AE-posta: ${formData.email}%0AHedef Gelir: ${formData.revenue}%0ATemel Sorunlar: ${formData.problems}`
    window.open(`https://wa.me/905XXXXXXXXX?text=${message}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-obsidian py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-primary text-3xl">&#10003;</span>
            </div>
            <h2
              className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase mb-4 tracking-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              SİSTEM AKTİF
            </h2>
            <p className="font-[family-name:var(--font-manrope)] text-white/60 max-w-md mx-auto">
              Bilgileriniz sistemimize iletildi. Teknik ekibimizle şimdi WhatsApp üzerinden de görüşebilirsiniz.
            </p>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98]"
            >
              WHATSAPP&apos;A BAĞLAN
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  const inputClass =
    'w-full bg-surface/50 border-b-2 border-white/10 focus:border-primary py-3 px-4 font-[family-name:var(--font-manrope)] text-white outline-none transition-all duration-300 rounded-t-sm'

  const getGlowStyle = (field: string) => ({
    boxShadow:
      focusedField === field ? '0 4px 8px rgba(255, 0, 34, 0.2)' : 'none',
  })

  return (
    <section className="bg-obsidian py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            ATEŞLEME NOKTASI
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Name Field */}
          <div className="relative">
            <label className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-2 block">
              ADINIZ SOYADINIZ
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              style={getGlowStyle('name')}
              placeholder="Adınız Soyadınız"
            />
          </div>

          {/* Company Size */}
          <div className="relative">
            <label className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-2 block">
              ŞİRKET BÜYÜKLÜĞÜ
            </label>
            <select
              value={formData.companySize}
              onChange={(e) =>
                setFormData({ ...formData, companySize: e.target.value })
              }
              onFocus={() => setFocusedField('companySize')}
              onBlur={() => setFocusedField(null)}
              className={`${inputClass} appearance-none cursor-pointer`}
              style={getGlowStyle('companySize')}
            >
              <option value="" className="bg-surface text-white">
                Seçiniz
              </option>
              <option value="1-10" className="bg-surface text-white">
                1-10 Çalışan
              </option>
              <option value="11-50" className="bg-surface text-white">
                11-50 Çalışan
              </option>
              <option value="51-200" className="bg-surface text-white">
                51-200 Çalışan
              </option>
              <option value="200+" className="bg-surface text-white">
                200+ Çalışan
              </option>
            </select>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-2 block">
              E-POSTA ADRESİNİZ
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              style={getGlowStyle('email')}
              placeholder="ornek@sirketiniz.com"
            />
          </div>

          {/* Revenue */}
          <div className="relative">
            <label className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-2 block">
              HEDEF GELİR
            </label>
            <input
              type="text"
              value={formData.revenue}
              onChange={(e) =>
                setFormData({ ...formData, revenue: e.target.value })
              }
              onFocus={() => setFocusedField('revenue')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              style={getGlowStyle('revenue')}
              placeholder="Yıllık Gelir Hedefi"
            />
          </div>

          {/* Problems Textarea */}
          <div className="relative">
            <label className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-2 block">
              İŞLETMENİZİN KARŞILAŞTIĞI TEMEL SORUNLAR
            </label>
            <textarea
              value={formData.problems}
              onChange={(e) =>
                setFormData({ ...formData, problems: e.target.value })
              }
              onFocus={() => setFocusedField('problems')}
              onBlur={() => setFocusedField(null)}
              className={`${inputClass} min-h-[120px] resize-y`}
              style={getGlowStyle('problems')}
              placeholder="İşletmenizin büyüme sürecinde karşılaştığı temel zorlukları kısaca açıklayın..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-primary hover:bg-primary-container text-white py-5 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98] mt-12"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SİSTEMİ ATEŞLE
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
