import React from 'react'
import Header from '../header/Header'

function HeroSection() {
  return (
    <div>
        <section className='hero-section h-[80vh] md:h-[90vh] lg:h[100vh] w-screen'>
            <Header/>
           <div className='text-white px-4 flex-col  justify-center text-center mt-[35vh]'>
           <h1 className='heading text-[24px] text-2xl md:text-4xl'>Your Memories Matters</h1>
            <h6 className='text-center text-sm md:text-lg md:w-[60ch] md:m-auto'>
            Be it an event,a birthday shoot,
             pre wedding pictures, baby pictures
              or passport, I am ever ready to capture
               them so you can re-live your memories at any time.
            </h6>
            <button className='mt-1 cursor-pointer bg-[#A73A2C] p-2 w-40 rounded-lg'>Get In Touch</button>
           </div>
        </section>
    </div>
  )
}

export default HeroSection