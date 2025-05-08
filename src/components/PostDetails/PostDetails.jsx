import React from 'react'
import { useLoaderData, useParams } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const { postId } = useParams();
    console.log(postId);
  return (
    <div>
        
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default PostDetails