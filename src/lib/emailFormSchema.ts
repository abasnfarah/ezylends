import { z } from 'zod'

const emailFormSchema = z.object({
  firstName: z.string().toLowerCase(),
  lastName: z.string().toLowerCase(),
  email: z.string().email()
})

export default emailFormSchema
