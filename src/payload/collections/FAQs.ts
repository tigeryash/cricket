import type { CollectionConfig } from 'payload'
import { revalidateAllFrontendPaths } from '../hooks/revalidate'

/**
 * FAQs — question/answer pairs, grouped by category
 */
export const FAQs: CollectionConfig = {
  slug: 'faqs',
  hooks: {
    afterChange: [
      async () => {
        await revalidateAllFrontendPaths()
      },
    ],
    afterDelete: [
      async () => {
        await revalidateAllFrontendPaths()
      },
    ],
  },
  admin: {
    useAsTitle: 'question',
    group: 'Content',
    defaultColumns: ['question', 'category', 'order', 'updatedAt'],
    description: 'Manage FAQ entries shown on the FAQ page.',
  },
  fields: [
    // -------------------------------------------------------------------------
    // Category grouping
    // -------------------------------------------------------------------------
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      options: [
        { label: 'Getting Started', value: 'getting-started' },
        { label: 'Practical Questions', value: 'practical' },
        { label: 'Safety & Policies', value: 'safety' },
        { label: 'Costs & Payment', value: 'costs' },
        { label: 'Other', value: 'other' },
      ],
      admin: { position: 'sidebar' },
    },

    // -------------------------------------------------------------------------
    // Content
    // -------------------------------------------------------------------------
    {
      name: 'question',
      type: 'text',
      label: 'Question',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      label: 'Answer',
      required: true,
      admin: { rows: 5 },
    },

    // -------------------------------------------------------------------------
    // Display control
    // -------------------------------------------------------------------------
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: {
        description: 'Lower numbers appear first within the same category.',
        position: 'sidebar',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Published',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
