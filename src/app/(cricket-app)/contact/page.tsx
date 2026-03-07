import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'
import { findGlobalSafe } from '@/lib/payload'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Book a free trial session or get in touch with Cricket Toronto. Call (416) 555-0123 or fill in our online enquiry form.',
}

export default async function ContactPage() {
  const siteSettings = await findGlobalSafe('site-settings')

  const contactItems = [
    { icon: MapPin, label: 'Location', value: siteSettings?.address ?? 'Serving Toronto & the GTA\nMain venue: Sunnybrook Park' },
    { icon: Phone, label: 'Phone', value: siteSettings?.phone ?? '(416) 555-0123', href: `tel:${(siteSettings?.phone ?? '').replace(/\D/g, '')}` },
    { icon: Mail, label: 'Email', value: siteSettings?.email ?? 'info@cricketoronto.ca', href: `mailto:${siteSettings?.email ?? 'info@cricketoronto.ca'}` },
    { icon: Clock, label: 'Office Hours', value: siteSettings?.officeHours ?? 'Mon–Fri: 9 AM – 6 PM\nSat: 8 AM – 3 PM' },
    ...(siteSettings?.instagramUrl ? [{ icon: Instagram, label: 'Instagram', value: '@cricketoronto', href: siteSettings.instagramUrl }] : []),
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Get in Touch
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Ready to book a trial? Have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem' }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground" style={{ fontSize: '0.8rem', fontWeight: 500 }}>{label}</div>
                      {href ? (
                        <a href={href} className="hover:text-primary transition-colors whitespace-pre-line" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                          {value}
                        </a>
                      ) : (
                        <div className="whitespace-pre-line" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-surface-1 rounded-2xl">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.05rem' }}>Prefer to Call?</h3>
                <p className="text-muted-foreground mt-2" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  We&apos;re happy to chat! Call us at{' '}
                  <a href={`tel:${(siteSettings?.phone ?? '4165550123').replace(/\D/g, '')}`} className="text-primary hover:underline" style={{ fontWeight: 600 }}>
                    {siteSettings?.phone ?? '(416) 555-0123'}
                  </a>{' '}
                  during office hours, or leave a voicemail anytime and we&apos;ll call you back within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form — client component (handles submit + state) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl overflow-hidden bg-gray-200 h-75 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.1rem' }}>Sunnybrook Park, Toronto</p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: '0.9rem' }}>1132 Leslie St, North York, ON M3C 2J6</p>
              <a
                href="https://maps.google.com/?q=Sunnybrook+Park+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary hover:underline"
                style={{ fontWeight: 600, fontSize: '0.9rem' }}
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
