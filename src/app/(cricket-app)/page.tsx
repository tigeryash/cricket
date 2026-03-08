import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { findCollectionSafe } from '../../lib/payload'
import { RenderBlocks } from '../../components/blocks/render-block'

export const metadata: Metadata = {
  title: 'Cricket Toronto — Toronto\'s #1 Youth Cricket Academy',
  description:
    'Professional, fun, and safe cricket coaching for children ages 5–16. Trusted by over 500 families across the GTA. Book a free trial today.',
}

/**
 * Home page — content is fully driven by the "home" Page document in Payload.
 * Edit sections in the CMS at /admin → Pages → Home.
 */
export default async function HomePage() {
  const docs = await findCollectionSafe({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  const page = docs[0]

  if (!page) {
    notFound()
  }

  return <RenderBlocks blocks={page.layout} />
}
