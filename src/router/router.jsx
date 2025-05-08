
import {createBrowserRouter} from 'react-router'

import Home from '../components/Home/Home'
import Header from '../components/header/Header'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import { User } from '../components/User/User'


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
                path:'/user',
                loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
                element:<User/>,
                action: () => { /* Add any action if needed */ }
            }
        ]
            

    },
    
])