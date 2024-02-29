import { z } from 'zod'

const emailFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email()
})

export default emailFormSchema
