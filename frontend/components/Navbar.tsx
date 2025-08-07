'use client'

import React, { useState } from 'react';
import { logo } from '@/app/utils';
import Image from 'next/image';
import { FaOpencart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

const Navbar = () => {
  const cartCount = 3;
  const favCount = 2;

  const [showCart, setShowCart] = useState(false);
  const [showFav, setShowFav] = useState(false);

  const cartItems = [
    { id: 1, name: 'Shoes', price: '$99' },
    { id: 2, name: 'Bag', price: '$49' },
    { id: 3, name: 'T-Shirt', price: '$29' },
  ];

  const favItems = [
    { id: 1, name: 'Watch', price: '$199' },
    { id: 2, name: 'Jacket', price: '$79' },
  ];

  return (
    <div className='p-1'>
      <div className='flex justify-between items-center cursor-pointer relative'>

        <Link href='/'>
          <Image src={logo} alt='Logo' width={60} height={60} />
        </Link>

        <div className='flex w-[20%] justify-around relative'>

          {/* Cart */}
          <div className="relative" onClick={() => {
            setShowCart(!showCart);
            setShowFav(false);
          }}>
            <FaOpencart size={25} className='cursor-pointer' />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )}
            {showCart && (
              <div className="absolute top-7 right-0 bg-white border shadow-md rounded-md p-2 w-52 z-10">
                <p className="font-bold mb-1">Cart Items</p>
                {cartItems.map(item => (
                  <div key={item.id} className="text-sm border-b py-1">
                    {item.name} - {item.price}
                  </div>
                ))}
              </div>
            )}
          </div>

          

          {/* Favorites */}
          <div className="relative" onClick={() => {
            setShowFav(!showFav);
            setShowCart(false);
          }}>
            <MdFavoriteBorder size={25} className='cursor-pointer' />
            {favCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded-full">
                {favCount}
              </span>
            )}
            {showFav && (
              <div className="absolute top-7 right-0 bg-white border shadow-md rounded-md p-2 w-52 z-10">
                <p className="font-bold mb-1">Favorite Items</p>
                {favItems.map(item => (
                  <div key={item.id} className="text-sm border-b py-1">
                    {item.name} - {item.price}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <Link href={'/profile'}>
            <CgProfile size={25} className='cursor-pointer ml-3' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
