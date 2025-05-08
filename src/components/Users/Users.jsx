import React from 'react'
import { useLoaderData } from 'react-router'
import { User } from '../User/User';

export const Users = () => {
    const users = useLoaderData();
  return (
    <div>
        <h1>Users</h1>
        <h2>Total users:: {users.length}</h2>
        <p>List of users will be displayed here.</p>
        <div>
          {
            users.map(user => <User key={user.id} User={user} />)
          }
        </div>
    </div>
  )
}
