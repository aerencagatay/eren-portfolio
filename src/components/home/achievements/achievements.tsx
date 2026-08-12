// Component Imports
import { Card } from '@/components/ui/card'
import Eyebrow from '@/components/shared/eyebrow/eyebrow'

// Data Imports
import { achievements } from '@/content/cv'

const Achievements = () => {
  return (
    <section id='achievements' className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Recognition</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>A few things I am proud of</h2>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {achievements.map(item => (
            <Card key={item.title} className='ring-border rounded-[24px] p-6 shadow-lg sm:p-8'>
              <p className='text-accent text-5xl leading-none font-semibold lg:text-6xl'>{item.metric}</p>
              <p className='mt-6 text-lg font-medium'>{item.title}</p>
              <p className='text-muted-foreground mt-2'>{item.detail}</p>
              <p className='text-muted-foreground mt-6 font-mono text-sm'>{item.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
