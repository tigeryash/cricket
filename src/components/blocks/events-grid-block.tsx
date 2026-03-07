import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { findCollectionSafe } from '@/lib/payload'

interface EventsGridBlockProps {
  eyebrow?: string | null
  heading?: string | null
  showPastEvents?: boolean | null
  emptyMessage?: string | null
  [key: string]: unknown
}

/**
 * EventsGridBlock — async server component.
 * Fetches all non-draft events (featured first, then by date).
 */
export async function EventsGridBlock({
  eyebrow,
  heading,
  showPastEvents = false,
  emptyMessage = 'No upcoming events at the moment. Check back soon!',
}: EventsGridBlockProps) {
  const whereClause = showPastEvents
    ? { status: { not_equals: 'draft' } }
    : {
        and: [
          { status: { not_equals: 'draft' } },
          { status: { not_equals: 'past' } },
        ],
      }

  const events = await findCollectionSafe({
    collection: 'events',
    where: whereClause as any,
    sort: '-featured',
    limit: 20,
  })

  return (
    <div>
      {/* Section header */}
      {(eyebrow || heading) && (
        <section className="pt-16 pb-4 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {eyebrow && (
              <span
                className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full"
                style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}
              >
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2
                className="mt-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                {heading}
              </h2>
            )}
          </div>
        </section>
      )}

      {/* Events list */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {events.map((event) => {
            const imageUrl =
              event.image && typeof event.image === 'object' && 'url' in event.image
                ? (event.image as any).url
                : null

            const expectations: string[] = (event.expectations ?? []).map((e: any) => e.item)

            return (
              <div
                key={event.id}
                className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${
                  event.featured
                    ? 'border-[#d4a017] ring-2 ring-[#d4a017]/20'
                    : 'border-gray-100'
                }`}
              >
                {event.featured && (
                  <div
                    className="bg-[#d4a017] text-[#0f2818] text-center py-2"
                    style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  >
                    ⭐ Featured Event — Register Now!
                  </div>
                )}

                {imageUrl && (
                  <div className="relative w-full h-48 md:h-64">
                    <Image src={imageUrl} alt={event.name} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1024px" />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem' }}>
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                          <Calendar className="w-4 h-4 text-primary" /> {event.date}
                        </span>
                        {event.time && (
                          <span className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                            <Clock className="w-4 h-4 text-primary" /> {event.time}
                          </span>
                        )}
                      </div>
                    </div>
                    {event.price && (
                      <div className="bg-primary/5 rounded-xl px-5 py-3 text-center shrink-0">
                        <div className="text-primary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                          {event.price}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {event.location && (
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <MapPin className="w-4 h-4 text-primary shrink-0" /> {event.location}
                      </div>
                    )}
                    {event.ageRange && (
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <Users className="w-4 h-4 text-primary shrink-0" /> {event.ageRange}
                      </div>
                    )}
                    {event.level && (
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {event.level}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {event.description}
                  </p>

                  {/* Expectations */}
                  {expectations.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-5 mb-6">
                      <h4 className="mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}>
                        What to Expect
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {expectations.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {event.registrationDeadline && (
                      <div className="flex items-center gap-2 text-amber-600" style={{ fontSize: '0.85rem' }}>
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        Registration deadline: <strong>{event.registrationDeadline}</strong>
                      </div>
                    )}
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors shrink-0 ${
                        event.featured
                          ? 'bg-[#d4a017] text-[#0f2818] hover:bg-[#e0b020]'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                      style={{ fontWeight: 600, fontSize: '0.9rem' }}
                    >
                      Register Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

          {events.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>{emptyMessage}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
