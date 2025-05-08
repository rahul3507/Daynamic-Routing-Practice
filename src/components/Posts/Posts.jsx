import React from 'react'
import { useLoaderData } from 'react-router';
import { Post } from '../Post/Post';

const Posts = () => {
    const posts= useLoaderData();
  return (
    <div>
        <h2>Posts:  {posts.length}</h2>
        <div>
           {
            posts.map(post => <Post key={post.id} post={post} />)
           }
        </div>
    </div>
  )
}

export default Posts