import React from 'react'
import { Link, useNavigate } from 'react-router';

export const Post = ({post}) => {
    const { id, title } = post; 
    const Navigate= useNavigate();
    const handleShowDetails = () => {
        Navigate(`/post/${id}`)
    }
    return (
        <div>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetails}>
                Click to see post details
            </button>
            
        </div>
    )
}
