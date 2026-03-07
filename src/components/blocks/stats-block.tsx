interface Stat {
  id?: string | null
  number: string
  label: string
}

interface StatsBlockProps {
  stats?: Stat[] | null
  [key: string]: unknown
}

export function StatsBlock({ stats = [] }: StatsBlockProps) {
  const items = stats ?? []

  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 gap-8 ${
            items.length <= 3
              ? 'md:grid-cols-3'
              : items.length === 4
              ? 'md:grid-cols-4'
              : 'md:grid-cols-3 lg:grid-cols-6'
          }`}
        >
          {items.map((stat, i) => (
            <div key={stat.id ?? i} className="text-center">
              {/* Decorative divider on left (except first item) */}
              <div className="relative">
                <div
                  className="text-[#d4a017]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-white/70 mt-2"
                  style={{ fontSize: '0.85rem', lineHeight: 1.4 }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
