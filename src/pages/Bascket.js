import { CloseCircleOutlined } from '@ant-design/icons';
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
          <CloseCircleOutlined className='text-4xl ml-5 text-[#08263F]'/>
        </Link>
        <h1 className='text-5xl lg:ml-[33%] xl:ml-[33%] ml-10 text-[#08263F] my-10'>Shopping Basket</h1>

      </div>
      {basket.length === 0 ? (
        <div className='w-[100%] h-[100vh] bg-[white] -mt-32'>
          <img data-aos={'fade-right'} className='pt-32 lg:ml-[35%] xl:ml-[35%] ml-[10%] ' width={550} src={require('../assets/empty-cart-4816550-4004141.webp')} alt='' />
          <h1 data-aos={'fade-down'} className='text-center text-5xl mt-10 text-[#08263F] font-thin  '>Your basket is empty.</h1>
        </div>
      ) : (
        <ul>
          {basket.map((item, index) => (
             <div data-aos={'fade-left'} className='w-[100%] h-100 lg:px-28 md:px-28 xl:px-28 px-10 flex lg:flex-row md:flex-row xl:flex-row flex-col mt-10 mb-32' key={item.id}>
             <div className='lg:w-[30%] xl:w-[30%] md:w-[100%] w-[100%] text-center'>
               <img className='h-100 w-[100%]' src={item.img1} alt='' />
               <h1 className='-mt-72 text-6xl text-white font-thin'>{item.name}</h1>
               <button  className='bg-[#36608a] text-white rounded-3xl border-none mt-20 py-3 px-8 lg:mb-0 xl:mb-0 md:mb-0 mb-10'>Shop whitening kit</button>
             </div>
             <div className='lg:w-[70%] md:w-[100%] xl:w-[70%] w-[100%] bg-white lg:px-20 md:px-20 xl:px-20 px-10 py-7'>
               <h1 className='text-3xl'>{item.title}</h1>
               <p>{item.price}</p>
               <img className='m-auto' width={300} src={item.img2} alt='' />
               <button onClick={() => Delete(item.id)} className='bg-[#18317c] mt-16 py-2 w-[100%] text-white rounded-3xl border-none'>Delete from cart</button>
             </div>
           </div>
          ))}
        </ul>
      )}
    </div>
  );
}
