import type { CollectionConfig } from 'payload'

/**
 * Media — images and files stored in Cloudflare R2
 * The @payloadcms/storage-s3 plugin in payload.config.ts routes
 * all uploads in this collection to R2.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  access:{
    read: () => true,
  },
  admin: {
    group: 'Content',
    defaultColumns: ['filename', 'alt', 'mimeType', 'filesize', 'updatedAt'],
  },
  upload: {
    // Image sizes auto-generated on upload — useful for srcSet
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, crop: 'center' },
      { name: 'card', width: 800, height: 600, crop: 'center' },
      { name: 'hero', width: 1920, height: 1080, crop: 'center' },
      { name: 'og', width: 1200, height: 630, crop: 'center' },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
      admin: {
        description: 'Describe the image for screen readers and SEO.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
  ],
}
