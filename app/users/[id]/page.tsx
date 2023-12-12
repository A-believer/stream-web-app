import getUser from '@/app/libs/getUser'
import getUserPost from '@/app/libs/getUserPost'
import Link from 'next/link'
import React from 'react'

interface ParamsProps {
    params: {
        id: string
    }
}
 const  User: React.FC<ParamsProps> = async ({params: {id}}) => {
  const userData = await getUser(id)
    const userPost = await getUserPost(id)
    
    const [user, posts] = await Promise.all([userData, userPost])
    
    return (
        <div className='text-center'>
            <h1>User Information</h1>
            <h3>{user.name}</h3>
            <p>{posts?.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => ( 
                <div key={post.id}>
                    {post.title}
                </div>
            ))}</p>
            <Link href={'/users'}>back to Users</Link>
        </div>
  )
}

export default User