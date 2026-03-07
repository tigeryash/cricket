import Image from 'next/image'
import { Shield } from 'lucide-react'
import { findCollectionSafe, findGlobalSafe } from '@/lib/payload'

interface CoachesGridBlockProps {
  eyebrow?: string | null
  heading?: string | null
  subheading?: string | null
  showSafeguardingNote?: boolean | null
  [key: string]: unknown
}

/**
 * CoachesGridBlock — async server component.
 * Fetches all coaches (sorted by display order) directly from Payload.
 */
export async function CoachesGridBlock({
  eyebrow = 'Our Coaches',
  heading = 'Meet the Team',
  subheading,
  showSafeguardingNote = true,
}: CoachesGridBlockProps) {
  const [coaches, siteSettings] = await Promise.all([
    findCollectionSafe({ collection: 'coaches', sort: 'order', limit: 20 }),
    findGlobalSafe('site-settings'),
  ])

  return (
    <section className="py-20 bg-white">
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
          {subheading && (
            <p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              style={{ fontSize: '1rem' }}
            >
              {subheading}
            </p>
          )}
        </div>

        {/* Coaches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coaches.map((coach) => {
            const photoUrl =
              typeof coach.photo === 'object' && coach.photo && 'url' in coach.photo
                ? (coach.photo as any).url
                : null

            const initials = coach.name
              .split(' ')
              .slice(0, 2)
              .map((n: string) => n[0])
              .join('')
              .toUpperCase()

            const certs: string[] = (coach.certifications ?? []).map(
              (c: any) => c.certification,
            )

            return (
              <div
                key={coach.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
              >
                {/* Photo */}
                <div className="sm:w-48 h-52 sm:h-auto bg-primary/10 flex items-center justify-center shrink-0 relative">
                  {photoUrl ? (
                    <Image
                      src={photoUrl}
                      alt={coach.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <span
                        className="text-primary"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '1.5rem',
                        }}
                      >
                        {initials}
                      </span>
                    </div>
                  )}

                  {/* Safeguarding lead badge */}
                  {coach.isSafeguardingLead && (
                    <div className="absolute bottom-2 left-2 bg-primary text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded-full">
                      Safeguarding Lead
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col">
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                    }}
                  >
                    {coach.name}
                  </h3>
                  <p className="text-primary mt-0.5 mb-3" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    {coach.title}
                  </p>
                  <p
                    className="text-muted-foreground mb-4 flex-1"
                    style={{ fontSize: '0.875rem', lineHeight: 1.65 }}
                  >
                    {coach.bio}
                  </p>

                  {certs.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {certs.map((cert) => (
                        <span
                          key={cert}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full"
                          style={{ fontSize: '0.72rem', fontWeight: 600 }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Safeguarding note */}
        {showSafeguardingNote && (
          <div className="mt-14 bg-surface-1 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                  }}
                >
                  Child Protection &amp; Safeguarding
                </h3>
                <p
                  className="text-muted-foreground mt-2"
                  style={{ fontSize: '0.95rem', lineHeight: 1.7 }}
                >
                  The safety and wellbeing of every child is our absolute priority. All coaches
                  undergo comprehensive background checks and are trained in child safeguarding.
                  We follow Cricket Canada&apos;s safeguarding framework and have a dedicated
                  Safeguarding Lead who can be contacted at{' '}
                  <a
                    href={`mailto:${siteSettings?.safeguardingEmail ?? 'safeguarding@cricketoronto.ca'}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {siteSettings?.safeguardingEmail ?? 'safeguarding@cricketoronto.ca'}
                  </a>
                  . Parental consent is obtained for all photography. Our full safeguarding
                  policy is available upon request.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
