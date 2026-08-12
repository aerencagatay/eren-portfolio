// Component Imports
import Hero from '@/components/home/hero/hero'
import About from '@/components/home/about/about'
import Projects from '@/components/home/projects/projects'
import Experience from '@/components/home/experience/experience'
import Skills from '@/components/home/skills/skills'
import Achievements from '@/components/home/achievements/achievements'
import Education from '@/components/home/education/education'

// Data Imports
import { profile, siteUrl } from '@/content/cv'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: profile.fullName,
      description: profile.tagline,
      url: siteUrl,
      inLanguage: 'en-US'
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: profile.fullName,
      jobTitle: profile.role,
      email: profile.email,
      url: siteUrl,
      image: `${siteUrl}${profile.photo}`,
      sameAs: [profile.linkedin, profile.github],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İstanbul',
        addressCountry: 'TR'
      },
      worksFor: { '@type': 'Organization', name: 'ATP Tradesoft' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Sabancı University' }
    }
  ]
}

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Education />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default Home
