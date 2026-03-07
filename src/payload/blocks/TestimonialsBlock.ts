import type { Block } from 'payload'

/**
 * TestimonialsBlock — grid of parent quotes
 */
export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials', plural: 'Testimonials Blocks' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      defaultValue: 'Testimonials',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'What Parents Are Saying',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: 'Testimonials to Display',
      admin: {
        description: 'Leave empty to auto-show all featured testimonials (in display order).',
      },
    },
  ],
}
