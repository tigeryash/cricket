/**
 * getPayloadClient — returns a singleton Payload instance.
 *
 * Call this in every server component / route handler that needs to
 * read from or write to the Payload collections and globals.
 *
 * Usage:
 *   const payload = await getPayloadClient()
 *   const { docs } = await payload.find({ collection: 'coaches', ... })
 */
import type { Config } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const getPayloadClient = () => getPayload({ config: configPromise })

type CollectionSlug = keyof Config['collections']
type GlobalSlug = keyof Config['globals']

type FindCollectionOptions<TSlug extends CollectionSlug> = {
	collection: TSlug
	depth?: number
	draft?: boolean
	limit?: number
	sort?: string
	where?: Record<string, unknown>
}

export async function findCollectionSafe<TSlug extends CollectionSlug>(
	options: FindCollectionOptions<TSlug>,
): Promise<Config['collections'][TSlug][]> {
	const payload = await getPayloadClient()

	try {
		const result = await payload.find(options as never)
		return result.docs as Config['collections'][TSlug][]
	} catch (error) {
		console.warn(`Could not fetch collection "${options.collection}":`, error)
		return []
	}
}

export async function findGlobalSafe<TSlug extends GlobalSlug>(slug: TSlug): Promise<Config['globals'][TSlug] | null> {
	const payload = await getPayloadClient()

	try {
		return await payload.findGlobal({ slug })
	} catch (error) {
		console.warn(`Could not fetch global "${slug}":`, error)
		return null
	}
}
