import type { Block } from 'payload'

/**
 * HeroBlock — full-screen hero with background image, headline, sub-heading, and CTA buttons.
 * Used on the Home page.
 */
export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  imageURL: '/block-previews/hero.png', // optional thumbnail in admin
  fields: [
    // -------------------------------------------------------------------------
    // Badge label above the heading (e.g. "Toronto's #1 Youth Cricket Academy")
    // -------------------------------------------------------------------------
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      admin: { placeholder: "Toronto's #1 Youth Cricket Academy" },
    },

    // -------------------------------------------------------------------------
    // Heading — supports a highlighted word/phrase
    // -------------------------------------------------------------------------
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: { placeholder: 'Where Young Cricketers Discover Their Potential' },
    },
    {
      name: 'headingHighlight',
      type: 'text',
      label: 'Highlighted Portion of Heading',
      admin: {
        description: 'This exact text within the heading will be styled in gold.',
        placeholder: 'Discover Their Potential',
      },
    },

    // -------------------------------------------------------------------------
    // Sub-heading
    // -------------------------------------------------------------------------
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Sub-heading',
      admin: { rows: 2 },
    },

    // -------------------------------------------------------------------------
    // Primary CTA
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Primary Button',
      fields: [
        {
          name: 'primaryButtonLabel',
          type: 'text',
          label: 'Label',
          admin: { placeholder: 'Book a Free Trial' },
        },
        {
          name: 'primaryButtonLink',
          type: 'text',
          label: 'Link',
          admin: { placeholder: '/contact' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Secondary CTA
    // -------------------------------------------------------------------------
    {
      type: 'collapsible',
      label: 'Secondary Button',
      fields: [
        {
          name: 'secondaryButtonLabel',
          type: 'text',
          label: 'Label',
          admin: { placeholder: 'View Programmes' },
        },
        {
          name: 'secondaryButtonLink',
          type: 'text',
          label: 'Link',
          admin: { placeholder: '/programmes' },
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Background image
    // -------------------------------------------------------------------------
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
  ],
}
