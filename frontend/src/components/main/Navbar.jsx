import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='classtop'>
      <nav class="navbar navbar-expand-lg fixed-top bg-light" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src="../public/logor.png" alt=""  height={80}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse "  id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link" to="/main/home">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/main/signup">Signup</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/main/login">Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/main/contact">Contact Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/main/about">About</NavLink>
        </li>
      
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar