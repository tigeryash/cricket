import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Shield, Award } from 'lucide-react'
import { findCollectionSafe, findGlobalSafe } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the passionate team behind Toronto\'s most trusted youth cricket academy. Cricket Canada-certified coaches with a mission to make cricket fun and accessible for every child.',
}

// Map icon slugs to Lucide components
const iconMap = {
  heart: Heart,
  target: Target,
  shield: Shield,
  award: Award,
} as const

// Static values (you could also move these to Site Settings)
const values = [
  { icon: 'heart', title: 'Fun First', desc: 'We believe children learn best when they\'re having fun. Every session is designed to be engaging and enjoyable.' },
  { icon: 'target', title: 'Individual Growth', desc: 'Every child is different. We track progress and tailor coaching to each player\'s development stage.' },
  { icon: 'shield', title: 'Safety Always', desc: 'All coaches are DBS-checked and First Aid certified. We follow strict safeguarding protocols.' },
  { icon: 'award', title: 'Excellence', desc: 'We aim for the highest standards in everything we do — coaching, communication, and community.' },
]

export default async function AboutPage() {
  const coaches = await findCollectionSafe({
    collection: 'coaches',
    sort: 'order',
    limit: 20,
  })

  // Fetch site settings for safeguarding contact
  const siteSettings = await findGlobalSafe('site-settings')

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 left-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)' }}>
            About Cricket Toronto
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Meet the passionate team behind Toronto&apos;s most trusted youth cricket academy.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Our Mission
              </span>
              <h2 className="mt-4 mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>
                Every Child Deserves the Chance to Play
              </h2>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                Cricket Toronto was born from a belief that cricket is for everyone. Founded in 2018 by James Okafor, we started with just 12 kids in a local park. Today, we coach over 500 young players across multiple venues in the Greater Toronto Area.
              </p>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                Our philosophy is simple: <strong>fun first, development always</strong>. We create an environment where every child — regardless of ability, background, or experience — feels welcome, safe, and excited to learn.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                Beyond the technical skills, we teach resilience, teamwork, and sportsmanship. Many of our players go on to represent school and club teams, but our greatest measure of success is a child who can&apos;t wait to come back next week.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-primary/10">
              {/* Placeholder — replace with Image from Payload media */}
              <div className="absolute inset-0 flex items-center justify-center text-primary/30 text-6xl font-bold">
                CT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Our Values
            </span>
            <h2 className="mt-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = iconMap[v.icon as keyof typeof iconMap] ?? Shield
              return (
                <div key={v.title} className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.1rem' }}>{v.title}</h3>
                  <p className="text-muted-foreground mt-2" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coaches — fetched from Payload */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Our Coaches
            </span>
            <h2 className="mt-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>
              Meet the Team
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto" style={{ fontSize: '1rem' }}>
              Every coach is Cricket Canada certified, DBS-checked, and passionate about developing young cricketers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach) => {
              const photoUrl =
                coach.photo && typeof coach.photo === 'object' && 'url' in coach.photo
                  ? (coach.photo as any).url
                  : null

              const initials = coach.name
                .split(' ')
                .map((n: string) => n[0])
                .join('')

              const certs: string[] = (coach.certifications || []).map(
                (c: any) => c.certification,
              )

              return (
                <div
                  key={coach.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-auto bg-primary/10 flex items-center justify-center shrink-0 relative">
                      {photoUrl ? (
                        <Image src={photoUrl} alt={coach.name} fill className="object-cover" />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem' }}>
                            {initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem' }}>{coach.name}</h3>
                      <p className="text-primary mb-3" style={{ fontSize: '0.85rem', fontWeight: 600 }}>{coach.title}</p>
                      <p className="text-muted-foreground mb-4" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{coach.bio}</p>
                      {certs.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {certs.map((cert) => (
                            <span key={cert} className="bg-primary/10 text-primary px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
                              {cert}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
                  Child Protection &amp; Safeguarding
                </h3>
                <p className="text-muted-foreground mt-2" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  The safety and wellbeing of every child is our absolute priority. All coaches undergo comprehensive background checks and are trained in child safeguarding. We follow Cricket Canada&apos;s safeguarding framework and have a dedicated Safeguarding Lead who can be contacted at{' '}
                  <a href={`mailto:${siteSettings?.safeguardingEmail ?? 'safeguarding@cricketoronto.ca'}`} className="text-primary hover:underline">
                    {siteSettings?.safeguardingEmail ?? 'safeguarding@cricketoronto.ca'}
                  </a>
                  . Parental consent is obtained for all photography. Our full safeguarding policy is available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
            Ready to Join Our Cricket Family?
          </h2>
          <p className="text-muted-foreground mt-3 mb-8" style={{ fontSize: '1rem' }}>
            Book a free trial session and let your child experience the Cricket Toronto difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            Book a Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
