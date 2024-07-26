import React from 'react'
import logo from '../assets/logoWhite.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
export default function Footer() {
  return (
    <div className='w-full h-auto bg-[#08263F] flex lg:flex-nowrap xl:flex-nowrap flex-wrap lg:px-28 xl:px-28 px-10'>
      <div data-aos={'fade-up'} className='lg:w-1/6 xl:w-1/6 w-2/4 h-100 lg:py-20 xl:py-20 py-10 '>
      <img className='lg:mt-0 xl:mt-0 mt-12' src={logo} alt="" />
      <p className='lg:mt-80 xl:mt-80 mt-72 text-white'>
      © Auraglow 2021
      </p>
      </div>
      <div data-aos={'fade-up'} className='lg:w-1/6 xl:w-1/6 w-2/4 h-100 py-20 flex flex-col gap-2'>
        <p className='text-[#FED097] text-xl pb-5'>Products</p>
        <a href="#products" className='text-decoration-none text-white font-thin'>Complete LED Whitening Kit</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Custom Whitening Kit</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Whitening Strips</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Whitening Pen</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Daily Toothpaste</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Whitening Gel</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Extra Strength Whitening Gel</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>LED Whitening Light</a>
      </div>
      <div data-aos={'fade-up'} className='lg:w-1/6 xl:w-1/6 w-2/4 h-100 py-20 lg:pl-8 flex flex-col gap-2'>
        <p className='text-[#FED097] text-xl pb-5'>Company</p>
        <a href="#our_story" className='text-decoration-none text-white font-thin'>Blog</a>
        <a href="#reviews" className='text-decoration-none text-white font-thin'>Reviews</a>
        <a href="#our_story" className='text-decoration-none text-white font-thin'>Our Story</a>
        <a href="#virtual_mirror" className='text-decoration-none text-white font-thin'>Guarantee</a>
        <a href="#virtual_mirror" className='text-decoration-none text-white font-thin'>Virtual Mirror</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Clinical Study</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Where to Buy</a>
      </div>
      <div data-aos={'fade-up'} className='lg:w-1/6 xl:w-1/6 w-2/4 h-100  py-20 flex flex-col gap-2'>
        <p className='text-[#FED097] text-xl pb-5'>Support</p>
        <a href="#products" className='text-decoration-none text-white font-thin'>FAQs</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Contact</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Privacy Policy</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Terms of Service</a>
        <a href="#products" className='text-decoration-none text-white font-thin'>Shipping & Returns</a>
      </div>
      <div data-aos={'fade-up'} className='lg:w-2/6 xl:w-2/6 w-full h-100 lg:px-5 py-20'>
        <p className='text-xl  text-white pb-20'>
        Sign up for the latest in oral wellness
        </p>
        <hr className='text-white pb-10' />
        <button className='px-8 py-2 border rounded-3xl text-xl text-white font-thin'>Subscribe</button>
        <div className='flex pt-14 gap-8'>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  )
}
