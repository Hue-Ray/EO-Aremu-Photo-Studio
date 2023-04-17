import React from 'react'
import Header from '../header/Header'

function HeroSection() {
  return (
    <div>
        <section id='hero-section' className='hero-section h-[80vh] md:h-[90vh] lg:h[100vh] w-screen'>
            <Header/>
           <div className='text-white px-4 h-screen flex justify-center items-center text-center'>
            <div className='flex-col'>
            <h1 className='heading'>Your Memories Matters</h1>
            <h6 className='text-center font-light text-sm md:text-lg md:w-[60ch] md:m-auto'>
            Be it an event,a birthday shoot,
             pre wedding pictures, baby pictures
              or passport, I am ever ready to capture
               them so you can re-live your memories at any time.
            </h6>
            <a href='#gallery'>
            <button className='btn'>View Gallery</button>
            </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HeroSection