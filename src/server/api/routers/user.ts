import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { users } from '@/server/db/schema'
import { TRPCError } from '@trpc/server'
import { TRPCClientError } from '@trpc/client'

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`
      }
    }),

  subscribeEmail: publicProcedure
    // Name is optional
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

        console.log('Error:', error)
        throw new TRPCError({
          message: 'Database error',
          code: 'INTERNAL_SERVER_ERROR'
        })
      }
    }),

  getLatestUser: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.users.findFirst({
      orderBy: (users, { desc }) => [desc(users.createdAt)]
    })
  })
})
