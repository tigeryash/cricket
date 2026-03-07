import type { GlobalConfig } from 'payload'

/**
 * SiteSettings — singleton global for site-wide configuration.
 * Changes here are reflected across every page.
 */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
    description: 'Global settings — contact details, SEO defaults, social links.',
  },
  fields: [
    // -------------------------------------------------------------------------
    // Brand identity
    // -------------------------------------------------------------------------
    {
      name: 'siteName',
      type: 'text',
      label: 'Site / Academy Name',
      required: true,
      defaultValue: 'Cricket Toronto',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      defaultValue: 'Youth Cricket Academy',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      admin: {
        description: 'Used in the navigation bar and footer.',
      },
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
    },

    // -------------------------------------------------------------------------
    // Contact information
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone',
          defaultValue: '(416) 555-0123',
        },
        {
          name: 'email',
          type: 'email',
          label: 'General Email',
          defaultValue: 'info@cricketoronto.ca',
        },
        {
          name: 'safeguardingEmail',
          type: 'email',
          label: 'Safeguarding Email',
          defaultValue: 'safeguarding@cricketoronto.ca',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Main Venue Address',
          defaultValue: 'Sunnybrook Park\n1132 Leslie St\nNorth York, ON M3C 2J6',
          admin: { rows: 3 },
        },
        {
          name: 'officeHours',
          type: 'text',
          label: 'Office Hours',
          defaultValue: 'Mon–Fri: 9 AM – 6 PM · Sat: 8 AM – 3 PM',
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Social links
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Social Media',
      fields: [
        {
          name: 'instagramUrl',
          type: 'text',
          label: 'Instagram URL',
          admin: { placeholder: 'https://instagram.com/cricketoronto' },
        },
        {
          name: 'facebookUrl',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'youtubeUrl',
          type: 'text',
          label: 'YouTube URL',
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Global SEO defaults
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Default SEO',
      fields: [
        {
          name: 'defaultMetaTitle',
          type: 'text',
          label: 'Default Meta Title',
          defaultValue: 'Cricket Toronto — Youth Cricket Academy',
        },
        {
          name: 'defaultMetaDescription',
          type: 'textarea',
          label: 'Default Meta Description',
          defaultValue:
            'Professional, fun, and safe cricket coaching for children ages 5–16 across the Greater Toronto Area.',
          admin: { rows: 3 },
        },
        {
          name: 'defaultOgImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Default OG Image',
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Footer
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Footer',
      fields: [
        {
          name: 'footerAboutText',
          type: 'textarea',
          label: 'Footer About Blurb',
          defaultValue:
            'Building confident young cricketers across the GTA since 2018. Professional coaching in a safe, fun environment.',
          admin: { rows: 3 },
        },
        {
          name: 'footerCopyright',
          type: 'text',
          label: 'Copyright Line',
          defaultValue: '© 2026 Cricket Toronto. All rights reserved.',
        },
        {
          name: 'newsletterHeading',
          type: 'text',
          label: 'Newsletter Heading',
          defaultValue: 'Stay Updated',
        },
        {
          name: 'newsletterSubtext',
          type: 'text',
          label: 'Newsletter Sub-text',
          defaultValue: 'Get the latest news on programmes, events, and cricket tips.',
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Announcement banner
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Announcement Banner',
      admin: { description: 'Optional top-of-page banner for urgent announcements.' },
      fields: [
        {
          name: 'announcementEnabled',
          type: 'checkbox',
          label: 'Show Announcement Banner',
          defaultValue: false,
        },
        {
          name: 'announcementText',
          type: 'text',
          label: 'Announcement Text',
          admin: { placeholder: 'e.g. Spring Camp 2026 registrations now open!' },
        },
        {
          name: 'announcementLink',
          type: 'text',
          label: 'Link (optional)',
          admin: { placeholder: '/events' },
        },
      ],
    },
  ],
}
