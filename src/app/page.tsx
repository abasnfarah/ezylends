import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import UpdateCard from '@/components/UpdateCard'
import CallToAction from '@/components/CallToAction'
import SignUpDialog from '@/components/SignUpDialog'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pb-12 md:pb-20 lg:flex-row lg:pb-32">
        <MaxWidthWrapper className="mb-6 mt-14 flex w-full flex-col items-center justify-center text-center md:mb-12 md:mt-16 lg:mt-28 lg:w-1/2">
          <UpdateCard />
          <CallToAction />
          <SignUpDialog className="mt-6 bg-primary font-bold text-zinc-900 md:mt-8" />
        </MaxWidthWrapper>

        {/* Product View Section */}
        <div className="w-full lg:w-1/2">
          <div className="mx-auto flex max-w-md items-center justify-center px-6 sm:max-w-sm lg:px-8 lg:pt-4">
            <div className="relative mt-16 flow-root sm:mt-24">
              {/* animated blobs*/}
              <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-destructive opacity-70 blur-2xl filter dark:mix-blend-lighten" />
              <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-green-600 opacity-70 blur-2xl filter dark:bg-green-900 dark:mix-blend-lighten" />
              <div className="animation-delay-4000 absolute -bottom-8 right-20 h-72 w-72 animate-blob rounded-full bg-violet-600 opacity-70 blur-2xl filter dark:bg-violet-900 dark:mix-blend-lighten" />
              {/* image */}
              <div className="-m-2 rounded-xl bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/mockup.gif"
                  alt="EzyLends Dashboard"
                  width={284.33}
                  height={640}
                  quality={100}
                  className="rounded-md bg-white p-2 opacity-85 shadow-2xl ring-1 ring-gray-500/10 sm:p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
