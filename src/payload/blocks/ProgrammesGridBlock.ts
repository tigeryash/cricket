import type { Block } from 'payload'

/**
 * ProgrammesGridBlock — auto-fetches all active programmes from the
 * Programmes collection and renders a full card listing.
 *
 * Designed for the /programmes page but can appear on any page.
 */
export const ProgrammesGridBlock: Block = {
  slug: 'programmes-grid',
  labels: { singular: 'Programmes Grid', plural: 'Programmes Grids' },
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
      label: 'Section Heading',
      defaultValue: 'Find the Right Fit for Your Child',
    },
    {
      name: 'includeComingSoon',
      type: 'checkbox',
      label: 'Include Coming Soon Programmes',
      defaultValue: true,
      admin: {
        description: 'When unchecked, only "Active" programmes are shown.',
      },
    },
    {
      name: 'showFaqTeaser',
      type: 'checkbox',
      label: 'Show FAQ Teaser at Bottom',
      defaultValue: true,
      admin: {
        description: 'Adds a "Not sure which programme?" call-to-action below the grid.',
      },
    },
  ],
}
