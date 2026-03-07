import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, MapPin, Calendar } from 'lucide-react'
import { findCollectionSafe } from '@/lib/payload'

interface ProgrammesGridBlockProps {
  eyebrow?: string | null
  heading?: string | null
  includeComingSoon?: boolean | null
  showFaqTeaser?: boolean | null
  [key: string]: unknown
}

const accentMap: Record<string, { bar: string; badge: string; badgeText: string }> = {
  green: { bar: 'bg-primary', badge: 'bg-green-50', badgeText: 'text-primary' },
  gold: { bar: 'bg-[#d4a017]', badge: 'bg-amber-50', badgeText: 'text-[#b8890a]' },
  emerald: { bar: 'bg-emerald-500', badge: 'bg-emerald-50', badgeText: 'text-emerald-600' },
  purple: { bar: 'bg-purple-600', badge: 'bg-purple-50', badgeText: 'text-purple-600' },
}

/**
 * ProgrammesGridBlock — async server component.
 * Auto-fetches all active (and optionally coming-soon) programmes.
 */
export async function ProgrammesGridBlock({
  eyebrow,
  heading,
  includeComingSoon = true,
  showFaqTeaser = true,
}: ProgrammesGridBlockProps) {
  const whereClause = includeComingSoon
    ? { status: { not_equals: 'archived' } }
    : { status: { equals: 'active' } }

  const programmes = await findCollectionSafe({
    collection: 'programmes',
    where: whereClause,
    sort: 'order',
    limit: 20,
  })

  return (
    <div>
      {/* Hero — handled by separate HeroBlock on the page */}

      {/* Header */}
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

      {/* Programmes list */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {programmes.map((prog) => {
            const accent = accentMap[prog.accentColor ?? 'green'] ?? accentMap.green
            const includes: string[] = (prog.includes ?? []).map((i: any) => i.item)

            return (
              <div
                key={prog.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`h-2 ${accent.bar}`} />
                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem' }}
                        >
                          {prog.name}
                        </h3>
                        <span
                          className={`${accent.badge} ${accent.badgeText} px-3 py-0.5 rounded-full`}
                          style={{ fontSize: '0.75rem', fontWeight: 600 }}
                        >
                          {prog.level}
                        </span>
                        {prog.status === 'coming-soon' && (
                          <span
                            className="bg-amber-50 text-amber-700 px-3 py-0.5 rounded-full"
                            style={{ fontSize: '0.75rem', fontWeight: 600 }}
                          >
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground" style={{ fontSize: '0.95rem' }}>
                        {prog.ageRange}
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-xl px-5 py-3 text-center shrink-0">
                      <div
                        className="text-primary"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}
                      >
                        {prog.price}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {prog.description}
                  </p>

                  {/* Schedule */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {prog.sessionDuration && (
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <Clock className="w-4 h-4 text-primary shrink-0" /> {prog.sessionDuration}
                      </div>
                    )}
                    {prog.frequency && (
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <Calendar className="w-4 h-4 text-primary shrink-0" /> {prog.frequency}
                      </div>
                    )}
                    {prog.location && (
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <MapPin className="w-4 h-4 text-primary shrink-0" /> {prog.location}
                      </div>
                    )}
                  </div>

                  {/* Includes */}
                  {includes.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-5 mb-6">
                      <h4
                        className="mb-3"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}
                      >
                        What&apos;s Included
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {includes.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-muted-foreground"
                            style={{ fontSize: '0.85rem' }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {prog.prerequisites && (
                      <p className="text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <strong>Prerequisites:</strong> {prog.prerequisites}
                      </p>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shrink-0"
                      style={{ fontWeight: 600, fontSize: '0.9rem' }}
                    >
                      Register Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ teaser */}
      {showFaqTeaser && (
        <section className="py-16 bg-surface-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
            >
              Not Sure Which Programme Is Right?
            </h2>
            <p className="text-muted-foreground mt-3 mb-6" style={{ fontSize: '1rem' }}>
              No problem! Book a free trial and our coaches will help find the perfect fit for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Book a Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
                style={{ fontWeight: 600 }}
              >
                Read FAQ
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
