import Link from 'next/link'
import { cn } from '@/lib/utils'

const Footer = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        'bottom-0 w-full bg-zinc-900 py-6 dark:bg-zinc-300 md:py-10 lg:py-24',
        className
      )}
    >
      <div className="flex flex-col items-center px-2 text-center md:px-4">
        <h2 className="text-2xl font-bold tracking-tighter text-zinc-200 dark:text-zinc-800 sm:text-3xl md:text-4xl lg:text-5xl/none">
          Stay Connected
        </h2>
        <p className="mx-auto max-w-[700px] pt-2 text-zinc-100 dark:text-zinc-800 md:text-lg">
          Follow us on LinkedIn to stay updated on our launch and other exciting
          news.
        </p>
        <div className="flex justify-center space-x-4 pt-6">
          <Link aria-label="LinkedIn profile" className="text-white" href="#">
            <LinkedinIcon className="h-6 w-6 dark:text-zinc-800" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default Footer
