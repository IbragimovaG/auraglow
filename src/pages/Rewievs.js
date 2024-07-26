import React from 'react'
import vector from '../assets/circleVector.svg'
export default function Rewievs() {
  return (
    <div id='reviews' className='w-full h-fit relative '>
<div className='w-100 h-[30%] lg:px-56 md:px-32 px-10 xl:px-56 py-20 bg-[#EDF3F6]'> 
<img className='m-auto py-10' src={vector} alt='' />
<h1 data-aos={'zoom-out'} className='lg:text-4xl xl:text-4xl md:text-3xl text-2xl text-center leading-tight caret-fuchsia-300'>"You can now multitask while you drive (or sneak away to the bathroom in between meetings) with the Auraglow whitening pen. All it takes is 60 seconds to start seeing a brighter smile."</h1>
</div>
<div className='w-100 h-[70%] py-20 bg-[#08263F]'>
<p className='text-xl text-center text-[#FED097]'>Customer Reviews</p>
<h1 data-aos={'zoom-out'} className='lg:text-5xl md:text-4xl xl:text-5xl text-3xl pt-10 text-white font-normal text-center'>Smiles of all styles love Auraglow</h1>
<div className='flex justify-between px-28 pt-40 '>
<img className='opacity-75 lg:block md:hidden hidden xl:block' width={500} src={require('../assets/pexels-photo-774909.webp')} alt='' />
<div className='lg:absolute lg:left-[37%] lg:top-[63%] xl:left-[37%] xl:top-[63%]   top-[80%] left-0 z-10 p-10 lg:w-[400px] xl:w-[400px] md:w-full md:h-fit h-fit lg:h-[400px] xl:h-[400px] bg-white'> 
<h4 data-aos={'fade-down'} className='text-2xl font-medium'>"I loved my smile before, and I love it more now! After a few treatments I saw noticeable results withput any sensitivity I've experienced with other products."</h4>
<span className='flex justify-between items-center mt-16 w-[100%]'>
  <h4 className='font-bold tetx-2xl'>Nicole P.</h4>
  <img  width={20} src={vector} alt='' />
</span>
</div>
<img className='opacity-75 lg:block md:hidden hidden xl:block' width={500} src={require('../assets/pexels-photo-2379004.jpeg')} alt='' />
</div>
</div>
    </div>
  )
}
