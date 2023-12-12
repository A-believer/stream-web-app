import React from 'react'

export default async function getUser(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	if (!response.ok) {
		throw new Error("Users not found!!!")
	}

	return response.json()
}
