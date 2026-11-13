import React from 'react'
import NavBar from '../src/components/NavBar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout