import React from 'react'
import { Link } from 'react-router';

export const User = ({User}) => {
    const {id,name, email, phone} = User;
  return (
    <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <Link to={`/user/${id}`}>View Details</Link>
        <Link to={`/user/${id}`}><button>Click me</button></Link>


    </div>
  )
}
