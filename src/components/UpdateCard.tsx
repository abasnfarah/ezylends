import { cn } from '@/lib/utils'
import { HandCoins } from 'lucide-react'
import Link from 'next/link'

const UpdateCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn('group relative', className)}>
      <Link
        href="https://www.linkedin.com/company/ezylendz/about/"
        className="tilt absolute -inset-0.5 mb-4 mt-4 bg-gradient-to-r from-green-600 to-cyan-600 px-4 py-3 opacity-75 blur-2xl transition ease-in-out group-hover:opacity-100 md:mb-8 md:mt-8 md:px-7 md:py-4"
      />
      <Link
        href="https://www.linkedin.com/company/ezylendz/about/"
        className="relative mb-4 mt-4 flex items-center divide-x divide-gray-600 rounded-lg border border-zinc-800 bg-white px-4 py-3 font-bold leading-none dark:bg-black dark:hover:bg-black md:mb-8 md:mt-8 md:px-7 md:py-4"
      >
        <span className="flex items-center space-x-3 md:space-x-5">
          <HandCoins className="h-6 w-6 text-lime-900" />
          <span className="pr-4 text-xs font-semibold text-zinc-950 dark:text-zinc-100 md:pr-6 md:text-sm">
            Coming soon to IOS
          </span>
        </span>
        <span className="pl-4 text-xs font-bold text-red-800 dark:text-red-600 md:pl-6 md:text-sm">
          Follow us on Linkedin &rarr;
        </span>
      </Link>
    </div>
  )
}

export default UpdateCard
