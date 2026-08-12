// Component Imports
import { Badge } from '@/components/ui/badge'

// Util Imports
import { asset, cn } from '@/lib/utils'

type ExperienceTimelineItemProps = {
  monogram: string
  company: string
  role: string
  location: string
  period: string
  status?: { text: string; tone: 'positive' | 'accent' }
  stack: string[]
  bullets: string[]
}

const ExperienceTimelineItem = ({
  monogram,
  company,
  role,
  location,
  period,
  status,
  stack,
  bullets
}: ExperienceTimelineItemProps) => {
  return (
    <div className='space-y-4'>
      <div className='mb-6 flex items-center gap-3'>
        <div className='bg-card text-muted-foreground flex size-13.5 shrink-0 items-center justify-center rounded-md font-mono text-lg font-semibold sm:size-14'>
          {monogram}
        </div>
        <div>
          <p className='text-muted-foreground'>{company}</p>
          <h3 className='text-lg font-medium sm:text-[26px] sm:leading-8'>{role}</h3>
        </div>
      </div>

      <div className='mb-1.5 space-y-3 text-sm sm:text-base'>
        <p className='flex items-center gap-2'>
          <img src={asset('/images/experience/calendar.webp')} alt='' aria-hidden='true' className='size-6' />
          <span className='text-base'>
            {period} · {location}
            {status && (
              <span
                className={cn(
                  'ml-1 font-medium',
                  status.tone === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-accent'
                )}
              >
                {status.text}
              </span>
            )}
          </span>
        </p>

        <div className='flex flex-wrap items-center gap-2'>
          <img src={asset('/images/experience/medal.webp')} alt='' aria-hidden='true' className='size-6' />
          {stack.map(tech => (
            <Badge
              key={tech}
              variant='secondary'
              className='text-foreground h-5.5 rounded-full bg-(--background-darker)'
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <ul className='text-muted-foreground ml-8 max-w-145 space-y-2'>
        {bullets.map(bullet => (
          <li key={bullet} className='flex gap-2.5'>
            <span className='bg-accent/60 mt-2.5 h-px w-3 shrink-0' />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceTimelineItem
