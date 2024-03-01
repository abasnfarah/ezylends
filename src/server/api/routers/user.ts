import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { users } from '@/server/db/schema'
import { TRPCError } from '@trpc/server'
import { eq } from 'drizzle-orm'

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`
      }
    }),

  subscribeEmail: publicProcedure
    .input(
      z.object({
        firstName: z.string().toLowerCase(),
        lastName: z.string().toLowerCase(),
        email: z.string().email()
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.insert(users).values({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email
        })
      } catch (error) {
        const trpcError = error as TRPCError
        if (trpcError.message.includes('AlreadyExists')) {
          throw new TRPCError({
            message: 'ALREADY_EXISTS',
            code: 'INTERNAL_SERVER_ERROR'
          })
        }
        throw new TRPCError({
          message: 'Database error',
          code: 'INTERNAL_SERVER_ERROR'
        })
      }
    }),

  unsubscribeEmail: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.delete(users).where(eq(users.id, input.id))
      } catch (error) {
        throw new TRPCError({
          message: "Email doesn't exist",
          code: 'INTERNAL_SERVER_ERROR'
        })
      }
    }),

  sendEmail: publicProcedure
    .input(z.object({ firstName: z.string(), email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.email, input.email)
      })
      if (!user) {
        throw new TRPCError({
          message: "Email doesn't exist",
          code: 'INTERNAL_SERVER_ERROR'
        })
      }

      // send post request to another api at /api/send route with firstname email and id
      try {
        const req = await fetch('https://www.ezylendz.com/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: user.id,
            firstName: user.firstName,
            email: user.email
          })
        })
        const res = req.json()
        console.log('response: ', res)
      } catch (err) {
        console.error(err)
      }
      return `Hello ${input.firstName}, we have sent an email to ${user.email}`
    }),

  getLatestUser: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.users.findFirst({
      orderBy: (users, { desc }) => [desc(users.createdAt)]
    })
  }),

  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.users.findMany({
        where: eq(users.id, input.id)
      })
    }),

  getUserByEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.users.findMany({
        where: eq(users.email, input.email)
      })
    })
})
