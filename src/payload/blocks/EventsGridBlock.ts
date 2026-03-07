import type { Block } from 'payload'

/**
 * EventsGridBlock — auto-fetches all non-draft events (featured first)
 * and renders them as event cards.
 *
 * Designed for the /events page but can appear on any page.
 */
export const EventsGridBlock: Block = {
  slug: 'events-grid',
  labels: { singular: 'Events Grid', plural: 'Events Grids' },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      defaultValue: 'Events & Camps',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: "Don't Miss Out — Spots Fill Fast",
    },
    {
      name: 'showPastEvents',
      type: 'checkbox',
      label: 'Show Past Events',
      defaultValue: false,
      admin: {
        description: 'When checked, past events are listed after upcoming ones.',
      },
    },
    {
      name: 'emptyMessage',
      type: 'text',
      label: 'Empty State Message',
      defaultValue: 'No upcoming events at the moment. Check back soon!',
      admin: {
        description: 'Shown when there are no events to display.',
      },
    },
  ],
}
