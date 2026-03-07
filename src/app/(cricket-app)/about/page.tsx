import { notFound } from 'next/navigation'

import { CMSPage } from '@/components/cms-page'
import { getPageBySlug } from '@/lib/pages'

export default async function AboutPage() {
  const page = await getPageBySlug('about')

  if (!page) {
    notFound()
  }

  return <CMSPage page={page} />
}
