import type { CollectionConfig } from 'payload'

/**
 * Testimonials — parent quotes shown on the Home page
 */
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'parentName',
    group: 'Content',
    defaultColumns: ['parentName', 'childDescription', 'rating', 'featured', 'updatedAt'],
    description: 'Parent testimonials shown on the Home page.',
  },
  fields: [
    // -------------------------------------------------------------------------
    // Attribution
    // -------------------------------------------------------------------------
    {
      name: 'parentName',
      type: 'text',
      label: 'Parent / Guardian Name',
      required: true,
      admin: { placeholder: 'e.g. Sarah M.' },
    },
    {
      name: 'childDescription',
      type: 'text',
      label: "Child Description",
      required: true,
      admin: { placeholder: 'e.g. Mother of Aiden, age 8' },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Parent Photo (optional)',
      admin: {
        description: 'If not provided, initials will be shown instead.',
      },
    },

    // -------------------------------------------------------------------------
    // Quote
    // -------------------------------------------------------------------------
    {
      name: 'quote',
      type: 'textarea',
      label: 'Testimonial Quote',
      required: true,
      admin: {
        rows: 4,
        description: 'Write in first person. Do not include quotation marks — they are added automatically.',
      },
    },

    // -------------------------------------------------------------------------
    // Rating & visibility
    // -------------------------------------------------------------------------
    {
      name: 'rating',
      type: 'select',
      label: 'Star Rating',
      defaultValue: '5',
      options: [
        { label: '5 stars', value: '5' },
        { label: '4 stars', value: '4' },
        { label: '3 stars', value: '3' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Show on Home Page',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: { position: 'sidebar' },
    },
  ],
}
