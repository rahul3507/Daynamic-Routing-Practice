import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header/Header'
import { Footer } from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header></Header>
      
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Home
