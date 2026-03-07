import type { CollectionConfig } from 'payload'

/**
 * Enquiries — contact form submissions
 * Public creation (no auth), admin read/update only.
 */
export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    useAsTitle: 'parentName',
    group: 'Admin',
    defaultColumns: ['parentName', 'email', 'programme', 'status', 'createdAt'],
    description: 'Enquiries submitted through the Contact page form.',
  },
  // Public can create (submit form), only admins can read / update
  access: {
    create: () => true,
    read: ({ req }) => req.user !== null,
    update: ({ req }) => req.user !== null,
    delete: ({ req }) => req.user !== null,
  },
  fields: [
    // -------------------------------------------------------------------------
    // Parent / guardian
    // -------------------------------------------------------------------------
    {
      name: 'parentName',
      type: 'text',
      label: 'Parent / Guardian Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },

    // -------------------------------------------------------------------------
    // Child
    // -------------------------------------------------------------------------
    {
      name: 'childName',
      type: 'text',
      label: "Child's Name",
      required: true,
    },
    {
      name: 'childAge',
      type: 'number',
      label: "Child's Age",
      required: true,
      min: 4,
      max: 18,
    },

    // -------------------------------------------------------------------------
    // Enquiry details
    // -------------------------------------------------------------------------
    {
      name: 'programme',
      type: 'select',
      label: 'Interested In',
      options: [
        { label: 'Free Trial Session', value: 'trial' },
        { label: 'Little Legends (5–8)', value: 'little-legends' },
        { label: 'Rising Stars (9–12)', value: 'rising-stars' },
        { label: 'Elite Academy (13–16)', value: 'elite' },
        { label: 'Private Coaching', value: 'private' },
        { label: 'Holiday Camp', value: 'camp' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      admin: { rows: 4 },
    },

    // -------------------------------------------------------------------------
    // CRM status (admin use)
    // -------------------------------------------------------------------------
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Booked', value: 'booked' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      label: 'Admin Notes',
      admin: {
        position: 'sidebar',
        description: 'Internal notes — not visible to the enquirer.',
        rows: 4,
      },
    },
  ],
}
