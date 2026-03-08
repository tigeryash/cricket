import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

import { getMediaUrl } from '@/utilities/getMediaUrl'

interface MediaObject {
  url?: string | null
  alt?: string | null
}

interface HeroBlockProps {
  badge?: string | null
  heading: string
  headingHighlight?: string | null
  subheading?: string | null
  primaryButtonLabel?: string | null
  primaryButtonLink?: string | null
  secondaryButtonLabel?: string | null
  secondaryButtonLink?: string | null
  backgroundImage?: MediaObject | string | null
  [key: string]: unknown
}

export function HeroBlock({
  badge,
  heading,
  headingHighlight,
  subheading,
  primaryButtonLabel,
  primaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
  backgroundImage,
}: HeroBlockProps) {
  const bgUrl =
    typeof backgroundImage === 'object' && backgroundImage?.url
      ? getMediaUrl(backgroundImage.url)
      : null
  const isPayloadApiMedia = Boolean(bgUrl && bgUrl.includes('/api/media'))

  /**
   * Split the heading so the highlighted portion is gold.
   * e.g. heading="Where Young Cricketers Discover Their Potential"
   *      headingHighlight="Discover Their Potential"
   * → "Where Young Cricketers " + gold("Discover Their Potential")
   */
  const renderHeading = () => {
    if (!headingHighlight || !heading.includes(headingHighlight)) {
      return <>{heading}</>
    }
    const parts = heading.split(headingHighlight)
    return (
      <>
        {parts[0]}
        <span className="text-[#d4a017]">{headingHighlight}</span>
        {parts.slice(1).join(headingHighlight)}
      </>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background image */}
      {bgUrl && (
        <Image
          src={bgUrl}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized={isPayloadApiMedia}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/75" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border-2 border-white/10" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/5" />
        <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full border border-white/5" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        {badge && (
          <div
            className="inline-flex items-center gap-2 bg-[#d4a017]/20 border border-[#d4a017]/40 text-[#d4a017] px-5 py-1.5 rounded-full mb-8"
            style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            {badge}
          </div>
        )}

        <h1
          className="text-white mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
          }}
        >
          {renderHeading()}
        </h1>

        {subheading && (
          <p
            className="text-white/70 max-w-2xl mx-auto mb-10"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.75 }}
          >
            {subheading}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonLabel && primaryButtonLink && (
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 bg-[#d4a017] text-[#0f2818] px-8 py-4 rounded-full hover:bg-[#e0b020] transition-all hover:scale-105 shadow-lg shadow-[#d4a017]/30"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}
            >
              {primaryButtonLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}

          {secondaryButtonLabel && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/50 transition-all"
              style={{ fontWeight: 600, fontSize: '1rem' }}
            >
              <Play className="w-4 h-4" />
              {secondaryButtonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
