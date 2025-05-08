import React from 'react'
import { Link } from 'react-router';

export const Post = ({post}) => {
    const { id, title } = post; 
    return (
        <div>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            
        </div>
    )
}
