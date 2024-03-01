'use client'

import emailFormSchema from '@/lib/emailFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { api } from '@/trpc/react'
import { useState } from 'react'
import type { TRPCError } from '@trpc/server'

const EmailForm = ({
  setSubscribed
}: {
  setSubscribed: (useSubscribed: boolean) => void
}) => {
  setSubscribed(false) // Reset useSubscribed state when the form is re-rendered

  const [subscriberError, setSubscriberError] = useState(false)
  const [alreadyExistsError, setAlreadyExistsError] = useState(false)

  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
  })

  const emailSubscriberHook = api.user.subscribeEmail.useMutation()

  const onSubmit = (data: z.infer<typeof emailFormSchema>) => {
    console.log(data)
    emailSubscriberHook
      .mutateAsync(data, {})
      .then(() => {
        form.reset()
        console.log('Success')
        setSubscriberError(false)
        setAlreadyExistsError(false)
        setSubscribed(true)
      })
      .catch((err: TRPCError) => {
        if (err.message === 'ALREADY_EXISTS') {
          setAlreadyExistsError(true)
          setSubscriberError(false)
        } else {
          setSubscriberError(true)
          setAlreadyExistsError(false)
        }
      })
  }

  return (
    <Form {...form}>
      {subscriberError && (
        <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {' '}
            There was an error subscribing. Please try again.
          </span>
        </div>
      )}

      {alreadyExistsError && (
        <div className="relative rounded border border-yellow-400 bg-red-100 px-4 py-3 text-yellow-700">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> You are already subscribed.</span>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name </FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name </FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default EmailForm
