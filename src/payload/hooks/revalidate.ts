import 'server-only'
import { revalidatePath } from 'next/cache'

const frontendPaths = ['/', '/about', '/programmes', '/events', '/faq', '/contact'] as const

const pathFromSlug = (slug?: string | null) => {
  if (!slug) return null
  return slug === 'home' ? '/' : `/${slug}`
}

const revalidatePaths = (paths: Array<string | null | undefined>) => {
  const uniquePaths = new Set(paths.filter((path): path is string => Boolean(path)))

  for (const path of uniquePaths) {
    revalidatePath(path)
  }
}

export const revalidateAllFrontendPaths = async () => {
  revalidatePath('/', 'layout')
  revalidatePaths([...frontendPaths])
}

export const revalidatePageBySlug = async (slug?: string | null) => {
  const path = pathFromSlug(slug)

  if (!path) return

  revalidatePaths([path])
}

export const revalidateGlobal = async (slug: string) => {
  void slug
  revalidatePath('/', 'layout')
  revalidatePaths([...frontendPaths])
}