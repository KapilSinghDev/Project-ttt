import React from 'react'
import logo from  './brand.svg'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <img className='nav-logo' src={logo}/>
            <p className='nav-st'> STORIES</p>
        </div>
        <div className='nav-right'>
            <p className='right-text'>
              Courses
            </p>
                
        </div>
    </div>
  )
}

export default Navbar
