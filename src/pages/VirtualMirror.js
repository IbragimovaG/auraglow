import React from 'react'

export default function VirtualMirror() {
  return (
    <div id='virtual_mirror' className='w-100 h-auto relative'>
      <div className='w-100 px-48 py-20 flex '>
        <img className='lg:block xl:block md:hidden hidden' src={require('../assets/glass.png')} alt="" />
        <div data-aos={'fade-left'} className='lg:w-96 xl:w-96 w-full lg:absolute h-100 p-8 bg-[#EDF3F6] lg:top-44 lg:right-52 xl:top-44 xl:right-52 hidden lg:block'>
          <h1 className='text-[#031622] text-2xl font-medium pt-10'>
          Proven to whiten
          </h1>
          <p className='my-10 pb-10 text-[#031622]'>
          If your dentist uses it, so do we. Every product we make puts professional-quality ingredients in your hands, to help you be your own version of perfect.
          </p>
          <button className='text-[#031622]  px-5 py-2 rounded-3xl border border-[#031622]'>See the proof</button>
        </div>
      </div>
      <div className='w-100 px-48 py-20 flex '>
      <div data-aos={'fade-right'} className='lg:w-96 xl:w-96 w-full lg:absolute h-100 p-8 bg-[#FBEED7] lg:bottom-44 lg:left-52 xl:bottom-44 xl:left-52 hidden lg:block'>
          <h1 className='text-[#031622] text-2xl font-medium pt-10'>
          30 days, risk-free
          </h1>
          <p className='my-10 pb-10 text-[#031622]'>
          Here’s the deal. Come smile with us for a month. See how you feel. If it’s anything short of excellent, you get every penny back. That’s our promise to you. And it’s that simple.          </p>
          <button className='text-[#031622]  px-5 py-2 rounded-3xl border border-[#031622]'>Our guarantee</button>
        </div>
        <img width={1000} className='ml-64 lg:block xl:block md:hidden hidden' src={require('../assets/woman.png')} alt="" />
      </div>
    </div>
  )
}
