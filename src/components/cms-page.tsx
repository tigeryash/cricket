import Link from 'next/link'

import SectionHeading from '@/components/section-heading'

type CMSPageProps = {
  page: {
    title: string
    hero?: {
      title?: string | null
      description?: string | null
      image?:
        | {
            url?: string | null
          }
        | string
        | null
    } | null
    sections?: Array<{
      id?: string | null
      heading: string
      body: string
      ctaLabel?: string | null
      ctaHref?: string | null
    }> | null
  }
}

const getImageURL = (image: (CMSPageProps['page']['hero'] extends infer H
  ? H extends { image?: infer I }
    ? I
    : never
  : never) | undefined) => {
  if (!image) return undefined
  if (typeof image === 'string') return undefined
  return image.url || undefined
}

export const CMSPage = ({ page }: CMSPageProps) => {
  const heroTitle = page.hero?.title || page.title
  const heroDescription = page.hero?.description || ''
  const heroImage = getImageURL(page.hero?.image)

  return (
    <div>
      <SectionHeading img={heroImage} title={heroTitle} description={heroDescription} />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {(page.sections || []).map((section) => (
            <article key={section.id || section.heading} className="border border-gray-100 rounded-2xl p-6 md:p-8">
              <h2
                className="mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.25rem, 2.6vw, 1.8rem)' }}
              >
                {section.heading}
              </h2>
              <p className="text-muted-foreground whitespace-pre-line" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                {section.body}
              </p>
              {section.ctaLabel && section.ctaHref ? (
                <Link
                  href={section.ctaHref}
                  className="inline-flex mt-6 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
                  style={{ fontWeight: 600, fontSize: '0.9rem' }}
                >
                  {section.ctaLabel}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}