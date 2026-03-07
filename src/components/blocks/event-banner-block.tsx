import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, DollarSign, ArrowRight, Users } from 'lucide-react'

interface EventObject {
  id?: string
  name: string
  date?: string | null
  time?: string | null
  location?: string | null
  price?: string | null
  ageRange?: string | null
  description?: string | null
}

interface MediaObject {
  url?: string | null
}

interface EventBannerBlockProps {
  event?: EventObject | string | null
  backgroundImage?: MediaObject | string | null
  ctaLabel?: string | null
  ctaLink?: string | null
  [key: string]: unknown
}

export function EventBannerBlock({
  event,
  backgroundImage,
  ctaLabel = 'Register Now',
  ctaLink = '/events',
}: EventBannerBlockProps) {
  const populatedEvent = typeof event === 'object' && event !== null ? event : null
  const bgUrl =
    typeof backgroundImage === 'object' && backgroundImage?.url ? backgroundImage.url : null

  if (!populatedEvent) return null

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      {bgUrl ? (
        <Image
          src={bgUrl}
          alt="Event banner background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[#0f2818]" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f2818]/75" />

      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full border border-white/5" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <span
          className="inline-block bg-[#d4a017] text-[#0f2818] px-5 py-1.5 rounded-full mb-6"
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
          }}
        >
          Upcoming Event
        </span>

        {/* Event name */}
        <h2
          className="text-white mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            lineHeight: 1.15,
          }}
        >
          {populatedEvent.name}
        </h2>

        {/* Meta pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {populatedEvent.date && (
            <span className="flex items-center gap-2 text-white/80" style={{ fontSize: '0.925rem' }}>
              <Calendar className="w-4 h-4 text-[#d4a017]" />
              {populatedEvent.date}
            </span>
          )}
          {populatedEvent.location && (
            <span className="flex items-center gap-2 text-white/80" style={{ fontSize: '0.925rem' }}>
              <MapPin className="w-4 h-4 text-[#d4a017]" />
              {populatedEvent.location}
            </span>
          )}
          {populatedEvent.ageRange && (
            <span className="flex items-center gap-2 text-white/80" style={{ fontSize: '0.925rem' }}>
              <Users className="w-4 h-4 text-[#d4a017]" />
              {populatedEvent.ageRange}
            </span>
          )}
          {populatedEvent.price && (
            <span className="flex items-center gap-2 text-white/80" style={{ fontSize: '0.925rem' }}>
              <DollarSign className="w-4 h-4 text-[#d4a017]" />
              {populatedEvent.price}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={ctaLink ?? '/events'}
          className="inline-flex items-center gap-2 bg-[#d4a017] text-[#0f2818] px-8 py-4 rounded-full hover:bg-[#e0b020] transition-all hover:scale-105 shadow-lg shadow-[#d4a017]/30"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}
        >
          {ctaLabel} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
