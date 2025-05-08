import React from 'react'
import { useLoaderData } from 'react-router'

export const UserDetails = () => {
    const user = useLoaderData();
  return (
    <div>
        <h2>Details about user</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
    )
}
