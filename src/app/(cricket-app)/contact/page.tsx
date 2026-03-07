import { notFound } from 'next/navigation'

import { CMSPage } from '@/components/cms-page'
import { getPageBySlug } from '@/lib/pages'

export default async function ContactPage() {
  const page = await getPageBySlug('contact')

  if (!page) {
    notFound()
  }

  return <CMSPage page={page} />
}
