import React from 'react'
import { useLoaderData } from 'react-router'

export const User = () => {
    const users = useLoaderData();
  return (
    <div>
        <h1>Users</h1>
        <h2>Total users:: {users.length}</h2>
        <p>List of users will be displayed here.</p>
    </div>
  )
}
