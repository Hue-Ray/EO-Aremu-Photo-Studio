import React from 'react'
import AboutImg from '../../assets/about-img.png';

function AboutStudio() {
  return (
    <div>
        <section className='p-4'>
           <h1 className='heading text-center'>About EO Aremu Photo Studio</h1>
           <div className='flex flex-wrap gap-2 justify-center py-2'>
           <img className='' src={AboutImg} alt="" />
            <div className='flex-col text-center md:text-left md:py-12'>
                <p className='text-xs md:text-sm w-[40ch] md:w-[60ch]'>
                The studio is owned and managed by Olakunle Odagbodo,
                 a professional photographer who’s passion is to create
                  stunning pictures of very high qualities. EO Aremu Studios 
                  is based in Lagos, Nigeria but is opened to work at any part 
                  of the country and beyond. Presently, our main services includes:
                   wedding pictures, Birthday pictures and event coverage.
                </p>
                <div className='py-2'>
                <a href="">
                <button className='btn text-white'>View Services</button>
                </a>
            </div>
            </div>
           </div>
        </section>
    </div>
  )
}

export default AboutStudio