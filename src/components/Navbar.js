import React, { useState, useEffect } from 'react';
import logo from '../assets/logoBlack.svg';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrolling2, setIsScrolling2] = useState(false);

  const basket = useSelector(state => state.basket);
  const basketLength = basket.length || 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
      setIsScrolling2(window.scrollY >= 700);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-aos={'fade-down'} className={`flex z-20 lg:px-28 xl:px-28 px-10 w-full items-center justify-between h-20 fixed ${isScrolling ? 'backdrop-blur-lg' : ''}`}>
<a href='#home' className='cursor-pointer'>            <img className='mt-6' src={logo} alt="Logo" />
</a>
      <div className={`lg:flex gap-20 md:flex hidden ${isScrolling2 ? 'text-black' : 'text-white'}`}>
        <a className='hover:text-blue-800' href="#products">Products</a>
        <a className='hover:text-blue-800' href="#our_story">Our Story</a>
        <a className='hover:text-blue-800' href="#reviews">Reviews</a>
        <a className='hover:text-blue-800' href="#virtual_mirror">Virtual Mirror</a>
      </div>
      <Link to={'/shopping'}>
        <button>
          <ShoppingCartOutlined className={`text-2xl z-20 ${isScrolling2 ? 'text-black' : 'text-white'}`} />
          {basketLength > 0 && (
            <div className='badge bg-[#FED097] w-4 h-4 p-2.5 rounded-full absolute top-5 right-6  lg:right-24 xl:right-24 flex items-center justify-center'>
              {basketLength}
            </div>
          )}
        </button>
      </Link>
    </div>
  );
}
