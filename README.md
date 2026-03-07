This is a Next.js + Payload CMS project for the Cricket Toronto website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

Open [http://localhost:3000/admin](http://localhost:3000/admin) to manage content.

## CMS-driven Pages

The public routes are now CMS-backed through the `pages` collection in Payload.

- `/` maps to slug `home`
- `/about` maps to slug `about`
- `/programmes` maps to slug `programmes`
- `/events` maps to slug `events`
- `/faq` maps to slug `faq`
- `/contact` maps to slug `contact`

For each page, edit:

- `Hero` (title, description, optional image)
- `Sections` (heading, body, optional CTA label/link)
- `showInNav` and `navLabel` (controls navbar links)

Live preview refresh is enabled in the app layout via Payload's route refresh listener.

You can still customize UI components in `src/components`, but most page content should now be edited in Payload admin.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Regenerate Payload Types

After schema changes, regenerate types:

```bash
npm run payload:types
```
