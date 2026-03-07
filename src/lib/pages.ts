import { draftMode } from 'next/headers'

import { getPayloadClient } from '@/utilities/getPayload'

type PageDoc = {
  slug: string
  title: string
  navLabel?: string | null
  showInNav?: boolean | null
  hero?: {
    title?: string | null
    description?: string | null
    image?:
      | {
          url?: string | null
        }
      | string
      | null
  } | null
  sections?: Array<{
    id?: string | null
    heading: string
    body: string
    ctaLabel?: string | null
    ctaHref?: string | null
  }> | null
}

export const getPageBySlug = async (slug: string) => {
  const payload = await getPayloadClient()
  const { isEnabled } = await draftMode()

  const pages = await payload.find({
    collection: 'pages',
    draft: isEnabled,
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return (pages.docs[0] as PageDoc | undefined) || null
}

export const getNavbarPages = async () => {
  const payload = await getPayloadClient()

  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
    depth: 0,
    sort: 'slug',
    where: {
      showInNav: {
        equals: true,
      },
    },
  })

  return pages.docs.map((doc) => {
    const page = doc as PageDoc
    const href = page.slug === 'home' ? '/' : `/${page.slug}`

    return {
      href,
      label: page.navLabel || page.title,
    }
  })
}