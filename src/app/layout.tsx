import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'

import { TRPCReactProvider } from '@/trpc/react'
import LoadAnimate from '@/components/LoadAnimate'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'EzyLends',
  description: 'Empower your finances with EzyLends',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
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
          'grainy min-h-screen font-sans antialiased dark:bg-gradient-to-tr dark:from-violet-950/30 dark:to-emerald-950/30',
          inter.className,
          inter.variable
        )}
      >
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <div className="flex-grow">
                <Navbar />
                <LoadAnimate>{children}</LoadAnimate>
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
