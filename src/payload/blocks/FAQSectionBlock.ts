import type { Block } from 'payload'

/**
 * FAQSectionBlock — auto-fetches all published FAQs from the FAQs
 * collection, groups them by category, and renders an accordion.
 *
 * Designed for the /faq page but can appear on any page.
 */
export const FAQSectionBlock: Block = {
  slug: 'faq-section',
  labels: { singular: 'FAQ Section', plural: 'FAQ Sections' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      defaultValue: 'FAQs',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Sub-heading',
      defaultValue:
        "Everything parents ask us — answered. Can't find what you need? Just get in touch.",
      admin: { rows: 2 },
    },
    {
      name: 'showContactCta',
      type: 'checkbox',
      label: 'Show "Still have questions?" CTA',
      defaultValue: true,
    },
    {
      name: 'filterCategory',
      type: 'select',
      label: 'Filter to Single Category (optional)',
      options: [
        { label: 'All categories', value: 'all' },
        { label: 'Getting Started', value: 'getting-started' },
        { label: 'Practical Questions', value: 'practical' },
        { label: 'Safety & Policies', value: 'safety' },
        { label: 'Costs & Payment', value: 'costs' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'all',
      admin: {
        description: 'Leave as "All categories" to show every FAQ grouped by category.',
      },
    },
  ],
}
