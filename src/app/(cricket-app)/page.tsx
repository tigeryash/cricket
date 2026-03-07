import { notFound } from 'next/navigation'

import { CMSPage } from '@/components/cms-page'
import { getPageBySlug } from '@/lib/pages'

export default async function Page() {
  const page = await getPageBySlug('home')

  if (!page) {
    notFound()
  }

  return <CMSPage page={page} />
}
