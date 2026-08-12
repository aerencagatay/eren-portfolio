// Component Imports
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Eyebrow from '@/components/shared/eyebrow/eyebrow'

// Data Imports
import { education, selectedAreasOfStudy, languages } from '@/content/cv'

const Education = () => {
  return (
    <section id='education' className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Background</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Where I learned the fundamentals</h2>
        </div>

        <div className='space-y-6'>
          {education.map(school => (
            <Card key={school.name} className='ring-border rounded-[24px] p-6 shadow-lg sm:p-8'>
              <div className='grid gap-4 lg:grid-cols-[280px_1fr] lg:gap-12'>
                <p className='text-muted-foreground font-mono text-sm'>{school.period}</p>
                <div>
                  <h3 className='text-xl font-medium md:text-2xl'>{school.name}</h3>
                  <p className='text-muted-foreground mt-2'>{school.degree}</p>
                  <p className='text-muted-foreground mt-1 text-sm'>{school.location}</p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {school.notes.map(note => (
                      <Badge
                        key={note}
                        variant='secondary'
                        className='text-foreground h-6 rounded-full bg-(--background-darker)'
                      >
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className='grid gap-8 lg:grid-cols-[1fr_320px]'>
          <div>
            <h3 className='text-lg font-medium'>Selected areas of study</h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              {selectedAreasOfStudy.map(area => (
                <Badge
                  key={area}
                  variant='secondary'
                  className='text-foreground h-7 rounded-full bg-(--background-darker) px-3 text-sm'
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium'>Languages</h3>
            <ul className='mt-4 divide-y'>
              {languages.map(language => (
                <li key={language.name} className='flex items-baseline justify-between gap-4 py-2.5'>
                  <span>{language.name}</span>
                  <span className='text-muted-foreground text-sm'>{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
