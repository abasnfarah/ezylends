import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind
} from '@react-email/components'
// import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'

interface EzyLendsWelcomeEmailProps {
  firstName: string
  lastName: string
  email: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '~/workspaces/ezylends/'

export const EzyLendsWelcomeEmail = ({
  firstName,
  lastName,
  email
}: EzyLendsWelcomeEmailProps) => {
  const previewText = `Welcome ${firstName} to EzyLends`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-zinc-900 px-2 font-sans">
          <Container className="mx-auto max-w-[465px] rounded border border-solid border-[#eaeaea] bg-zinc-900 p-[50px]">
            <Img
              src={'exLogoWithText.png'}
              width="40"
              height="37"
              alt="EzyLends"
              className="mx-auto my-0"
            />

            <Container className="mx-auto my-[90px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-zinc-200 p-[20px]">
              <Section className="mt-[32px]">
                <Img
                  src={`${baseUrl}/public/exLogoWithText.png`}
                  width="40"
                  height="37"
                  alt="EzyLends"
                  className="mx-auto my-0"
                />
              </Section>
              <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
                Welcome <strong>{firstName}</strong> to{' '}
                <strong>EzyLends</strong>.
              </Heading>
              <Text className="text-[14px] leading-[24px] text-black">
                Hello {firstName},
              </Text>
              <Text className="text-[14px] leading-[24px] text-black">
                <strong>username</strong> (
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-600 no-underline"
                >
                  {email}
                </Link>
                ) has invited you to the <strong>EzyLends</strong> team on{' '}
                <strong>Ezylends</strong>.
              </Text>
              <Section>
                <Row>
                  <Column align="center">
                    <Img
                      src={`${baseUrl}/static/vercel-arrow.png`}
                      width="12"
                      height="9"
                      alt="invited you to"
                    />
                  </Column>
                  <Column align="left">
                    <Img
                      className="rounded-full"
                      src={`${baseUrl}/static/vercel-logo.png`}
                      width="64"
                      height="64"
                    />
                  </Column>
                </Row>
              </Section>
              <Section className="mb-[32px] mt-[32px] text-center">
                <Button
                  className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                  href={email}
                >
                  Join the team
                </Button>
              </Section>
              <Text className="text-[14px] leading-[24px] text-black">
                or copy and paste this URL into your browser:{' '}
                <Link href={email} className="text-blue-600 no-underline">
                  {email}
                </Link>
              </Text>
              <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
              <Text className="text-[12px] leading-[24px] text-[#666666]">
                This invitation was intended for{' '}
                <span className="text-black">{firstName}</span>. This invite was
                sent from <span className="text-black">{email}</span> located in{' '}
                <span className="text-black">{email}</span>. If you were not
                expecting this invitation, you can ignore this email. If you are
                concerned about your account&apos;s safety, please reply to this
                email to get in touch with us.
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

EzyLendsWelcomeEmail.PreviewProps = {
  firstName: 'Alan',
  lastName: 'Turing',
  email: 'alanTuring@ezylends.com'
} as EzyLendsWelcomeEmailProps

export default EzyLendsWelcomeEmail
