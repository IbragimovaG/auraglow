import React from 'react';
export default function Home() {
  return (
    <div className='w-full h-100 py-96 bg-woman  bg-cover bg-center relative'>
      <div className=' h-100 w-100 lg:text-start md:text-start text-center'>
        <h1 data-aos="fade-right" className='text-[80px]  leading-tight xl:w-[40%] lg:w-[30%] md:w-[30%] w-[90%]  text-white absolute lg:bottom-52 md:bottom-48  bottom-48 lg:left-28 md:left-28 left-5'>Oral care is self care</h1>
        <button data-aos="fade-right" id='#products'  className='text-white bg-[#225B93] rounded-3xl px-8 py-3 border-none text-center absolute lg:bottom-28 md:bottom-10 bottom-20 left-28'>Find your glow</button>
      </div>
    </div>
  )
}
