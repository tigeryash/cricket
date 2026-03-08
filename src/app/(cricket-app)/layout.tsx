import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { findGlobalSafe } from '../../lib/payload'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import '@/styles/globals.css'

// ---------------------------------------------------------------------------
// Fonts
// ---------------------------------------------------------------------------
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// ---------------------------------------------------------------------------
// Default metadata (overridden per page)
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    template: '%s | Cricket Toronto',
    default: 'Cricket Toronto — Youth Cricket Academy',
  },
  description:
    'Professional, fun, and safe cricket coaching for children ages 5–16 across the Greater Toronto Area.',
  openGraph: {
    siteName: 'Cricket Toronto',
    type: 'website',
    locale: 'en_CA',
  },
}

// ---------------------------------------------------------------------------
// Root layout
// ---------------------------------------------------------------------------
export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [navigation, siteSettings] = await Promise.all([
    findGlobalSafe('navigation'),
    findGlobalSafe('site-settings'),
  ])

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <InitTheme />
      </head>
      <body>
        <Providers>
          <LivePreviewListener />

          {/* Announcement Banner */}
          {siteSettings?.announcementEnabled && siteSettings.announcementText && (
            <div className="bg-gold text-footer-bg text-center py-2 px-4 text-sm font-semibold">
              {siteSettings.announcementLink ? (
                <a href={siteSettings.announcementLink} className="hover:underline">
                  {siteSettings.announcementText}
                </a>
              ) : (
                siteSettings.announcementText
              )}
            </div>
          )}

          <Navbar navigation={navigation} siteSettings={siteSettings} />

          <main className="pt-16 md:pt-20">{children}</main>

          <Footer siteSettings={siteSettings} />
        </Providers>
      </body>
    </html>
  )
}
