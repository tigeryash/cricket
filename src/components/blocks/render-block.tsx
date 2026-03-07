import React from 'react'
import { HeroBlock } from './hero-block'
import { StatsBlock } from './stats-block'
import { FeaturesBlock } from './features-block'
import { ProgrammesPreviewBlock } from './programme-preview-block'
import { ImageContentBlock } from './image-content-block'
import { EventBannerBlock } from './event-banner-block'
import { TestimonialsBlock } from './testimonials-block'
import { CTABlock } from './cta-block'
import { RichTextBlock } from './rich-text-block'

// Map Payload block slugs to React components
const blockComponents: Record<string, React.ComponentType<any>> = {
  hero: HeroBlock,
  stats: StatsBlock,
  features: FeaturesBlock,
  'programmes-preview': ProgrammesPreviewBlock,
  'image-content': ImageContentBlock,
  'event-banner': EventBannerBlock,
  testimonials: TestimonialsBlock,
  cta: CTABlock,
  'rich-text': RichTextBlock,
}

interface RenderBlocksProps {
  blocks: Array<{ blockType: string; [key: string]: unknown }> | null | undefined
}

/**
 * RenderBlocks — iterates over the Payload blocks array and renders the
 * matching React component for each block.
 */
export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        const BlockComponent = blockComponents[block.blockType]

        if (!BlockComponent) {
          // Unknown block type — skip silently in production, warn in dev
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`[RenderBlocks] No component registered for block type: "${block.blockType}"`)
          }
          return null
        }

        return <BlockComponent key={`${block.blockType}-${i}`} {...block} />
      })}
    </>
  )
}
