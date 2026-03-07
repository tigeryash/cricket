import type { Block } from 'payload'

/**
 * StatsBlock — the green stats bar with numbers (500+ players, 8 years, etc.)
 */
export const StatsBlock: Block = {
  slug: 'stats',
  labels: { singular: 'Stats Bar', plural: 'Stats Bars' },
  fields: [
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'number',
              type: 'text',
              label: 'Number / Value',
              required: true,
              admin: { placeholder: 'e.g. 500+', width: '50%' },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
              admin: { placeholder: 'e.g. Young Players Trained', width: '50%' },
            },
          ],
        },
      ],
    },
  ],
}
