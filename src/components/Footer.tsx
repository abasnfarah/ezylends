import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Footer = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        'w-full py-6 md:py-10 lg:py-24 bg-zinc-900 dark:bg-zinc-300',
        className
      )}
    >
      <div className="px-2 md:px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-zinc-200 dark:text-zinc-800">
          Stay Connected
        </h2>
        <p className="mx-auto max-w-[700px] pt-2 text-zinc-100 md:text-lg dark:text-zinc-800">
          Follow us on LinkedIn to stay updated on our launch and other exciting
          news.
        </p>
        <div className="flex justify-center pt-6 space-x-4">
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
