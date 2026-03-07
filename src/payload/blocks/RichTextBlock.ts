import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

/**
 * RichTextBlock — generic rich-text / editorial content block
 */
export const RichTextBlock: Block = {
  slug: 'rich-text',
  labels: { singular: 'Rich Text', plural: 'Rich Text Blocks' },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'width',
      type: 'select',
      label: 'Content Width',
      defaultValue: 'prose',
      options: [
        { label: 'Prose (readable column)', value: 'prose' },
        { label: 'Full width', value: 'full' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
