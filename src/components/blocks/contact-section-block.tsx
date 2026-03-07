import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'
import { findGlobalSafe } from '@/lib/payload'
import { ContactForm } from '@/components/contact-form'

interface ContactSectionBlockProps {
  heading?: string | null
  formHeading?: string | null
  formSubheading?: string | null
  showMap?: boolean | null
  [key: string]: unknown
}

/**
 * ContactSectionBlock — async server component.
 * Fetches SiteSettings for contact info; renders the enquiry form.
 */
export async function ContactSectionBlock({
  heading = 'Contact Information',
  formHeading,
  formSubheading,
  showMap = true,
}: ContactSectionBlockProps) {
  const siteSettings = await findGlobalSafe('site-settings')

  const contactItems = [
    {
      icon: MapPin,
      label: 'Location',
      value: siteSettings?.address ?? 'Sunnybrook Park, Toronto\n1132 Leslie St, North York, ON M3C 2J6',
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteSettings?.phone ?? '(416) 555-0123',
      href: `tel:${(siteSettings?.phone ?? '4165550123').replace(/\D/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteSettings?.email ?? 'info@cricketoronto.ca',
      href: `mailto:${siteSettings?.email ?? 'info@cricketoronto.ca'}`,
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: siteSettings?.officeHours ?? 'Mon–Fri: 9 AM – 6 PM · Sat: 8 AM – 3 PM',
      href: null,
    },
    ...(siteSettings?.instagramUrl
      ? [
          {
            icon: Instagram,
            label: 'Instagram',
            value: '@cricketoronto',
            href: siteSettings.instagramUrl,
          },
        ]
      : []),
  ]

  return (
    <div>
      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <div className="lg:col-span-2">
              <h2
                className="mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem' }}
              >
                {heading}
              </h2>

              <div className="space-y-6">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div
                        className="text-muted-foreground"
                        style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="hover:text-primary transition-colors whitespace-pre-line"
                          style={{ fontSize: '0.95rem', fontWeight: 500 }}
                        >
                          {value}
                        </a>
                      ) : (
                        <div
                          className="whitespace-pre-line"
                          style={{ fontSize: '0.95rem', fontWeight: 500 }}
                        >
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call-us box */}
              <div className="mt-10 p-6 bg-surface-1 rounded-2xl border border-gray-100">
                <h3
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.05rem' }}
                >
                  Prefer to Call?
                </h3>
                <p
                  className="text-muted-foreground mt-2"
                  style={{ fontSize: '0.9rem', lineHeight: 1.65 }}
                >
                  We&apos;re happy to chat! Call us at{' '}
                  <a
                    href={`tel:${(siteSettings?.phone ?? '4165550123').replace(/\D/g, '')}`}
                    className="text-primary hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    {siteSettings?.phone ?? '(416) 555-0123'}
                  </a>{' '}
                  during office hours, or leave a voicemail and we&apos;ll call back within 24 hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm formHeading={formHeading} formSubheading={formSubheading} />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      {showMap && (
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="rounded-2xl overflow-hidden bg-gray-200 h-75 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.1rem' }}>
                  Sunnybrook Park, Toronto
                </p>
                <p className="text-muted-foreground mt-1" style={{ fontSize: '0.9rem' }}>
                  1132 Leslie St, North York, ON M3C 2J6
                </p>
                <a
                  href="https://maps.google.com/?q=Sunnybrook+Park+Toronto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:underline"
                  style={{ fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
