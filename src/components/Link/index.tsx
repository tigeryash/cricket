import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page } from '@/payload-types'

type LinkAppearance = 'default' | 'ghost' | 'inline' | 'link' | 'outline'
type LinkSize = 'default' | 'sm' | 'lg' | 'clear'

const appearanceClasses: Record<Exclude<LinkAppearance, 'inline'>, string> = {
  default: 'inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-white transition-colors hover:bg-primary/90',
  outline: 'inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-primary transition-colors hover:bg-primary/5',
  ghost: 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-primary transition-colors hover:bg-primary/10',
  link: 'inline-flex items-center justify-center text-primary underline-offset-4 transition-colors hover:underline',
}

const sizeClasses: Record<LinkSize, string> = {
  default: '',
  sm: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  clear: 'p-0',
}

type CMSLinkType = {
  appearance?: LinkAppearance
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'programmes' | 'events' | 'coaches' | 'testimonials' | 'faqs'
    value: Page | { slug?: string | null } | string | number
  } | null
  size?: LinkSize | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps || 'default'
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <Link
      className={cn(appearanceClasses[appearance], sizeClasses[size], className)}
      href={href || url || ''}
      {...newTabProps}
    >
      {label && label}
      {children && children}
    </Link>
  )
}
