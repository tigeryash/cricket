import type { CollectionConfig } from 'payload'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const slug = data?.slug || 'home'
        return `${baseURL}${slug === 'home' ? '/' : `/${slug}`}`
      },
    },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Use home for /, or route names like about, contact, events.',
      },
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'body',
          type: 'textarea',
          required: true,
        },
        {
          name: 'ctaLabel',
          type: 'text',
        },
        {
          name: 'ctaHref',
          type: 'text',
        },
      ],
    },
    {
      name: 'showInNav',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'navLabel',
      type: 'text',
    },
  ],
}