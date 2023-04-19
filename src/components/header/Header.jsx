import React from 'react'

function Header() {
    const navBar = () => {  
      const mobileNav = document.querySelector('.nav-menu');
      console.log(mobileNav);
      if (mobileNav.style.display === "none"){
        mobileNav.style.display = "block";
      } else {
        mobileNav.style.display = "none";
      }
 };
  return (
    <div>
      <header className='text-white py-2 px-4 flex-col justify-center items-center'>
      <div className='md:hidden'>
      <div className='flex justify-between'>
       <p className='logo font-bold'>EO Aremu Studio</p>
        <div onClick={navBar} className='show-nav-btn transition-all'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        </div>
       </div>
        <nav className='nav-menu flex-col bg-black
         p-4 h-[40vh] bg-opacity-70 text-center rounded-lg 
         mt-4'>
          <p className='nav-menu-link p-4'><a href="#about">About</a></p>
          <p className='nav-menu-link p-4'><a href="#Services">Services</a></p>
          <p className='nav-menu-link p-4'><a href="#contact">Contact</a></p>
        </nav>
      </div>
      </header>
   </div>
  )
}

export default Header