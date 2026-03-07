import type { Block } from 'payload'

/**
 * ContactSectionBlock — renders the contact info panel (phone, email, address,
 * hours) pulled live from the SiteSettings global, plus the enquiry form.
 *
 * Designed for the /contact page but can appear on any page.
 */
export const ContactSectionBlock: Block = {
  slug: 'contact-section',
  labels: { singular: 'Contact Section', plural: 'Contact Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Contact Information',
    },
    {
      name: 'formHeading',
      type: 'text',
      label: 'Form Heading',
      defaultValue: 'Book a Free Trial or Enquire',
    },
    {
      name: 'formSubheading',
      type: 'text',
      label: 'Form Sub-heading',
      defaultValue: "Fill in the form below and we'll get back to you within 24 hours.",
    },
    {
      name: 'showMap',
      type: 'checkbox',
      label: 'Show Map Placeholder',
      defaultValue: true,
      admin: {
        description: 'Shows a "Sunnybrook Park, Toronto" link at the bottom of the section.',
      },
    },
  ],
}
