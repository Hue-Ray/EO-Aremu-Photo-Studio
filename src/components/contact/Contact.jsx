import React from 'react'
import TwitterIcon from '../../assets/twitter-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.png'
import FbIcon from '../../assets/fb-icon.svg'

function Contact() {
  return (
    <div>
        <section id='contact' className='bg-black text-white text-center p-4'>
            <h1 className='heading'>Contact Me</h1>
            <p className='font-light text-sm md:w-[60ch] md:m-auto'>
            Would you like to ask me a question,
             book a service or say ‘Hi’ I  am ever 
             ready to respond to your needs, be it an 
             event, pre-wedding pictures, birthday pictures
              or passport photograph.
            </p>
           <div className='py-2'>
           <a href='mailto:kunletobi4@gmail.com'>
                <button className='btn'>Reach Out</button>
            </a>
           </div>
            <div className='flex justify-evenly p-4 md:w-[40%] lg:w-[20%] md:m-auto'>
                <a href=''>
                    <img src={TwitterIcon} alt="" />
                </a>
                <a href=''>
                    <img src={LinkedinIcon} alt="" />
                </a>
                <a href=''>
                    <img src={InstagramIcon} alt="" />
                </a>
                <a href=''>
                    <img src={FbIcon} alt="" />
                </a>
            </div>
        </section>
    </div>
  )
}

export default Contact