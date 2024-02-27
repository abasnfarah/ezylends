import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight, HandCoins } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import EmailForm from '@/components/EmailForm'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center pb-12 md:pb-20 lg:pb-32">
        <MaxWidthWrapper className="mb-6 md:mb-12 mt-14 md:mt-28 lg:mt-40 flex flex-col items-center justify-center text-center w-full lg:w-1/2">
          <div className="relative group">
            <Link
              href="https://www.linkedin.com/company/ezylendz/about/"
              className="absolute px-4 md:px-7 py-3 md:py-4 mt-4 md:mt-8 mb-4 md:mb-8 -inset-0.5 bg-gradient-to-r from-green-600 to-cyan-600 blur-2xl opacity-75 group-hover:opacity-100 transition ease-in-out tilt"
            />
            <Link
              href="https://www.linkedin.com/company/ezylendz/about/"
              className="relative rounded-lg px-4 md:px-7 py-3 md:py-4 mt-4 md:mt-8 mb-4 md:mb-8 leading-none font-bold dark:bg-black bg-white border border-zinc-800 flex items-center divide-x divide-gray-600 dark:hover:bg-black"
            >
              <span className="flex items-center space-x-3 md:space-x-5">
                <HandCoins className="h-6 w-6 text-lime-900" />
                <span className="pr-4 md:pr-6 text-xs md:text-sm font-semibold dark:text-zinc-100 text-zinc-950">
                  Coming soon to IOS
                </span>
              </span>
              <span className="pl-4 md:pl-6 text-xs md:text-sm font-bold dark:text-red-600 text-red-800">
                Follow us on Linkedin &rarr;
              </span>
            </Link>
          </div>
          <h1 className="md:pt-8 max-w-xl md:max-w-4xl text-4xl md:text-5xl lg:text-7xl font-bold dark:text-zinc-300 text-center">
            Empower your finances with{' '}
            <span className="text-primary">EzyLends.</span>
          </h1>
          <p className="mt-4 md:mt-5 max-w-prose text-base md:text-lg dark:text-zinc-50 text-center">
            Our mission is to empower consumers with tools for confident
            financial navigation. Sign up for our email list to know when we
            launch on IOS.
          </p>
          <EmailForm className="mt-6 md:mt-8 font-bold bg-primary text-zinc-900" />
        </MaxWidthWrapper>

        {/* Product View Section */}
        <div className="w-full lg:w-1/2">
          <div className="mx-auto max-w-3xl lg:pt-8 px-6 lg:px-8">
            <div className="relative mt-16 flow-root sm:mt-24">
              {/* animated blobs*/}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-destructive rounded-full dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-green-600 dark:bg-green-900 rounded-full dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 right-20 w-72 h-72 bg-violet-600 dark:bg-violet-900 rounded-full dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-4000" />
              {/* image */}
              <div className="-m-2 rounded-xl bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/Ezy_Lends_dashboard.png"
                  alt="EzyLends Dashboard"
                  width={1660}
                  height={1156}
                  quality={100}
                  className="rounded-md bg-white sm:p-1 p-2 shadow-2xl ring-1 ring-gray-500/10 opacity-85"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
