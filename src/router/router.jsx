
import {createBrowserRouter} from 'react-router'
import App from '../App'
import Root from '../pages/Root'


export  const rootRouter=   createBrowserRouter([
    {path: '/', element: <Root/>},
    {path: '/about', element: <h1>hello i am about page</h1>},
])