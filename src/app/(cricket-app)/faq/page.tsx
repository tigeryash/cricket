import { notFound } from 'next/navigation'

import { CMSPage } from '@/components/cms-page'
import { getPageBySlug } from '@/lib/pages'

export default async function FAQPage() {
  const page = await getPageBySlug('faq')

  if (!page) {
    notFound()
  }

  return <CMSPage page={page} />
}
