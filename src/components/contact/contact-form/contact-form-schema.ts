import { z } from 'zod'

export const SERVICE_OPTIONS = [
  'Job opportunity',
  'Project collaboration',
  'Technical question',
  'Something else'
] as const

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Enter a valid email address.'),
  service: z.string().min(1, 'Please pick a topic.'),
  message: z.string().min(10, 'Message must be at least 10 characters.')
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
