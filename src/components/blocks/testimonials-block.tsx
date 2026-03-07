import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

interface MediaObject {
  url?: string | null
}

interface TestimonialObject {
  id: string
  parentName: string
  childDescription: string
  quote: string
  rating?: string | null
  photo?: MediaObject | string | null
}

interface TestimonialsBlockProps {
  eyebrow?: string | null
  heading?: string | null
  testimonials?: (TestimonialObject | string)[] | null
  [key: string]: unknown
}

export function TestimonialsBlock({ eyebrow, heading, testimonials = [] }: TestimonialsBlockProps) {
  const populated = (testimonials ?? []).filter(
    (t): t is TestimonialObject => typeof t === 'object' && t !== null,
  )

  if (populated.length === 0) return null

  return (
    <section className="py-20 bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {eyebrow && (
            <span
              className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full"
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2
              className="mt-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              }}
            >
              {heading}
            </h2>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {populated.map((t) => {
            const photoUrl =
              typeof t.photo === 'object' && t.photo?.url ? t.photo.url : null
            const stars = Math.min(5, Math.max(1, parseInt(t.rating ?? '5', 10)))
            const initials = t.parentName
              .split(' ')
              .slice(0, 2)
              .map((n) => n[0])
              .join('')
              .toUpperCase()

            return (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a017] text-[#d4a017]" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote className="w-6 h-6 text-primary/20 mb-2" />

                {/* Quote text */}
                <p
                  className="text-muted-foreground flex-1 mb-6"
                  style={{ fontSize: '0.925rem', lineHeight: 1.75, fontStyle: 'italic' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
                    {photoUrl ? (
                      <Image
                        src={photoUrl}
                        alt={t.parentName}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span
                        className="text-primary"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem' }}
                      >
                        {initials}
                      </span>
                    )}
                  </div>
                  <div>
                    <div
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem' }}
                    >
                      {t.parentName}
                    </div>
                    <div className="text-muted-foreground" style={{ fontSize: '0.78rem' }}>
                      {t.childDescription}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
