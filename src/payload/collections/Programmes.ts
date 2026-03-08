import type { CollectionConfig } from 'payload'
import { revalidateAllFrontendPaths } from '../hooks/revalidate'

/**
 * Programmes — coaching programmes (Little Legends, Rising Stars, etc.)
 */
export const Programmes: CollectionConfig = {
  slug: 'programmes',
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
    useAsTitle: 'name',
    group: 'Content',
    defaultColumns: ['name', 'ageRange', 'price', 'status', 'updatedAt'],
    description: 'Manage coaching programmes shown on the Programmes page.',
  },
  fields: [
    // -------------------------------------------------------------------------
    // Identity
    // -------------------------------------------------------------------------
    {
      name: 'name',
      type: 'text',
      label: 'Programme Name',
      required: true,
      admin: { placeholder: 'e.g. Little Legends' },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      required: true,
      unique: true,
      admin: {
        description: 'Auto-generated from name. Used in URLs.',
        placeholder: 'e.g. little-legends',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Coming Soon', value: 'coming-soon' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: { position: 'sidebar' },
    },

    // -------------------------------------------------------------------------
    // Audience
    // -------------------------------------------------------------------------
    {
      type: 'row',
      fields: [
        {
          name: 'ageRange',
          type: 'text',
          label: 'Age Range',
          required: true,
          admin: { placeholder: 'e.g. Ages 5–8', width: '50%' },
        },
        {
          name: 'level',
          type: 'text',
          label: 'Level',
          required: true,
          admin: { placeholder: 'e.g. Beginners', width: '50%' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Pricing & scheduling
    // -------------------------------------------------------------------------
    {
      name: 'price',
      type: 'text',
      label: 'Price',
      required: true,
      admin: { placeholder: 'e.g. $180/term (10 weeks)' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'sessionDuration',
          type: 'text',
          label: 'Session Duration',
          admin: { placeholder: 'e.g. 1 hour sessions', width: '33%' },
        },
        {
          name: 'frequency',
          type: 'text',
          label: 'Schedule',
          admin: { placeholder: 'e.g. Saturdays, 9:00 – 10:00 AM', width: '33%' },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          admin: { placeholder: 'e.g. Sunnybrook Park, Toronto', width: '33%' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Content
    // -------------------------------------------------------------------------
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: { rows: 4 },
    },
    {
      name: 'includes',
      type: 'array',
      label: "What's Included",
      admin: {
        description: 'Bullet-point list shown on the programme card.',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
          admin: { placeholder: 'e.g. All equipment provided' },
        },
      ],
    },
    {
      name: 'prerequisites',
      type: 'text',
      label: 'Prerequisites',
      admin: { placeholder: 'e.g. No experience needed!' },
    },

    // -------------------------------------------------------------------------
    // Visual / theming
    // -------------------------------------------------------------------------
    {
      name: 'accentColor',
      type: 'select',
      label: 'Accent Colour',
      defaultValue: 'green',
      options: [
        { label: 'Green (primary)', value: 'green' },
        { label: 'Gold', value: 'gold' },
        { label: 'Emerald', value: 'emerald' },
        { label: 'Purple', value: 'purple' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Colour stripe at the top of the programme card.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover Image',
    },

    // -------------------------------------------------------------------------
    // Display order
    // -------------------------------------------------------------------------
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: { position: 'sidebar' },
    },
  ],
}
