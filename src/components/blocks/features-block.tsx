import {
  Shield,
  Trophy,
  Users,
  Star,
  Heart,
  Target,
  Award,
  CheckCircle,
  Zap,
  Globe,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  trophy: Trophy,
  users: Users,
  star: Star,
  heart: Heart,
  target: Target,
  award: Award,
  check: CheckCircle,
  zap: Zap,
  globe: Globe,
}

interface Feature {
  id?: string | null
  icon?: string | null
  title: string
  description: string
}

interface FeaturesBlockProps {
  eyebrow?: string | null
  heading?: string | null
  subheading?: string | null
  features?: Feature[] | null
  [key: string]: unknown
}

export function FeaturesBlock({ eyebrow, heading, subheading, features = [] }: FeaturesBlockProps) {
  const items = features ?? []

  const colClass =
    items.length <= 2
      ? 'sm:grid-cols-2'
      : items.length === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {(eyebrow || heading || subheading) && (
          <div className="text-center mb-14">
            {eyebrow && (
              <span
                className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                }}
              >
                {eyebrow}
              </span>
            )}

            {heading && (
              <h2
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                }}
              >
                {heading}
              </h2>
            )}

            {subheading && (
              <p
                className="text-muted-foreground mt-3 max-w-2xl mx-auto"
                style={{ fontSize: '1rem', lineHeight: 1.7 }}
              >
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Feature cards */}
        <div className={`grid grid-cols-1 ${colClass} gap-6`}>
          {items.map((feature, i) => {
            const Icon = iconMap[feature.icon ?? ''] ?? Star
            return (
              <div
                key={feature.id ?? i}
                className="group bg-surface-1 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.05rem' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: '0.875rem', lineHeight: 1.65 }}
                >
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
