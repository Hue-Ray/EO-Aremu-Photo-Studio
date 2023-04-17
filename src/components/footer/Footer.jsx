import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1E1E1E] text-white'>
        <section className='flex justify-between p-4'>
            <div  className='flex-col'>
                <p className='font-bold underline'>About</p>
                <div className='text-sm'>
                    <div><a href="#about-studio">Studio</a></div>
                    <div><a href="#services">Services</a></div>
                    <div><a href="#policy">Refund Policy</a></div>
                </div>
            </div>

            <div  className='flex-col text-center'>
                <p className='font-bold underline'>Contact</p>
                <div className='text-sm'>
                    <div><a href="#about-studio">Instagram</a></div>
                    <div><a href="#services">Facebook</a></div>
                    <div><a href="#policy">Twitter</a></div>
                </div>
            </div>

            <div  className='flex-col text-right'>
                <p className='font-bold underline'> Services</p>
                <div className='text-sm'>
                    <div><a href="#about-studio">Weddings</a></div>
                    <div><a href="#services">Birthdays</a></div>
                    <div><a href="#policy">Occations</a></div>
                </div>
            </div>
        </section>
        <p className='text-xs text-center py-4'>All Right Reserved@EO-Aremu - <a href='https://my-portfolio-vite-coral.vercel.app/'><span className='text-red-500'>Developer</span></a> Info</p>
    </div>
  )
}

export default Footer