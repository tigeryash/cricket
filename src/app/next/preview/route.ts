import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload, type PayloadRequest } from 'payload'

export async function GET(req: Request): Promise<Response> {
  const payload = await getPayload({ config: configPromise })
  const { searchParams } = new URL(req.url)

  const path = searchParams.get('path')
  const previewSecret = searchParams.get('previewSecret')

  if (previewSecret !== (process.env.PREVIEW_SECRET || '')) {
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  if (!path) {
    return new Response('Missing path', { status: 404 })
  }

  if (!path.startsWith('/')) {
    return new Response('This endpoint can only be used for relative previews', {
      status: 400,
    })
  }

  let user = null

  try {
    user = await payload.auth({
      headers: req.headers,
      req: req as PayloadRequest,
    })
  } catch (error) {
    payload.logger.error({ err: error }, 'Error verifying token for preview')
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  if (!user) {
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(path)
}