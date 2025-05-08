import React from 'react'
import { useLoaderData } from 'react-router';

const Posts = () => {
    const posts= useLoaderData();
  return (
    <div>
        <h2>Posts:  {posts.length}</h2>
    </div>
  )
}

export default Posts