import type { CollectionConfig } from 'payload'

/**
 * Coaches — staff profiles displayed on the About page
 */
export const Coaches: CollectionConfig = {
  slug: 'coaches',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    defaultColumns: ['name', 'title', 'order', 'updatedAt'],
    description: 'Manage coach profiles shown on the About page.',
  },
  fields: [
    // -------------------------------------------------------------------------
    // Identity
    // -------------------------------------------------------------------------
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Job Title',
      required: true,
      admin: { description: 'e.g. Head Coach & Founder' },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
      admin: {
        description: 'Square headshot recommended. Displayed on the About page.',
      },
    },

    // -------------------------------------------------------------------------
    // Bio
    // -------------------------------------------------------------------------
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography',
      required: true,
      admin: { rows: 5 },
    },

    // -------------------------------------------------------------------------
    // Certifications
    // -------------------------------------------------------------------------
    {
      name: 'certifications',
      type: 'array',
      label: 'Certifications & Qualifications',
      admin: {
        description: 'Shown as badges on the coach card.',
      },
      fields: [
        {
          name: 'certification',
          type: 'text',
          required: true,
          admin: { placeholder: 'e.g. Cricket Canada Level 3' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Display order
    // -------------------------------------------------------------------------
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: {
        description: 'Lower numbers appear first. Head coach should be 1.',
        position: 'sidebar',
      },
    },

    // -------------------------------------------------------------------------
    // Safeguarding lead flag
    // -------------------------------------------------------------------------
    {
      name: 'isSafeguardingLead',
      type: 'checkbox',
      label: 'Safeguarding Lead',
      defaultValue: false,
      admin: {
        description: 'Marks this coach as the designated Safeguarding Lead.',
        position: 'sidebar',
      },
    },
  ],
}
