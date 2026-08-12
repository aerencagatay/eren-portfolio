// Component Imports
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Eyebrow from '@/components/shared/eyebrow/eyebrow'

// Data Imports
import { projects } from '@/content/cv'

const Projects = () => {
  return (
    <section id='projects' className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>The projects that taught me the most</h2>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          {projects.map(project => (
            <Card
              key={project.title}
              className='ring-border flex h-full flex-col gap-0 overflow-hidden rounded-[24px] p-6 shadow-lg sm:p-8'
            >
              <div className='flex flex-wrap items-center gap-2.5'>
                <Badge variant='outline' className='border-accent/40 text-accent rounded-full'>
                  {project.badge}
                </Badge>
                {project.period && (
                  <Badge
                    variant='outline'
                    className='rounded-full border-(--background-darker) bg-(--background-darker)'
                  >
                    {project.period}
                  </Badge>
                )}
              </div>

              <h3 className='mt-4 text-xl font-medium md:text-2xl'>{project.title}</h3>

              <ul className='text-muted-foreground mt-5 flex-1 space-y-2.5'>
                {project.bullets.map(bullet => (
                  <li key={bullet} className='flex gap-2.5'>
                    <span className='bg-accent/60 mt-2.5 h-px w-3 shrink-0' />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-7 flex flex-wrap gap-2 border-t pt-5'>
                {project.tech.map(tech => (
                  <Badge
                    key={tech}
                    variant='secondary'
                    className='text-foreground h-5.5 rounded-full bg-(--background-darker)'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
