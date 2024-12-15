"use client"

import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faXmark } from '@fortawesome/free-solid-svg-icons';
import ProductListingheader from '@/components/ProductListingheader';
import Image from 'next/image';

const ProductListing = () => {

    const [isVisible, setIsVisible] = useState(true);

    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1)
    }
   
  }

  return (
    <>
    {isVisible && (
        <div>
        {/* Promo */}
        <div className='bg-[#2a254b] text-white text-center flex justify-between items-center py-[10px] px-[30px] w-full'>
            <p></p>
            <p className='text-[14px] satoshi flex items-center justify-center'><FontAwesomeIcon icon={faTruck} className='size-[15px] inline-flex  mr-[10px]' />Free delivery on all orders over £50 with code easter checkout</p>
            <button type='button' onClick={() => setIsVisible(false)}><FontAwesomeIcon icon={faXmark} className='size-[15px]' /></button>
        </div>
    </div>
    )}

    <ProductListingheader />

    {/* Section 1 */}
    <div className='flex justify-center w-full items-center'>

        {/* Left */}
        <div>
            <Image src='/images/productimg1.png' width={721} height={759} alt='Product Image' />
        </div>

        {/* Right */}
        <div className='p-[100px] '>
            <h1 className='text-[36px] clash text-[#2a254b]'>The Dandy Chair</h1>
            <h3 className='text-[24px] satoshi text-[#12131a] mb-[30px]'>&pound;250</h3>
            <div className='w-[522px] flex flex-col gap-[20px]'>
                <h4 className='text-[16px] clash text-[#2a254b]'>Description</h4>
                <p className='text-[16px] satoshi text-[#505977]'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                <ul className='text-[16px] list-disc satoshi text-[#505977] ml-[30px]'>
                    <li className='list-item'>Premium material</li>
                    <li className='list-item'>Handmade upholstery</li>
                    <li className='list-item'>Quality timeless classic</li>
                </ul>
            </div>
            <div className='my-[50px]'>
                <h4 className='clash text-[16px] text-[#2a254b]'>Dimensions</h4>
                <table className='p-[20px]'>
                    <thead>
                        <tr className='clash text-[#2a254b] text-[14px]'>
                            <th className='p-[10px]'>Height</th>
                            <th className='p-[10px]'>Width</th>
                        <   th className='p-[10px]'>Depth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='satoshi text-[#505977]'>
                            <td className='p-[10px]'>110cm</td>
                            <td className='p-[10px]'>75cm</td>
                            <td className='p-[10px]'>50cm</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='py-[50px] pt-0 flex justify-between w-[602px] items-center'>
                <div className='flex justify-center items-center'>
                    <h3 className='clash text-[#2a254b]'>Amount:</h3>
                    <div className='bg-[#f9f9f9] p-[15px] ml-[15px] flex justify-between w-[122px] rounded-sm'>
                        <button type='button' onClick={decrement} className='text-[#cac6da]'>-</button>
                        <p className='satoshi'>{count}</p>
                        <button type='button' onClick={increment} className='text-[#cac6da]'>+</button>
                    </div>
                </div>
                <button className='bg-[#2a254b] text-white satoshi w-[143px] py-[16px] px-[32px]'>Add to cart</button>
            </div>
        </div>
    </div>

    {/* Section 2 */}
    <div>
        
    </div>




    </>
  )
}

export default ProductListing