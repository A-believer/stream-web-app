import React from 'react'
import getUsers from "../libs/getUsers"
import Link from 'next/link'
export default async function UsersPage() {
    const users = await getUsers()

  return (
      <div>
          <h1>Users</h1>
          <div className='flex flex-col'>{
              users?.map((user) => (
                  <Link href={`/users/${user.id}`} key={user.id}>
                      {user?.name}
              </Link>
          ))
          }</div>
    </div>
  )
}
