import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { api } from '@/trpc/server'

interface userIdProps {
  params: {
    userid: string
  }
}

const UnsubscribeUser = async ({ params }: userIdProps) => {
  const users = await api.user.getUserById.query({ id: params.userid })
  const user = users[0]

  if (user) {
    await api.user.unsubscribeEmail.mutate({
      id: user.id
    })
  }

  return (
    <div className="flex flex-col items-center justify-center pb-12 md:pb-20 lg:flex-row lg:pb-32">
      <MaxWidthWrapper className="mb-6 mt-14 flex w-full flex-col items-center justify-center text-center md:mb-12 md:mt-16 lg:mt-28 lg:w-1/2">
        <p className="mt-4 max-w-prose text-center text-base dark:text-zinc-50 md:mt-5 md:text-lg">
          You have been unsubscribed
        </p>
      </MaxWidthWrapper>
    </div>
  )
}

export default UnsubscribeUser
