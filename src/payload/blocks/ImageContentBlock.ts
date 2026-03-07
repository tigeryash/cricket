import type { Block } from 'payload'

/**
 * ImageContentBlock — image on one side, text on the other (About teaser, Mission section, etc.)
 */
export const ImageContentBlock: Block = {
  slug: 'image-content',
  labels: { singular: 'Image + Content', plural: 'Image + Content Blocks' },
  fields: [
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Image Position',
      defaultValue: 'left',
      options: [
        { label: 'Image on Left', value: 'left' },
        { label: 'Image on Right', value: 'right' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      admin: { placeholder: 'e.g. About Us' },
    },
    {
      name: 'overlayBadge',
      type: 'group',
      label: 'Image Overlay Badge (optional)',
      admin: { description: 'Gold badge overlaid on the image corner (e.g. "8+ Years of Excellence").' },
      fields: [
        {
          name: 'number',
          type: 'text',
          admin: { placeholder: 'e.g. 8+' },
        },
        {
          name: 'label',
          type: 'text',
          admin: { placeholder: 'e.g. Years of Excellence' },
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Body Text',
    },
    {
      type: 'collapsible',
      label: 'CTA Button',
      fields: [
        {
          name: 'buttonLabel',
          type: 'text',
          label: 'Button Label',
          admin: { placeholder: 'e.g. Meet Our Coaches' },
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link',
          admin: { placeholder: '/about' },
        },
      ],
    },
  ],
}
