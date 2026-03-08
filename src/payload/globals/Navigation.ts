import type { GlobalConfig } from 'payload'
import { revalidateGlobal } from '../hooks/revalidate'

/**
 * Navigation — header nav links and CTA button
 */
export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  hooks: {
    afterChange: [
      async () => {
        await revalidateGlobal('navigation')
      },
    ],
  },
  admin: {
    group: 'Settings',
    description: 'Header navigation links and CTA button.',
  },
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
              admin: { width: '50%' },
            },
            {
              name: 'href',
              type: 'text',
              label: 'URL',
              required: true,
              admin: { width: '50%', placeholder: '/about' },
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'CTA Button',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'Label',
          defaultValue: 'Book a Trial',
        },
        {
          name: 'ctaHref',
          type: 'text',
          label: 'URL',
          defaultValue: '/contact',
        },
      ],
    },
  ],
}
