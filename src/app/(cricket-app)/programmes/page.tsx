import { notFound } from 'next/navigation'

import { CMSPage } from '@/components/cms-page'
import { getPageBySlug } from '@/lib/pages'

export default async function ProgrammesPage() {
  const page = await getPageBySlug('programmes')

  if (!page) {
    notFound()
  }

  return <CMSPage page={page} />
}
