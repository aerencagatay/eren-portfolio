import type { Metadata } from 'next'

// Component Imports
import ContactHero from '@/components/contact/contact-hero/contact-hero'
import Projects from '@/components/home/projects/projects'

// Data Imports
import { profile, siteUrl } from '@/content/cv'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${profile.fullName} — ${profile.role} based in ${profile.location}.`,
  alternates: {
    canonical: `${siteUrl}/contact`
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteUrl}/contact#webpage`,
  name: 'Contact',
  url: `${siteUrl}/contact`,
  mainEntity: {
    '@type': 'Person',
    name: profile.fullName,
    jobTitle: profile.role,
    email: profile.email,
    sameAs: [profile.linkedin, profile.github]
  }
}

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <Projects />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default ContactPage
