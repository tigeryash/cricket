import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface MediaObject {
  url?: string | null
  alt?: string | null
}

interface LexicalNode {
  type: string
  text?: string
  format?: number
  tag?: string
  listType?: string
  children?: LexicalNode[]
  fields?: { url?: string }
}

/**
 * Very simple Lexical JSON → React renderer.
 * Handles the most common nodes: paragraph, heading, list, listitem, link, text.
 */
function renderNode(node: LexicalNode, index: number): React.ReactNode {
  // Text leaf
  if (node.type === 'text') {
    let el: React.ReactNode = node.text ?? ''
    const fmt = node.format ?? 0
    if (fmt & 1) el = <strong key={`b${index}`}>{el}</strong>
    if (fmt & 2) el = <em key={`i${index}`}>{el}</em>
    if (fmt & 8) el = <u key={`u${index}`}>{el}</u>
    if (fmt & 16)
      el = (
        <code key={`code${index}`} className="bg-gray-100 px-1 rounded text-sm">
          {el}
        </code>
      )
    return <span key={index}>{el}</span>
  }

  const children = node.children?.map((child, i) => renderNode(child, i))

  switch (node.type) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4 text-muted-foreground" style={{ lineHeight: 1.7, fontSize: '0.975rem' }}>
          {children}
        </p>
      )
    case 'heading': {
      const Tag = (node.tag ?? 'h3') as keyof React.JSX.IntrinsicElements
      return (
        <Tag
          key={index}
          className="mt-4 mb-2"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
        >
          {children}
        </Tag>
      )
    }
    case 'list':
      return node.listType === 'bullet' ? (
        <ul key={index} className="list-disc list-inside mb-4 space-y-1 text-muted-foreground" style={{ fontSize: '0.95rem' }}>
          {children}
        </ul>
      ) : (
        <ol key={index} className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground" style={{ fontSize: '0.95rem' }}>
          {children}
        </ol>
      )
    case 'listitem':
      return <li key={index}>{children}</li>
    case 'link':
      return (
        <a key={index} href={node.fields?.url ?? '#'} className="text-primary underline hover:no-underline">
          {children}
        </a>
      )
    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
          {children}
        </blockquote>
      )
    case 'linebreak':
      return <br key={index} />
    default:
      return <span key={index}>{children}</span>
  }
}

function LexicalContent({ content }: { content: unknown }) {
  if (!content || typeof content !== 'object') return null
  const root = (content as { root?: { children?: LexicalNode[] } }).root
  if (!root?.children) return null
  return <>{root.children.map((node, i) => renderNode(node, i))}</>
}

interface ImageContentBlockProps {
  imagePosition?: 'left' | 'right' | null
  image?: MediaObject | string | null
  badgeText?: string | null
  overlayBadge?: { number?: string | null; label?: string | null } | null
  heading: string
  body?: unknown
  buttonLabel?: string | null
  buttonLink?: string | null
  [key: string]: unknown
}

export function ImageContentBlock({
  imagePosition = 'left',
  image,
  badgeText,
  overlayBadge,
  heading,
  body,
  buttonLabel,
  buttonLink,
}: ImageContentBlockProps) {
  const imgUrl = typeof image === 'object' && image?.url ? image.url : null
  const imgAlt = typeof image === 'object' && image?.alt ? image.alt : heading

  const imageEl = (
    <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl">
      {imgUrl ? (
        <Image src={imgUrl} alt={imgAlt ?? ''} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      ) : (
        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
          <span
            className="text-primary/30"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '4rem' }}
          >
            CT
          </span>
        </div>
      )}

      {/* Overlay badge */}
      {overlayBadge?.number && (
        <div className="absolute bottom-5 right-5 bg-gold text-footer-bg rounded-2xl px-4 py-3 text-center shadow-xl">
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.6rem',
              lineHeight: 1,
            }}
          >
            {overlayBadge.number}
          </div>
          {overlayBadge.label && (
            <div style={{ fontSize: '0.7rem', fontWeight: 600, marginTop: '3px' }}>
              {overlayBadge.label}
            </div>
          )}
        </div>
      )}
    </div>
  )

  const contentEl = (
    <div>
      {badgeText && (
        <span
          className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full"
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
          }}
        >
          {badgeText}
        </span>
      )}

      <h2
        className="mt-4 mb-5"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
        }}
      >
        {heading}
      </h2>

      {body ? <LexicalContent content={body} /> : null}

      {buttonLabel && buttonLink && (
        <Link
          href={buttonLink}
          className="mt-5 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all hover:gap-3"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
        >
          {buttonLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageEl}
              {contentEl}
            </>
          ) : (
            <>
              {contentEl}
              {imageEl}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
