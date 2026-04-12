import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { name: 'INSTAGRAM', href: '#' },
    { name: 'WHATSAPP', href: 'https://wa.me/905XXXXXXXXX' },
  ]

  return (
    <footer className="bg-obsidian py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
          {/* Brand - left aligned, takes more space */}
          <div className="md:max-w-sm">
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

          {/* Social Links - right aligned */}
          <div className="md:text-right">
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-widest text-white/40 mb-4">
              SOSYAL
            </h4>
            <ul className="flex gap-6">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.name === 'WHATSAPP' ? '_blank' : undefined}
                    rel={link.name === 'WHATSAPP' ? 'noopener noreferrer' : undefined}
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
