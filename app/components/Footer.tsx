import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { name: 'LINKEDIN', href: '#' },
    { name: 'INSTAGRAM', href: '#' },
    { name: 'TELEGRAM', href: '#' },
  ]

  const legalLinks = [
    { name: 'GİZLİLİK POLİTİKASI', href: '#' },
    { name: 'KULLANIM ŞARTLARI', href: '#' },
    { name: 'ÇEREZLER', href: '#' },
  ]

  return (
    <footer className="bg-obsidian py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="relative w-[120px] h-[40px] mb-2">
              <Image
                src="/logo.svg"
                alt="SKORA"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-[family-name:var(--font-manrope)] text-white/40 text-sm">
              Otonom büyüme sistemleri
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-4">
              SOSYAL
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-manrope)] text-sm text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-4">
              YASAL
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-manrope)] text-sm text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 bg-surface-container-low/30 -mx-6 px-6 mt-8">
          <p className="font-[family-name:var(--font-manrope)] text-white/30 text-xs text-center">
            &copy; 2026 SKORA. TÜM HAKLAR SAKLIDIR. OTONOM SİSTEMLER İLE
            GÜÇLENDİRİLMİŞTİR.
          </p>
        </div>
      </div>
    </footer>
  )
}
