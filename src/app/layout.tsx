import type { ReactNode } from 'react'

import { Geist_Mono, Delicious_Handrawn } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import CustomCursor from '@/components/layout/custom-cursor'
import EdgeBlur from '@/components/layout/edge-blur'

import { cn } from '@/lib/utils'
import { profile, siteUrl } from '@/content/cv'

import './globals.css'

// `latin-ext` carries the Turkish glyphs (ğ, ı, ş, ç) this site needs.
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'latin-ext']
})

// Decorative only (the handwritten note) — latin is enough.
const deliciousHandrawn = Delicious_Handrawn({
  variable: '--font-delicious-handrawn',
  weight: '400',
  subsets: ['latin']
})

/**
 * Satoshi ships with the template as a local subset we cannot extend, so the
 * fallback list matters: any glyph it lacks (Turkish ğ/ı/ş are the risk) is
 * drawn from the next family in the stack instead of showing tofu.
 */
const satoshi = localFont({
  variable: '--font-satoshi',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
  src: [
    { path: '../assets/fonts/satoshi/satoshi-400.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/satoshi/satoshi-500.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/satoshi/satoshi-700.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/satoshi/satoshi-900.woff2', weight: '900', style: 'normal' }
  ]
})

const title = `${profile.fullName} — ${profile.role}`

const description =
  'Ahmet Eren Çağatay — Software Engineer at ATP Tradesoft building data-intensive, business-critical software for capital markets. B.S. in Computer Science Engineering with a Minor in Finance from Sabancı University. Python, SQL, C#/.NET, machine learning and anomaly detection.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s — ${profile.fullName}`,
    default: title
  },
  description,
  robots: 'index,follow',
  keywords: [
    'Ahmet Eren Çağatay',
    'Software Engineer',
    'Fintech',
    'Capital Markets',
    'Backend Development',
    'Machine Learning',
    'Anomaly Detection',
    'Deep Learning',
    'Python',
    'SQL',
    'C#',
    '.NET',
    'PyTorch',
    'Sabancı University',
    'ATP Tradesoft',
    'İstanbul'
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: '48x48', type: 'image/x-icon' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: {
    title: {
      template: `%s — ${profile.fullName}`,
      default: title
    },
    description,
    type: 'profile',
    siteName: profile.fullName,
    locale: 'en_US',
    url: siteUrl,
    images: [{ url: profile.photo, alt: profile.fullName }]
  },
  twitter: {
    card: 'summary',
    title: {
      template: `%s — ${profile.fullName}`,
      default: title
    },
    description,
    images: [profile.photo]
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        geistMono.variable,
        satoshi.variable,
        deliciousHandrawn.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
          <EdgeBlur />
          <Toaster />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
