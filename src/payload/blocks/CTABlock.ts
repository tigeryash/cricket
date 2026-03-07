import type { Block } from 'payload'

/**
 * CTABlock — a call-to-action section with optional image, heading, body, and buttons
 */
export const CTABlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA Section', plural: 'CTA Sections' },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (optional)',
      admin: {
        description: 'Displayed above the heading.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: { placeholder: "Ready to Get Your Child Started?" },
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Sub-heading',
      admin: { rows: 2 },
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Background Style',
      defaultValue: 'white',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Green (primary)', value: 'green' },
        { label: 'Light green', value: 'light-green' },
      ],
      admin: { position: 'sidebar' },
    },

    // Buttons
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      maxRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Style',
          defaultValue: 'primary',
          options: [
            { label: 'Primary (green fill)', value: 'primary' },
            { label: 'Gold fill', value: 'gold' },
            { label: 'Outline', value: 'outline' },
            { label: 'Phone (tel: link)', value: 'phone' },
          ],
        },
      ],
    },
  ],
}
