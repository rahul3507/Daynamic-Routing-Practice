
import {createBrowserRouter} from 'react-router'

import Home from '../components/Home/Home'

import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import {  Users } from '../components/Users/Users'

import Posts from '../components/Posts/Posts'
import PostDetails from '../components/PostDetails/PostDetails'
import { UserDetails } from '../components/UserDetails/UserDetails'


export  const rootRouter=   createBrowserRouter([
    {
        path: '/', 
        element: <Home/>,
        children:[
            {
                path: '/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/users',
                loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
                element:<Users/>,
                
            },
            {
                path:'/user/:userId',
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element:<UserDetails/>,
            },
            {
                path:'/posts',
                loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
                element: <Posts/>
            },
            {
                path:'/post/:postId',
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element: <PostDetails/>
            }
        ]
            

    },
    
])