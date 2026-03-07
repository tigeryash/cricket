import type { Block } from 'payload'

/**
 * FeaturesBlock — a grid of icon + title + description cards
 * Used for "Why Parents Choose Us" / "More Than Just Cricket" sections
 */
export const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Features Grid', plural: 'Feature Grids' },
  fields: [
    // Section header
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      admin: { placeholder: 'e.g. Why Parents Choose Us' },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      admin: { placeholder: 'e.g. More Than Just Cricket' },
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Sub-heading',
      admin: { rows: 2 },
    },

    // Feature cards
    {
      name: 'features',
      type: 'array',
      label: 'Feature Cards',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Shield (Safety)', value: 'shield' },
            { label: 'Trophy (Achievement)', value: 'trophy' },
            { label: 'Users (Community)', value: 'users' },
            { label: 'Star (Quality)', value: 'star' },
            { label: 'Heart (Care)', value: 'heart' },
            { label: 'Target (Focus)', value: 'target' },
            { label: 'Award (Excellence)', value: 'award' },
            { label: 'Check (Verified)', value: 'check' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          admin: { rows: 3 },
        },
      ],
    },
  ],
}
