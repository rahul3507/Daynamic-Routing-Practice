
import {createBrowserRouter} from 'react-router'


export  const rootRouter=   createBrowserRouter([
    {path: '/', element: <h1>hello i am home page</h1>},
    {path: '/about', element: <h1>hello i am about page</h1>},
])