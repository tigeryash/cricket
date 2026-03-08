import type { CollectionConfig } from 'payload'
import { revalidateAllFrontendPaths } from '../hooks/revalidate'

/**
 * Events — camps, open days, tournaments
 */
export const Events: CollectionConfig = {
  slug: 'events',
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
    defaultColumns: ['name', 'date', 'price', 'featured', 'status', 'updatedAt'],
    description: 'Manage events and camps shown on the Events page.',
  },
  fields: [
    // -------------------------------------------------------------------------
    // Identity
    // -------------------------------------------------------------------------
    {
      name: 'name',
      type: 'text',
      label: 'Event Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      required: true,
      unique: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'upcoming',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Past', value: 'past' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Draft', value: 'draft' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Event',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Highlighted with a gold banner on the Events page.',
      },
    },

    // -------------------------------------------------------------------------
    // Date & time
    // -------------------------------------------------------------------------
    {
      type: 'row',
      fields: [
        {
          name: 'date',
          type: 'text',
          label: 'Date(s)',
          required: true,
          admin: { placeholder: 'e.g. April 12–16, 2026', width: '50%' },
        },
        {
          name: 'time',
          type: 'text',
          label: 'Time',
          admin: { placeholder: 'e.g. 9:00 AM – 3:00 PM daily', width: '50%' },
        },
      ],
    },
    {
      name: 'registrationDeadline',
      type: 'text',
      label: 'Registration Deadline',
      admin: { placeholder: 'e.g. April 5, 2026' },
    },

    // -------------------------------------------------------------------------
    // Location & audience
    // -------------------------------------------------------------------------
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      admin: { placeholder: 'e.g. Sunnybrook Park, 1132 Leslie St, Toronto' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ageRange',
          type: 'text',
          label: 'Age Range',
          admin: { placeholder: 'e.g. Ages 6–16', width: '50%' },
        },
        {
          name: 'level',
          type: 'text',
          label: 'Level',
          admin: { placeholder: 'e.g. All levels welcome', width: '50%' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Pricing
    // -------------------------------------------------------------------------
    {
      name: 'price',
      type: 'text',
      label: 'Price',
      admin: { placeholder: 'e.g. $375 for the full week' },
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
      name: 'expectations',
      type: 'array',
      label: 'What to Expect',
      admin: {
        description: 'Bullet points shown under "What to Expect" heading.',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
          admin: { placeholder: 'e.g. Professional coaching from 4 certified coaches' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Media
    // -------------------------------------------------------------------------
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Event Image',
    },
  ],
}
