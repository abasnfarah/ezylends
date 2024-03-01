import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind
} from '@react-email/components'
import { ArrowRight } from 'lucide-react'
import * as React from 'react'

interface EzylendsWelcomeEmailProps {
  firstName: string
  id: string
  steps?: {
    id: number
    Description: React.ReactNode
  }[]
  links?: {
    link: string
    key: number
  }[]
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

const PropDefaults: EzylendsWelcomeEmailProps = {
  firstName: 'Alan',
  id: 'uniqueId',
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>PTP Lending:</strong> We are working on making peer to peer
          lending and borrowing as frictionless as possible. Lend/borrow money
          from your friends and family with ease.
        </li>
      )
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Remittence:</strong> We are working on making remittence as
          easy as possible for you. Just connect your bank, choose the amount
          and send it to your loved ones with one click.
        </li>
      )
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Building a strong community:</strong> We are working on
          building a strong community of people interested in changing personal
          finance. The current market for personal finance is antiquated and we
          want to change that. Given our background in finance and tech we are
          well positioned to do so.
        </li>
      )
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Be on the lookout for our IOS and Android app.</strong>
          We will be releasing our app soon. Stay tuned for more updates.
        </li>
      )
    }
  ],
  links: [
    {
      link: 'Linkedin',
      key: 1
    },
    {
      link: 'About Us',
      key: 2
    },
    {
      link: 'Our Site',
      key: 3
    }
  ]
}

export const EzylendsWelcomeEmail = ({
  steps = PropDefaults.steps,
  links = PropDefaults.links,
  firstName,
  id
}: EzylendsWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome {firstName} to EzyLends</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb'
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px'
              }
            }
          }
        }}
      >
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/public/ezLogo.png`}
            width="228"
            height="128"
            alt="EzyLends"
            className="mx-auto my-20"
          />
          <Container className="p-45 bg-white">
            <Heading className="my-0 text-center leading-8">
              Welcome to EzyLends
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Congratulations {firstName}! You&apos;re joining a community
                  of people interested in changing personal finance.
                  <br />
                  <br />
                  We are a team of industry professionals from finance and tech.
                  We have a history working at large banks like Wells Fargo, PNC
                  as well as some large tech companies like Google, Meta,
                  Microsoft and Amazon. We want bridge the gap between finance
                  and tech to make personal finance ezy for you.
                </Text>

                <Text className="text-base">What we have coming next:</Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
              <Button className="rounded-lg bg-green-600 px-[18px] py-3 text-white">
                Follow us on Linkedin <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Section>

            <Section className="mt-45">
              <Row>
                {links?.map(({ link, key }) => (
                  <Column key={key}>
                    <Link className="font-bold text-black underline">
                      {link}
                    </Link>{' '}
                    <span className="text-green-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="px-20 text-center">
                  <Link href={`${baseUrl}/api/email/unsubscribe/${id}`}>
                    Unsubscribe
                  </Link>
                </Column>
              </Row>
            </Section>
            <Text className="mb-45 text-center text-gray-400">
              Ezylends, San Francisco, CA
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EzylendsWelcomeEmail
