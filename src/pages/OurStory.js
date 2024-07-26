import React from 'react'
import lightStar from '../assets/light.svg'
import protect from '../assets/protect.svg'
import teeth from '../assets/teeth.svg'
import star from '../assets/star.svg'
export default function OurStory() {
  return (
    <div id='our_story' className='w-[100%] h-auto'>
      <div className='w-[100%] lg:px-56 md:px-56 xl:px-56 px-10 h-100 pb-52 bg-[#08263F]'>
        <p data-aos={'zoom-in'} className='text-center py-14 text-[#FED097] text-xl'>Hi, we’re Auraglow.</p>
        <h1 data-aos={'fade-up'} className='text-white text-center lg:text-5xl md:text-4xl xl:text-5xl text-2xl font-thin '>
          We’re an oral wellness company dedicated to celebrating the unique grins, cherishing the quirky expressions, and turning our expertise into the thing we love most—authentic smiles.
        </h1>
      </div>
      <div className='w-[100%] h-100 py-20 bg-[#EDF3F6]'>
        <h4 className='text-center text-3xl py-10'>Our promises to you</h4>
        <div className='w-[100%] px-28 flex gap-5 lg:flex-nowrap md:flex-wrap xl:flex-nowrap flex-wrap'>
          <div data-aos={'fade-down'} className='lg:w-[23%] md:w-[48%]'>
            <img className='m-auto my-5' src={lightStar} alt="" />
            <h4 className='text-center text-2xl font-medium'>
              Whiter Smile
            </h4>
            <p className='text-center'>​​Our clinically proven teeth whitening formula whitens up to 10 shades in just 7 days.</p>
          </div>
          <div data-aos={'fade-down'} className='lg:w-[23%] md:w-[48%]'>
            <img className='m-auto my-5' src={protect} alt="" />
            <h4 className='text-center text-2xl font-medium'>
            Sensitive Whitening
            </h4>
            <p className='text-center'>​​A bright smile is one that stays feeling healthy and happy. So our whitening products do just that.</p>
          </div>
          <div data-aos={'fade-down'} className='lg:w-[23%] md:w-[48%]'>
            <img className='m-auto my-5' src={teeth} alt="" />
            <h4 className='text-center text-2xl font-medium'>
            Enamel Safe
            </h4>
            <p className='text-center'>​​The whitening ingredients we use have two rules. Stains must go. Enamel must stay.</p>
          </div>
          <div data-aos={'fade-down'} className='lg:w-[23%] md:w-[48%]'>
            <img className='m-auto my-5' src={star} alt="" />
            <h4 className='text-center text-2xl font-medium'>
            Made in America
            </h4>
            <p className='text-center'>​​​​Our dental-grade whitening gel is produced right here in the USA.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
