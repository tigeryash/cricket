import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
// Collections
import { Media } from './payload/collections/Media'
import { Coaches } from './payload/collections/Coaches'
import { Programmes } from './payload/collections/Programmes'
import { Events } from './payload/collections/Events'
import { Testimonials } from './payload/collections/Testimonials'
import { FAQs } from './payload/collections/FAQs'
import { Pages } from './payload/collections/Pages'
import { Users } from './payload/collections/Users'
import { Enquiries } from './payload/collections/Enquiries'

// Globals
import { SiteSettings } from './payload/globals/SiteSettings'
import { Navigation } from './payload/globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUri = process.env.DATABASE_URI?.replace(
  "sslmode=require",
  "sslmode=verify-full",
);

export default buildConfig({
  // ---------------------------------------------------------------------------
  // Admin panel
  // ---------------------------------------------------------------------------
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Cricket Toronto CMS',
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 812 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },

  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
    },
  }),
  

  // ---------------------------------------------------------------------------
  // Collections  (content types that store multiple documents)
  // ---------------------------------------------------------------------------
  collections: [
    Users,       // CMS admin users
    Media,       // Images / files  →  stored in Cloudflare R2
    Pages,       // Flexible page builder (blocks-based)
    Programmes,  // Little Legends, Rising Stars, Elite Academy, Private
    Events,      // Camps, open days, tournaments
    Coaches,     // Staff profiles
    Testimonials,// Parent quotes
    FAQs,        // Question / answer pairs with category grouping
    Enquiries,   // Contact form submissions (no auth required to create)
  ],

  // ---------------------------------------------------------------------------
  // Globals  (singleton documents — one per site)
  // ---------------------------------------------------------------------------
  globals: [
    SiteSettings, // Site name, contact info, social links, SEO defaults
    Navigation,   // Header nav links + CTA button
  ],

  // ---------------------------------------------------------------------------
  // Rich-text editor  (Lexical)
  // ---------------------------------------------------------------------------
  editor: lexicalEditor(),

  // ---------------------------------------------------------------------------
  // Database  — Neon (serverless Postgres)
  // Set DATABASE_URI in your .env.local:
  //   DATABASE_URI=postgresql://user:password@host/db?sslmode=require
  // ---------------------------------------------------------------------------
  

  // ---------------------------------------------------------------------------
  // File storage  — Cloudflare R2 (S3-compatible)
  // Set in .env.local:
  //   R2_ACCESS_KEY_ID=...
  //   R2_SECRET_ACCESS_KEY=...
  //   R2_BUCKET=cricket-toronto-media
  //   R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
  //   R2_PUBLIC_URL=https://media.cricketoronto.ca   (optional custom domain)
  // ---------------------------------------------------------------------------
  // plugins: [
  //   s3Storage({
  //     collections: {
  //       media: true,
  //     },
  //     bucket: process.env.R2_BUCKET || 'cricket-toronto-media',
  //     config: {
  //       endpoint: process.env.R2_ENDPOINT,
  //       region: 'auto', // Cloudflare R2 uses "auto"
  //       credentials: {
  //         accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
  //         secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  //       },
  //     },
  //   }),
  // ],

  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.R2_BUCKET || "",
      config: {
        endpoint: process.env.R2_ENDPOINT,
        region: "auto",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
        },
      },
    }),
  ],

  // ---------------------------------------------------------------------------
  // Email (optional — Nodemailer for contact form notifications)
  // ---------------------------------------------------------------------------
  // email: nodemailerAdapter({
  //   defaultFromAddress: 'no-reply@cricketoronto.ca',
  //   defaultFromName: 'Cricket Toronto',
  //   transportOptions: {
  //     host: process.env.SMTP_HOST,
  //     port: 587,
  //     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  //   },
  // }),

  // ---------------------------------------------------------------------------
  // Image processing
  // ---------------------------------------------------------------------------
  sharp,

  // ---------------------------------------------------------------------------
  // TypeScript types output path
  // ---------------------------------------------------------------------------
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

})
