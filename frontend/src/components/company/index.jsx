import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Company = () => {
  return (
    <>
    <Navbar />
    <Outlet />
</>
  )
}

export default Company