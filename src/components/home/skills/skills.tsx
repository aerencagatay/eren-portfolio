// Component Imports
import { Badge } from '@/components/ui/badge'
import Eyebrow from '@/components/shared/eyebrow/eyebrow'

// Data Imports
import { skills } from '@/content/cv'

const Skills = () => {
  return (
    <section id='skills' className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Toolkit</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>What I build with</h2>
        </div>

        <div className='divide-y'>
          {skills.map(group => (
            <div key={group.label} className='grid gap-4 py-6 first:pt-0 last:pb-0 lg:grid-cols-[280px_1fr] lg:gap-12'>
              <h3 className='text-lg font-medium'>{group.label}</h3>
              <div className='flex flex-wrap gap-2'>
                {group.items.map(item => (
                  <Badge
                    key={item}
                    variant='secondary'
                    className='text-foreground h-7 rounded-full bg-(--background-darker) px-3 text-sm'
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
