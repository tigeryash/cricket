import type { Block } from 'payload'

/**
 * CoachesGridBlock — auto-fetches all coaches from the Coaches collection
 * and renders them in a card grid on the About page (or any page).
 *
 * Add this block to a Page document to display the coaching team.
 * No manual relationship picker needed — it always shows all coaches
 * ordered by their "Display Order" field.
 */
export const CoachesGridBlock: Block = {
  slug: 'coaches-grid',
  labels: { singular: 'Coaches Grid', plural: 'Coaches Grids' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      defaultValue: 'Our Coaches',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Meet the Team',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Sub-heading',
      admin: {
        rows: 2,
        description: 'Short sentence shown below the heading.',
      },
    },
    {
      name: 'showSafeguardingNote',
      type: 'checkbox',
      label: 'Show Safeguarding Note',
      defaultValue: true,
      admin: {
        description:
          'Displays the "Child Protection & Safeguarding" box below the coach grid.',
      },
    },
  ],
}
