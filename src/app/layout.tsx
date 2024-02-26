import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'EzyLends',
  description: 'Empower your finances with EzyLends'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          'grainy min-h-screen bg-background font-sans antialiased absolute',
          inter.className,
          inter.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
