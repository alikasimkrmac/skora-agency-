'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'ANASAYFA', href: '#anasayfa' },
  { label: 'HİZMETLER', href: '#hizmetler' },
  { label: 'PROJELER', href: '#projeler' },
  { label: 'HAKKIMIZDA', href: '#hakkimizda' },
  { label: 'İLETİŞİM', href: '#iletisim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-obsidian/95 backdrop-blur-[20px]' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#anasayfa" className="relative w-[120px] h-[40px]">
          <Image
            src="/logo.svg"
            alt="spark. agency"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-8 font-[family-name:var(--font-manrope)] text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 min-h-[44px] rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200 active:scale-[0.98]">
            BAŞLAT
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-obsidian/95 backdrop-blur-[20px] overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 font-[family-name:var(--font-manrope)] text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-primary transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-sm font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wide transition-all duration-200">
                  BAŞLAT
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
