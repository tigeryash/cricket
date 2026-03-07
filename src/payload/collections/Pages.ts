import type { CollectionConfig } from 'payload'

// Blocks
import { HeroBlock } from '../blocks/HeroBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { FeaturesBlock } from '../blocks/FeaturesBlock'
import { ProgrammesPreviewBlock } from '../blocks/ProgrammesPreviewBlock'
import { ImageContentBlock } from '../blocks/ImageContentBlock'
import { EventBannerBlock } from '../blocks/EventBannerBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { CTABlock } from '../blocks/CTABlock'
import { RichTextBlock } from '../blocks/RichTextBlock'

/**
 * Pages — the flexible page builder collection.
 *
 * Each page is made up of one or more "blocks" (content sections).
 * This drives the Home page content. About, Programmes, Events, FAQ, and
 * Contact pages pull from their dedicated collections but their hero /
 * intro sections can also be managed here.
 */
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    livePreview: {
      url: ({ data }) =>
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${data?.slug === 'home' ? '' : data?.slug}`,
    },
    preview: (doc) =>
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${doc?.slug === 'home' ? '' : doc?.slug}`,
  },
  versions: {
    drafts: {
      autosave: { interval: 375 },
    },
  },
  fields: [
    // -------------------------------------------------------------------------
    // Title & slug (sidebar)
    // -------------------------------------------------------------------------
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Use "home" for the root /  page.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: { position: 'sidebar' },
    },

    // -------------------------------------------------------------------------
    // Content blocks — drag-and-drop content builder
    // -------------------------------------------------------------------------
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Layout',
      blocks: [
        HeroBlock,
        StatsBlock,
        FeaturesBlock,
        ProgrammesPreviewBlock,
        ImageContentBlock,
        EventBannerBlock,
        TestimonialsBlock,
        CTABlock,
        RichTextBlock,
      ],
    },

    // -------------------------------------------------------------------------
    // SEO metadata (sidebar group)
    // -------------------------------------------------------------------------
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      admin: { position: 'sidebar' },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
          admin: { description: 'Defaults to the page title + site name.' },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
          admin: { rows: 3 },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          label: 'No Index',
          defaultValue: false,
        },
      ],
    },
  ],
}
