
import {createBrowserRouter} from 'react-router'

import Home from '../components/Home/Home'
import Header from '../components/header/Header'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'


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
            }
        ]
            

    },
    
])