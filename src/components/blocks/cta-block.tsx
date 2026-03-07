import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

interface CTAButton {
  id?: string | null
  label: string
  link: string
  variant?: 'primary' | 'gold' | 'outline' | 'phone' | null
}

interface CTABlockProps {
  heading: string
  subheading?: string | null
  variant?: 'white' | 'green' | 'light-green' | null
  buttons?: CTAButton[] | null
  [key: string]: unknown
}

export function CTABlock({ heading, subheading, variant = 'white', buttons = [] }: CTABlockProps) {
  const items = buttons ?? []

  // Background and text colour based on variant
  const sectionClass =
    variant === 'green'
      ? 'bg-primary'
      : variant === 'light-green'
      ? 'bg-surface-1'
      : 'bg-white'

  const headingClass = variant === 'green' ? 'text-white' : ''
  const subClass = variant === 'green' ? 'text-white/70' : 'text-muted-foreground'
  const isGreenBg = variant === 'green'

  const getButtonClass = (btnVariant?: string | null) => {
    switch (btnVariant) {
      case 'gold':
        return 'bg-[#d4a017] text-[#0f2818] hover:bg-[#e0b020] shadow-md shadow-[#d4a017]/20'
      case 'outline':
        return isGreenBg
          ? 'border-2 border-white text-white hover:bg-white/10'
          : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
      case 'phone':
        return 'bg-[#d4a017] text-[#0f2818] hover:bg-[#e0b020]'
      default: // primary
        return isGreenBg
          ? 'bg-[#d4a017] text-[#0f2818] hover:bg-[#e0b020]'
          : 'bg-primary text-white hover:bg-primary/90'
    }
  }

  return (
    <section className={`py-20 ${sectionClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={headingClass}
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          }}
        >
          {heading}
        </h2>

        {subheading && (
          <p
            className={`mt-3 mb-8 max-w-2xl mx-auto ${subClass}`}
            style={{ fontSize: '1rem', lineHeight: 1.75 }}
          >
            {subheading}
          </p>
        )}

        {!subheading && items.length > 0 && <div className="mb-8" />}

        {items.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {items.map((btn, i) => {
              const isPhone = btn.variant === 'phone'
              const href = isPhone
                ? `tel:${(btn.link ?? '').replace(/\D/g, '')}`
                : (btn.link ?? '#')

              return (
                <Link
                  key={btn.id ?? i}
                  href={href}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 ${getButtonClass(btn.variant)}`}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}
                >
                  {isPhone && <Phone className="w-4 h-4" />}
                  {btn.label}
                  {!isPhone && <ArrowRight className="w-4 h-4" />}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
