import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface MediaObject {
  url?: string | null
}

interface Programme {
  id: string
  name: string
  ageRange?: string | null
  level?: string | null
  price?: string | null
  description?: string | null
  accentColor?: string | null
  image?: MediaObject | string | null
}

interface ProgrammesPreviewBlockProps {
  eyebrow?: string | null
  heading?: string | null
  programmes?: (Programme | string)[] | null
  viewAllLink?: string | null
  [key: string]: unknown
}

const accentBarMap: Record<string, string> = {
  green: 'bg-primary',
  gold: 'bg-[#d4a017]',
  emerald: 'bg-emerald-500',
  purple: 'bg-purple-600',
}

const accentBadgeMap: Record<string, string> = {
  green: 'bg-green-50 text-primary',
  gold: 'bg-amber-50 text-amber-700',
  emerald: 'bg-emerald-50 text-emerald-700',
  purple: 'bg-purple-50 text-purple-700',
}

export function ProgrammesPreviewBlock({
  eyebrow,
  heading,
  programmes = [],
  viewAllLink = '/programmes',
}: ProgrammesPreviewBlockProps) {
  const populated = (programmes ?? []).filter(
    (p): p is Programme => typeof p === 'object' && p !== null,
  )

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
          {populated.map((prog) => {
            const bar = accentBarMap[prog.accentColor ?? 'green'] ?? 'bg-primary'
            const badge = accentBadgeMap[prog.accentColor ?? 'green'] ?? 'bg-green-50 text-primary'
            const desc = prog.description
              ? prog.description.length > 130
                ? prog.description.slice(0, 127) + '…'
                : prog.description
              : null

            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Accent stripe */}
                <div className={`h-1.5 ${bar}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Name + level */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                      }}
                    >
                      {prog.name}
                    </h3>
                    {prog.level && (
                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-full ${badge}`}
                        style={{ fontSize: '0.72rem', fontWeight: 600 }}
                      >
                        {prog.level}
                      </span>
                    )}
                  </div>

                  {prog.ageRange && (
                    <p
                      className="text-primary mb-3"
                      style={{ fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      {prog.ageRange}
                    </p>
                  )}

                  {desc && (
                    <p
                      className="text-muted-foreground mb-4 flex-1"
                      style={{ fontSize: '0.875rem', lineHeight: 1.65 }}
                    >
                      {desc}
                    </p>
                  )}

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span
                      className="text-primary"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                    >
                      {prog.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-primary hover:gap-2.5 transition-all"
                      style={{ fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      Enquire <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All */}
        {viewAllLink && (
          <div className="text-center mt-10">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              View All Programmes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
