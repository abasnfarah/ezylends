import { cn } from '@/lib/utils'

const CallToAction = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <h1 className="md:pt-4 max-w-xl md:max-w-4xl text-4xl md:text-5xl lg:text-7xl font-bold dark:text-zinc-300 text-center">
        Empower your finances with{' '}
        <span className="text-primary">EzyLends.</span>
      </h1>
      <p className="mt-4 md:mt-5 max-w-prose text-base md:text-lg dark:text-zinc-50 text-center">
        Our mission is to empower consumers with tools for confident financial
        navigation. Sign up for our email list to know when we launch on IOS.
      </p>
    </div>
  )
}

export default CallToAction
