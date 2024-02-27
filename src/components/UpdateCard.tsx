import { cn } from '@/lib/utils'
import { HandCoins } from 'lucide-react'
import Link from 'next/link'

const UpdateCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative group', className)}>
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
  )
}

export default UpdateCard
