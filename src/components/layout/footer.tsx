// Next Imports
import Link from 'next/link'

// Third-party Imports
import { Github, Mail, Linkedin, Phone } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// Data Imports
import { profile } from '@/content/cv'

const socials = [
  { label: 'GitHub', href: profile.github, icon: Github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'Phone', href: profile.phoneHref, icon: Phone, external: false }
]

const Footer = () => {
  return (
    <footer className='lg:px-10.5'>
      <div className='mx-auto max-w-4xl space-y-12 pb-12 lg:border-x xl:max-w-245'>
        <div className='flex items-center gap-3 px-4'>
          <Separator className='flex-1' />
          <div className='flex items-center gap-3'>
            {socials.map(social => (
              <Button
                key={social.label}
                variant='outline'
                size='icon'
                aria-label={social.label}
                className='hover:bg-muted/5 min-w-10 rounded-md'
                nativeButton={false}
                render={
                  <Link
                    href={social.href}
                    {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <social.icon className='size-4' />
                  </Link>
                }
              />
            ))}
          </div>
          <Separator className='flex-1' />
        </div>

        <div className='space-y-1 px-4 text-center'>
          <p className='text-muted-foreground'>Thanks for stopping by — let&apos;s build something reliable.</p>
          <p className='text-xs'>
            © {new Date().getFullYear()} {profile.fullName} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
