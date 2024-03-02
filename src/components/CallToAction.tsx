import { cn } from '@/lib/utils'

const CallToAction = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <h1 className="max-w-xl text-center text-4xl font-bold dark:text-zinc-300 md:max-w-4xl md:pt-4 md:text-5xl lg:text-7xl">
        Empower your finances with{' '}
        <span className="text-primary">EzyLendz.</span>
      </h1>
      <p className="mt-4 max-w-prose text-center text-base dark:text-zinc-50 md:mt-5 md:text-lg">
        Our mission is to empower consumers with tools for confident financial
        navigation. Sign up for our email list to know when we launch on IOS.
      </p>
    </div>
  )
}

export default CallToAction
