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
            <div className='w-[100%] h-[63vh] px-28 flex my-32' key={index}>
              <div className='w-[30%] text-center rounded-lg'>
                <img className='h-[63vh] w-[100%]' src={item.img1} alt='' />
                <h1 className='-mt-72 text-6xl text-white font-thin'>{item.name}</h1>
                <button className='bg-[#36608a] text-white rounded-3xl border-none mt-20 py-3 px-8'>Shop whitening kit</button>
              </div>
              <div className='w-[70%] bg-[white] px-20 py-7'>
                <h1 className='text-3xl'>{item.title}</h1>
                <p>{item.price}</p>
                <img className='m-auto' width={250} src={item.img2} alt='' />
                <button onClick={() => Delete(item.id)} className='bg-[#18317c] mt-16 py-2 w-[100%] text-white rounded-3xl border-none'>Delete from cart</button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
