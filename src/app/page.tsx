import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight, HandCoins } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import EmailForm from '@/components/EmailForm'
import UpdateCard from '@/components/UpdateCard'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center pb-12 md:pb-20 lg:pb-32">
        <MaxWidthWrapper className="mb-6 md:mb-12 mt-14 md:mt-16 lg:mt-28 flex flex-col items-center justify-center text-center w-full lg:w-1/2">
          <UpdateCard />
          <CallToAction />
          <EmailForm className="mt-6 md:mt-8 font-bold bg-primary text-zinc-900" />
        </MaxWidthWrapper>

        {/* Product View Section */}
        <div className="w-full lg:w-1/2">
          <div className="mx-auto max-w-3xl lg:pt-4 px-6 lg:px-8">
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
