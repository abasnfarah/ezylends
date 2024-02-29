'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { ArrowRight, PartyPopper } from 'lucide-react'
import EmailForm from './EmailForm'
import { useState } from 'react'
import { subscribe } from 'diagnostics_channel'

const SignUpDialog = ({ className }: { className?: string }) => {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className={cn(className)}>
          Join our email list <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {subscribed ? (
          <DialogHeader>
            <DialogTitle>
              Thank you for subscribing!{' '}
              <PartyPopper className="ml-2 h-5 w-5 text-violet-900" />
            </DialogTitle>
            <DialogDescription>
              We will notify you when we launch on IOS.
            </DialogDescription>
          </DialogHeader>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Enter Your Information Below</DialogTitle>
              <DialogDescription>
                We will notify you when we launch on IOS.
              </DialogDescription>
            </DialogHeader>
            <EmailForm setSubscribed={setSubscribed} />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default SignUpDialog
