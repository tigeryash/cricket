import type { Block } from 'payload'

/**
 * EventBannerBlock — full-width promotional banner for a single featured event
 */
export const EventBannerBlock: Block = {
  slug: 'event-banner',
  labels: { singular: 'Event Banner', plural: 'Event Banners' },
  fields: [
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
      label: 'Featured Event',
      admin: {
        description: 'Select the event to promote in this banner.',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'A dark overlay is applied automatically.',
      },
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Button Label',
      defaultValue: 'Register Now',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Button Link',
      defaultValue: '/events',
    },
  ],
}
