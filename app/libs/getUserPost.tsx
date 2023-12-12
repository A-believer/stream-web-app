import React from 'react'

export default async function getUserPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    if (!response.ok) {
        throw new Error('failed  to fetch user posts')
    }
    return response.json()
}
