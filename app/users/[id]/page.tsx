import getUser from '@/app/libs/getUser'
import getUserPost from '@/app/libs/getUserPost'
import Link from 'next/link'
import React from 'react'

export default async function User({params: {id}}) {
  const userData = await getUser(id)
    const userPost = await getUserPost(id)
    
    const [user, posts] = await Promise.all([userData, userPost])
    console.log(posts)
    console.log(user)
    return (
        <div className='text-center'>
            <h1>User Information</h1>
            <h3>{user.name}</h3>
            <p>{posts?.map(post => ( 
                <div key={post.id}>
                    {post.title}
                </div>
            ))}</p>
            <Link href={'/users'}>back to Users</Link>
        </div>
  )
}
