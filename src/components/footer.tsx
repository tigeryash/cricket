import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import { NewsletterForm } from './news-letter-form'

interface FooterProps {
  siteSettings?: {
    siteName?: string | null
    tagline?: string | null
    footerAboutText?: string | null
    footerCopyright?: string | null
    newsletterHeading?: string | null
    newsletterSubtext?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    instagramUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
  } | null
}

const quickLinks = ['About', 'Programmes', 'Events', 'FAQ', 'Contact']

export function Footer({ siteSettings }: FooterProps) {
  const siteName = siteSettings?.siteName ?? 'Cricket Toronto'
  const aboutText =
    siteSettings?.footerAboutText ??
    'Building confident young cricketers across the GTA since 2018. Professional coaching in a safe, fun environment.'
  const copyright = siteSettings?.footerCopyright ?? `© ${new Date().getFullYear()} Cricket Toronto. All rights reserved.`
  const newsletterHeading = siteSettings?.newsletterHeading ?? 'Stay Updated'
  const newsletterSubtext = siteSettings?.newsletterSubtext ?? 'Get the latest news on programmes, events, and cricket tips.'
  const phone = siteSettings?.phone ?? '(416) 555-0123'
  const email = siteSettings?.email ?? 'info@cricketoronto.ca'
  const address = siteSettings?.address ?? 'Serving Toronto & the GTA'

  const socialLinks = [
    { Icon: Instagram, href: siteSettings?.instagramUrl },
    { Icon: Facebook, href: siteSettings?.facebookUrl },
    { Icon: Youtube, href: siteSettings?.youtubeUrl },
  ].filter((social): social is { Icon: typeof Instagram; href: string } => Boolean(social.href))

  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.125rem' }}>CT</span>
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem' }}>{siteName}</span>
            </div>
            <p className="text-white/60 mb-6" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
              {aboutText}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-white/60 hover:text-gold transition-colors"
                  style={{ fontSize: '0.875rem' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/60" style={{ fontSize: '0.875rem' }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{address.split('\n')[0]}</span>
              </div>
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors" style={{ fontSize: '0.875rem' }}>
                <Phone className="w-4 h-4 shrink-0" /> {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors" style={{ fontSize: '0.875rem' }}>
                <Mail className="w-4 h-4 shrink-0" /> {email}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{newsletterHeading}</h4>
            <p className="text-white/60 mb-4" style={{ fontSize: '0.875rem' }}>
              {newsletterSubtext}
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40" style={{ fontSize: '0.8rem' }}>{copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/60" style={{ fontSize: '0.8rem' }}>Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/60" style={{ fontSize: '0.8rem' }}>Terms & Conditions</a>
            <a href="#" className="text-white/40 hover:text-white/60" style={{ fontSize: '0.8rem' }}>Safeguarding</a>
          </div>
        </div>
      </div>
    </footer>
  )
}