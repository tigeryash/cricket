/**
 * RichTextBlock — renders a Payload Lexical rich-text field.
 *
 * The `content` prop is the raw Lexical JSON object stored by Payload.
 * This serialiser handles: paragraph, heading, list/listitem, link,
 * quote, code, linebreak and formatted text (bold / italic / underline / code).
 *
 * For a full production serialiser, use `@payloadcms/richtext-lexical/react`
 * once it stabilises, or the `convertLexicalToHTML` utility.
 */

interface LexicalNode {
  type: string
  text?: string
  format?: number
  tag?: string
  listType?: string
  language?: string
  children?: LexicalNode[]
  fields?: { url?: string; newTab?: boolean }
}

function renderNode(node: LexicalNode, index: number): React.ReactNode {
  if (node.type === 'text') {
    let el: React.ReactNode = node.text ?? ''
    const fmt = node.format ?? 0
    if (fmt & 1) el = <strong key={`b-${index}`}>{el}</strong>
    if (fmt & 2) el = <em key={`i-${index}`}>{el}</em>
    if (fmt & 8) el = <u key={`u-${index}`}>{el}</u>
    if (fmt & 16)
      el = (
        <code
          key={`code-${index}`}
          className="bg-gray-100 text-primary/80 px-1.5 py-0.5 rounded"
          style={{ fontSize: '0.875em' }}
        >
          {el}
        </code>
      )
    return el
  }

  const children = node.children?.map((child, i) => renderNode(child, i))

  switch (node.type) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4" style={{ lineHeight: 1.75 }}>
          {children}
        </p>
      )
    case 'heading': {
      const tag = (node.tag ?? 'h2') as keyof React.JSX.IntrinsicElements
      const sizes: Record<string, string> = {
        h1: '2rem', h2: '1.6rem', h3: '1.3rem', h4: '1.1rem',
      }
      const Tag = tag
      return (
        <Tag
          key={index}
          className="mt-8 mb-3"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: sizes[tag] ?? '1.25rem' }}
        >
          {children}
        </Tag>
      )
    }
    case 'list':
      return node.listType === 'check' || node.listType === 'bullet' ? (
        <ul key={index} className="list-disc list-outside pl-5 mb-4 space-y-1.5">
          {children}
        </ul>
      ) : (
        <ol key={index} className="list-decimal list-outside pl-5 mb-4 space-y-1.5">
          {children}
        </ol>
      )
    case 'listitem':
      return (
        <li key={index} style={{ lineHeight: 1.7 }}>
          {children}
        </li>
      )
    case 'link':
      return (
        <a
          key={index}
          href={node.fields?.url ?? '#'}
          target={node.fields?.newTab ? '_blank' : undefined}
          rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          {children}
        </a>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="border-l-4 border-primary pl-4 italic my-5 text-muted-foreground"
          style={{ lineHeight: 1.75 }}
        >
          {children}
        </blockquote>
      )
    case 'code':
      return (
        <pre
          key={index}
          className="bg-gray-900 text-gray-100 rounded-xl p-4 my-4 overflow-x-auto"
          style={{ fontSize: '0.875rem' }}
        >
          <code>{children}</code>
        </pre>
      )
    case 'horizontalrule':
      return <hr key={index} className="my-6 border-gray-200" />
    case 'linebreak':
      return <br key={index} />
    default:
      return children ? <span key={index}>{children}</span> : null
  }
}

interface RichTextBlockProps {
  content?: unknown
  width?: 'prose' | 'full' | null
  [key: string]: unknown
}

export function RichTextBlock({ content, width = 'prose' }: RichTextBlockProps) {
  if (!content || typeof content !== 'object') return null

  const root = (content as { root?: { children?: LexicalNode[] } }).root
  if (!root?.children) return null

  const maxW = width === 'full' ? 'max-w-7xl' : 'max-w-3xl'

  return (
    <section className="py-16 bg-white">
      <div className={`${maxW} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div
          className="text-foreground"
          style={{ fontSize: '1rem', lineHeight: 1.75 }}
        >
          {root.children.map((node, i) => renderNode(node, i))}
        </div>
      </div>
    </section>
  )
}
