import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Products() {
  const dispatch = useDispatch();
  const { product1, product2, product3 } = useSelector(state => state);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div id='products' className='w-full pt-28'>
      <p  className='text-center text-[#225B93] text-xl my-5'>
        Our Products
      </p>
      <h1 data-aos={'fade-up'} className='text-center text-5xl  font-normal'>Find the right products for your smile</h1>

      {product1.map((item, index) => (
        <div data-aos={'fade-left'} className='w-[100%] h-100 lg:px-28 md:px-28 xl:px-28 px-10 flex lg:flex-row md:flex-row xl:flex-row flex-col mt-10 mb-32' key={index}>
          <div className='lg:w-[38%] xl:w-[30%] w-[100%] text-center lg:block xl:block sm:hidden md:hidden'>
            <img className='h-100 w-[100%]' width={500} src={item.img1} alt='' />
            <h1 className='-mt-72 text-6xl text-white font-thin'>{item.name}</h1>
            <button className='bg-[#225B93] text-white rounded-3xl border-none mt-20 py-3 px-8 lg:mb-0 xl:mb-0 md:mb-0 mb-10' onClick={() => addToCart(item)}>Shop whitening</button>
          </div>
          <div className='lg:w-[63%] md:w-[100%] xl:w-[70%] w-[100%] bg-white lg:px-20 md:px-20 xl:px-20 px-10 py-7'>
            <h1 className='text-3xl'>{item.title}</h1>
            <p>{item.price}</p>
            <img className='m-auto -mt-10' width={400} src={item.img2} alt='' />
            <button onClick={() => addToCart(item)} className='bg-[#225B93] py-2 w-[100%] text-white rounded-3xl border-none'>Add To Cart</button>
          </div>
        </div>
      ))}
       {product2.map((item, index) => (
        <div data-aos={'fade-right'} className='w-[100%] h-100 lg:px-28 md:px-28 xl:px-28 px-10 flex lg:flex-row md:flex-row xl:flex-row flex-col mt-10 mb-32' key={index}>
            <div className='lg:w-[63%] md:w-[100%] xl:w-[70%] w-[100%] bg-white lg:px-20 md:px-20 xl:px-20 px-10 py-7'>
            <h1 className='text-3xl'>{item.title}</h1>
            <p>{item.price}</p>
            <img className='m-auto' width={300} src={item.img2} alt='' />
            <button onClick={() => addToCart(item)} className='bg-[#225B93] mt-16 py-2 w-[100%] text-white rounded-3xl border-none'>Add To Cart</button>
          </div>
          <div className='lg:w-[38%] xl:w-[30%] lg:block xl:block md:hidden sm:hidden w-[100%] text-center'>
            <img width={500} className='h-100 w-[100%]' src={item.img1} alt='' />
            <h1 className='-mt-72 text-6xl text-white font-thin'>{item.name}</h1>
            <button onClick={() => addToCart(item)} className='bg-[#36608a] text-white rounded-3xl border-none mt-20 py-3 px-8 lg:mb-0 xl:mb-0 md:mb-0 mb-10'>Shop whitening kit</button>
          </div>
        </div>
      ))}

      {product3.map((item, index) => (
        <div data-aos={'fade-left'} className='w-[100%] h-100 lg:px-28 md:px-28 xl:px-28 px-10 flex lg:flex-row md:flex-row xl:flex-row flex-col mt-10 mb-32' key={index}>
          <div className='lg:w-[38%] xl:w-[30%] md:hidden lg:block xl:block sm:hidden w-[100%] text-center'>
            <img className='h-100 w-[100%]' width={500} src={item.img1} alt='' />
            <h1 className='-mt-72 text-6xl text-white font-thin'>{item.name}</h1>
            <button onClick={() => addToCart(item)} className='bg-[#36608a] text-white rounded-3xl border-none mt-20 py-3 px-8 lg:mb-0 xl:mb-0 md:mb-0 mb-10'>Shop whitening kit</button>
          </div>
          <div className='lg:w-[63%] md:w-[100%] xl:w-[70%] w-[100%] bg-white lg:px-20 md:px-20 xl:px-20 px-10 py-7'>
            <h1 className='text-3xl'>{item.title}</h1>
            <p>{item.price}</p>
            <img className='m-auto'  width={250} src={item.img2} alt='' />
            <button onClick={() => addToCart(item)} className='bg-[#225B93] mt-16 py-2 w-[100%] text-white rounded-3xl border-none'>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
