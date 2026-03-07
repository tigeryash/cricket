import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { findCollectionSafe } from '@/lib/payload'
import { FAQAccordion } from '@/components/faq-accordian'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Cricket Toronto — getting started, equipment, safety, pricing, and more.',
}

// Human-readable category labels matching the CMS select values
const categoryLabels: Record<string, string> = {
  'getting-started': 'Getting Started',
  practical: 'Practical Questions',
  safety: 'Safety & Policies',
  costs: 'Costs & Payment',
  other: 'Other',
}

// The order in which categories should appear
const categoryOrder = ['getting-started', 'practical', 'safety', 'costs', 'other']

export default async function FAQPage() {
  const faqs = await findCollectionSafe({
    collection: 'faqs',
    where: { published: { equals: true } },
    sort: 'order',
    limit: 100,
  })

  // Group FAQs by category
  const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, faq) => {
    const cat = faq.category ?? 'other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(faq)
    return acc
  }, {})

  // Sort categories by defined order
  const orderedCategories = categoryOrder.filter((c) => grouped[c]?.length > 0)

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Everything parents ask us — answered. Can&apos;t find what you need? Just get in touch.
          </p>
        </div>
      </section>

      {/* FAQ content — client component for accordion interaction */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {orderedCategories.map((cat) => (
            <div key={cat}>
              <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem' }}>
                {categoryLabels[cat] ?? cat}
              </h2>
              {/* FAQAccordion is a client component that handles open/close state */}
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

      {/* Still have questions */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.3rem,2.5vw,1.75rem)' }}>
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
    </div>
  )
}
