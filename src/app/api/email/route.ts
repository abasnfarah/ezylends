import EzylendsWelcomeEmail from '@/emails/welcome'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface postBody {
  firstName: string
  id: string
  email: string
}

export async function POST(req: Request) {
  const { email, firstName, id } = (await req.json()) as postBody

  const { data, error } = await resend.emails.send({
    from: 'contact@ezylendz.com',
    to: email,
    subject: 'Welcome to Ezylends!',
    react: EzylendsWelcomeEmail({
      firstName: firstName,
      id: id
    })
  })

  if (error) {
    return Response.json(error)
  }

  return Response.json(data)
}
