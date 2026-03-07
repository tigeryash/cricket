import type { Block } from 'payload'

/**
 * ProgrammesPreviewBlock — shows a subset of programmes in a card grid
 * Typically used on the Home page to link to the full Programmes page.
 */
export const ProgrammesPreviewBlock: Block = {
  slug: 'programmes-preview',
  labels: { singular: 'Programmes Preview', plural: 'Programmes Previews' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      defaultValue: 'Our Programmes',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Find the Right Fit for Your Child',
    },
    {
      name: 'programmes',
      type: 'relationship',
      relationTo: 'programmes',
      hasMany: true,
      label: 'Programmes to Display',
      admin: {
        description: 'Select up to 3–4 programmes to highlight. Leave empty to show the first 3 active programmes.',
      },
    },
    {
      name: 'viewAllLink',
      type: 'text',
      label: '"View All" Link',
      defaultValue: '/programmes',
    },
  ],
}
