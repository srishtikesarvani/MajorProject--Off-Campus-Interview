import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main = () => {
  return (
    <>
        <Navbar/>
        <div style={{paddingTop: 100}}>

        <Outlet />
        </div>
    </>
  )
}

export default Main