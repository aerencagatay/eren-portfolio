'use client'

// Third-party Imports
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

// Type Imports
import type { ContactFormValues } from './contact-form-schema'
import { contactFormSchema, SERVICE_OPTIONS } from './contact-form-schema'

// Component Imports
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from '@/components/ui/select'

// Util Imports
import { cn } from '@/lib/utils'

// Data Imports
import { profile } from '@/content/cv'

type ContactFormProps = {
  className?: string
}

const ContactForm = ({ className }: ContactFormProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  })

  /**
   * The site is a static export with no backend, so the form hands the message
   * to the visitor's mail client rather than pretending to deliver it.
   */
  const onSubmit = (values: ContactFormValues) => {
    const subject = `${values.service} — ${values.name}`
    const body = `${values.message}\n\n—\n${values.name}\n${values.email}`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.assign(mailto)
    toast.success('Opening your mail app with the message ready to send.')
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-5', className)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Name*</FormLabel>
              <FormControl>
                <Input
                  placeholder='Your name'
                  className='border-border h-11 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Email*</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='you@example.com'
                  className='border-border h-11 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Topic*</FormLabel>
              <Select value={field.value || undefined} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='border-border h-11! w-full rounded-[12px] bg-(--background-darker)'>
                    <SelectValue placeholder='What is this about?' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {SERVICE_OPTIONS.map(service => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Enter your message'
                  className='border-border min-h-25 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='outline'
          className='hover:bg-card hover:text-accent rounded-[12px bg-card h-10 w-full'
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
