import { CollectionSlug } from 'payload'

const collectionPathMap: Partial<Record<CollectionSlug, (slug: string) => string>> = {
  pages: (slug) => (slug === 'home' ? '/' : `/${slug}`),
  programmes: () => '/programmes',
  events: () => '/events',
  coaches: () => '/about',
  testimonials: () => '/',
  faqs: () => '/faq',
}

type Props = {
  collection: keyof typeof collectionPathMap
  slug: string
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  // Allow empty strings, e.g. for the homepage
  if (slug === undefined || slug === null) {
    return null
  }

  const resolvePath = collectionPathMap[collection]

  if (!resolvePath) {
    return null
  }

  const path = resolvePath(slug)

  const encodedParams = new URLSearchParams({
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
