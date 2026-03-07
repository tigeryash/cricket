import { notFound } from 'next/navigation'

import { CMSPage } from '@/components/cms-page'
import { getPageBySlug } from '@/lib/pages'

export default async function EventsPage() {
  const page = await getPageBySlug('events')

  if (!page) {
    notFound()
  }

  return <CMSPage page={page} />
}
