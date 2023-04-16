import React from 'react'
import menuIcon from '../../assets/mobile-menu-icon.svg'

function Header() {
  return (
    <div>
     <header className='header-container text-white  flex justify-between 
     py-2 px-4'>
     <div>
        <p className='site-title font-bold text-xl md:text-2xl'>EO-Aremu</p>
      </div>


      <div>
        <ul className='hidden md:flex md: md:text-xl'>
          <li className='nav-menu'>About</li>
          <li className='nav-menu'>Gallery</li>
          <li className='nav-menu'>Services</li>
          <li className='nav-menu'>Contact</li>
        </ul>
        <img className='mt-2 cursor-pointer md:hidden' src={menuIcon}/>
      </div>
     </header>
    </div>
  )
}

export default Header