import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { findCollectionSafe } from '@/lib/payload'
import { FAQAccordion } from '@/components/faq-accordian'

interface FAQSectionBlockProps {
  eyebrow?: string | null
  heading?: string | null
  subheading?: string | null
  showContactCta?: boolean | null
  filterCategory?: string | null
  [key: string]: unknown
}

const categoryLabels: Record<string, string> = {
  'getting-started': 'Getting Started',
  practical: 'Practical Questions',
  safety: 'Safety & Policies',
  costs: 'Costs & Payment',
  other: 'Other',
}

const categoryOrder = ['getting-started', 'practical', 'safety', 'costs', 'other']

/**
 * FAQSectionBlock — async server component.
 * Fetches all published FAQs, groups by category, renders accordions.
 */
export async function FAQSectionBlock({
  eyebrow,
  heading,
  subheading,
  showContactCta = true,
  filterCategory = 'all',
}: FAQSectionBlockProps) {
  const whereClause: any =
    filterCategory && filterCategory !== 'all'
      ? { and: [{ published: { equals: true } }, { category: { equals: filterCategory } }] }
      : { published: { equals: true } }

  const faqs = await findCollectionSafe({
    collection: 'faqs',
    where: whereClause,
    sort: 'order',
    limit: 100,
  })

  // Group by category
  const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, faq) => {
    const cat = (faq.category as string) ?? 'other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(faq)
    return acc
  }, {})

  const orderedCategories = categoryOrder.filter((c) => grouped[c]?.length > 0)

  return (
    <div>
      {/* Header */}
      {(eyebrow || heading || subheading) && (
        <section className="pt-16 pb-6 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            {subheading && (
              <p className="text-muted-foreground mt-3" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                {subheading}
              </p>
            )}
          </div>
        </section>
      )}

      {/* FAQ accordions */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {orderedCategories.map((cat) => (
            <div key={cat}>
              <h3
                className="mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem' }}
              >
                {categoryLabels[cat] ?? cat}
              </h3>
              <FAQAccordion
                faqs={grouped[cat].map((f) => ({ q: f.question, a: f.answer }))}
              />
            </div>
          ))}

          {orderedCategories.length === 0 && (
            <p className="text-muted-foreground text-center py-10">
              No FAQs found. Add some in the CMS admin panel.
            </p>
          )}
        </div>
      </section>

      {/* Still have questions CTA */}
      {showContactCta && (
        <section className="py-16 bg-surface-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
            >
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mt-3 mb-8" style={{ fontSize: '1rem' }}>
              We&apos;re always happy to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
