import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Basket() {
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch()
  function Delete(id) {
    dispatch({ type: 'DELETE_FROM_CART', payload: id })
  }
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <div>
      <div className='flex items-center '>
        <Link to={"/"}>
          <button className='text-3xl  ml-5 bg-gray-100 py-2 lg:px-4 px-2 rounded-lg  text-[#08263F] bg:blur-md items-center flex gap-2' ><ArrowLeftOutlined className=' text-[#08263F] text-xl' />Back</button>
        </Link>
        <h1 className='text-5xl lg:ml-[28%] xl:ml-[30%] md:ml-[22%] ml-5 text-[#08263F] my-10'>Shopping Basket</h1>
      </div>
      {basket.length === 0 ? (
        <div className='w-[100%] h-[100vh] bg-[white] -mt-32'>
          <img data-aos={'fade-right'} className='pt-32 lg:ml-[33%] xl:ml-[35%] ml-10 md:ml-[22%] ' width={550} src={require('../assets/empty-cart-4816550-4004141.webp')} alt='' />
          <h1 data-aos={'fade-down'} className='text-center text-5xl xl:mt-10 lg:mt-0 md:mt-32 text-[#08263F] font-thin  '>Your basket is empty.</h1>
        </div>
      ) : (
        <ul>
              {basket.map((item, index) => (
        <div data-aos={'fade-left'} className='w-[100%] h-100 lg:px-28 md:px-28 xl:px-28 px-10 flex lg:flex-row md:flex-row xl:flex-row flex-col mt-10 mb-32' key={index}>
          <div className='lg:w-[38%] xl:w-[30%] w-[100%] text-center lg:block xl:block sm:hidden md:hidden'>
            <img className='h-100 w-[100%]' width={500} src={item.img1} alt='' />
            <h1 className='-mt-72 text-6xl text-white font-thin'>{item.name}</h1>
            <Link to={"/"}>
                  <button className='bg-[#36608a] text-white rounded-3xl border-none mt-20 py-3 px-8 lg:mb-0 xl:mb-0 md:mb-0 mb-10'>Shop whitening kit</button>
                </Link>          </div>
          <div className='lg:w-[63%] md:w-[100%] xl:w-[70%] w-[100%] bg-white lg:px-20 md:px-20 xl:px-20 px-10 flex flex-col lg:gap-5 xl:gap-1 xl:py-2 lg:py-5 '>
            <h1 className='text-3xl'>{item.title}</h1>
            <p>{item.price}</p>
            <img className='m-auto -mt-10' width={400} src={item.img2} alt='' />
            <button onClick={() => Delete(item.id)} className='bg-[#225B93] py-2 w-[100%] mt-5  text-white rounded-3xl border-none'>Delete from Cart</button>
          </div>
        </div>
      ))}
        </ul>
      )}
    </div>
  );
}
