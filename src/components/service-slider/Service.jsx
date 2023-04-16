import React from 'react';
import serviceImage1 from '../../assets/w-s.png';
import serviceImage2 from '../../assets/b-s.png';
import serviceImage3 from '../../assets/o-s.png';

function Service() {
  return (
    <div>
        <section id='services'>
            <div className='flex-col text-center py-4'>
                <h1 className='heading'>Services</h1>

                <div className='flex justify-center text-center'>
                    <div>
                    <p className='text-xs opacity-70 md:text-sm lg:text-md'>Wedding</p>
                    <img className='lg:hover:w-[182px] transition-all duration-900' src={serviceImage1} alt="wedding service image" />
                    </div>
               
                    <div>
                    <p className='text-xs opacity-70 md:text-sm lg:text-md'>Birthdays</p>
                    <img className='lg:hover:w-[182px] transition duration-[3s] ease-out' src={serviceImage2} alt="wedding service image" />
                    </div>

                    <div>
                    <p className='text-xs opacity-70 md:text-sm lg:text-md'>Occasions</p>
                    <img className='lg:hover:w-[182px] transition-all duration-900' src={serviceImage3} alt="wedding service image" />
                   </div>
                </div>
                 <a href='#contact'>
                 <button className='btn text-white'>
                    Reach Out
                   </button>
                 </a>
            </div>
        </section>
    </div>
  )
}

export default Service