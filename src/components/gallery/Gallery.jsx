import React from 'react';
import WedImg1 from '../../assets/w-1.png';
import WedImg2 from '../../assets/w-2.png';
import WedImg3 from '../../assets/w-3.png';
import WedImg4 from '../../assets/w-4.png';
import WedImg5 from '../../assets/w-5.png';
import WedImg6 from '../../assets/w-6.png';

import BdImg1 from '../../assets/b-1.jpg';
import BdImg2 from '../../assets/b-2.jpg';
import BdImg3 from '../../assets/b-3.jpg';
import BdImg4 from '../../assets/b-4.jpg';
import BdImg5 from '../../assets/b-5.jpg';
import BdImg6 from '../../assets/b-6.png';


function Gallery() {
  return (
    <div>
        <section id='gallery'  className='gallery py-4 flex-col justify-center text-center bg-[#1E1E1E] text-white'>
            <h1 className='heading'>Gallery</h1>
            <div>
                <p className='text-xs font-light text-left pl-6 md:text-sm lg:pl-16 xl:pl-32'>Weddings</p>
                <div className='p-4 grid grid-cols-2 md:grid-cols-3 place-items-center'>
                <img src={WedImg1} alt="" />
                <img src={WedImg2} alt="" />
                <img src={WedImg3} alt="" />
                <img src={WedImg4} alt="" />
                <img src={WedImg5} alt="" />
                <img src={WedImg6} alt="" />
                </div>
            </div>
            <div>
            <p className='text-xs font-light text-left pl-6 md:text-sm lg:pl-16 xl:pl-32'>Birthdays</p>
            <div className='p-4 grid grid-cols-2 md:grid-cols-3 place-items-center'>
                <img src={BdImg1} alt="" />
                <img src={BdImg2} alt="" />
                <img src={BdImg3} alt="" />
                <img src={BdImg4} alt="" />
                <img src={BdImg5} alt="" />
                <img src={BdImg6} alt="" />
                </div>
            </div>
            <div>
            <p className='text-xs font-light text-left pl-6 md:text-sm lg:pl-16 xl:pl-32'>Ocassions</p>
            <div className='p-4 grid grid-cols-2 md:grid-cols-3 place-items-center'>
                <img src={BdImg1} alt="" />
                <img src={BdImg2} alt="" />
                <img src={BdImg3} alt="" />
                <img src={BdImg4} alt="" />
                <img src={BdImg5} alt="" />
                <img src={BdImg6} alt="" />
                </div>
            </div>
            <a href='#img-gallery'>
                <button className='btn'>View More Photos</button>
            </a>
        </section>
    </div>
  )
}

export default Gallery