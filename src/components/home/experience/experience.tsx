// Component Imports
import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import Timeline from '@/components/ui/timeline'
import ExperienceTimelineItem from './experience-timeline-item'

// Data Imports
import { experience, volunteering } from '@/content/cv'

/* Professional roles first, then the volunteering entry, on one timeline. */
const ENTRIES = [
  ...experience.map(role => ({
    monogram: role.company
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase(),
    company: role.company,
    role: role.title,
    location: role.location,
    period: role.period,
    status: role.current ? { text: '· Present', tone: 'positive' as const } : undefined,
    stack: role.tech,
    bullets: role.bullets
  })),
  ...volunteering.map(entry => ({
    monogram: 'CIP',
    company: entry.title,
    role: entry.role,
    location: 'Sabancı University',
    period: entry.period,
    status: undefined,
    stack: ['Leadership', 'Social Impact', 'Team Coordination'],
    bullets: entry.bullets
  }))
]

const Experience = () => {
  return (
    <section id='experience' className='min-w-0 border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Experience</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Where I work and what I have shipped</h2>
        </div>

        <Timeline
          data={ENTRIES.map((entry, index) => ({
            index: String(index + 1).padStart(2, '0'),
            content: <ExperienceTimelineItem {...entry} />
          }))}
        />
      </div>
    </section>
  )
}

export default Experience
