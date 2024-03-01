import { api } from '@/trpc/server'

interface userIdProps {
  params: {
    userid: string
  }
}

const UnsubscribeUser = async ({ params }: userIdProps) => {
  console.log(params.userid)
  const user = api.user.getUserById.query({ id: params.userid })
  console.log(user)

  return (
    <div>
      <div>{params.userid}</div>
    </div>
  )
}

export default UnsubscribeUser
