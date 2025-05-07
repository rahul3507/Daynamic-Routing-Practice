import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header/Header'

const Home = () => {
  return (
    <div>
        <Header></Header>
      this is home page
        <Outlet></Outlet>
    </div>
  )
}

export default Home
