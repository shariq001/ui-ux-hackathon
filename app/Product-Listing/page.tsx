"use client"

import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faXmark, faCreditCard, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareFacebook, faInstagram, faSkype, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import ProductListingheader from '@/components/ProductListingheader';
import Image from 'next/image';
import Link from 'next/link';
import Productfooter from '@/components/Productfooter';

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
        <div className='bg-[#2a254b] my:w-[1440px] text-white text-center flex justify-between items-center py-[10px] px-[30px] w-full'>
            <p></p>
            <p className='text-[14px] satoshi flex items-center justify-center'><FontAwesomeIcon icon={faTruck} className='size-[15px] inline-flex  mr-[10px]' />Free delivery on all orders over £50 with code easter checkout</p>
            <button type='button' onClick={() => setIsVisible(false)}><FontAwesomeIcon icon={faXmark} className='size-[15px]' /></button>
        </div>
    </div>
    )}

    <ProductListingheader />

    {/* Section 1 */}
    <div className='my:w-[1440px] flex justify-center my:flex-row w-full my:items-center sm:flex-col sm:items-start'>

        {/* Left */}
        <div>
            <Image src='/images/productimg1.png' width={721} height={759} alt='Product Image' className='sm:w-[390px] sm:h-[380px] my:w-[721px] my:h-[759px]'/>
        </div>

        {/* Right */}
        <div className='my:p-[100px] sm:px-[20px] sm:py-[50px]'>
            <h1 className='my:text-[36px] clash text-[#2a254b] sm:text-[24px]'>The Dandy Chair</h1>
            <h3 className='my:text-[24px] satoshi text-[#12131a] mb-[30px] sm:text-[20px]'>&pound;250</h3>
            <div className='my:w-[522px] flex flex-col gap-[20px] sm:w-[280px]'>
                <h4 className='text-[16px] clash text-[#2a254b]'>Description</h4>
                <p className='my:text-[16px] satoshi text-[#505977] sm:text-[14px]'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                <ul className='my:text-[16px] list-disc satoshi text-[#505977] ml-[30px] sm:text-[14px]'>
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

            <div className='py-[50px] pt-0 flex my:flex-row justify-between my:w-[602px] my:items-center sm:flex-col sm:items-start sm:gap-[20px] sm:w-[280px]'>
                <div className='flex justify-center items-center'>
                    <h3 className='clash text-[#2a254b]'>Amount:</h3>
                    <div className='bg-[#f9f9f9] p-[15px] ml-[15px] flex justify-between w-[122px] rounded-sm'>
                        <button type='button' onClick={decrement} className='text-[#cac6da]'>-</button>
                        <p className='satoshi'>{count}</p>
                        <button type='button' onClick={increment} className='text-[#cac6da]'>+</button>
                    </div>
                </div>
                <Link href='/Cart'><button className='bg-[#2a254b] text-white satoshi w-[143px] py-[16px] px-[32px]'>Add to cart</button></Link>
            </div>
        </div>
    </div>

    {/* Section 2 */}
    <div className='my:w-[1440px] my:p-[100px] flex flex-col gap-[50px] sm:px-[20px] sm:py-[50px]'>
    
            {/* first */}
            <div>
              <h2 className='my:text-[32px] clash text-[#2a254b] sm:text-[20px]'>You might also like</h2>
            </div>
    
            {/* Second */}
            <div className='flex my:flex-row justify-between w-full text-[#2a254b] sm:flex-wrap'>
    
              {/* 1 */}
              <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px]'>
                <Image src='/images/product1.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px]'/>
                <p className='text-[20px] clash'>The Dandy chair</p>
                <p className='text-[18px] satoshi'>&pound;250</p>
              </div>
    
              {/* 2 */}
              <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px]'>
                <Image src='/images/product2.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px]'/>
                <p className='text-[20px] clash'>Rustic Vase Set</p>
                <p className='text-[18px] satoshi'>&pound;155</p>
              </div>
    
              {/* 3 */}
              <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] sm:mt-[40px] my:mt-0'>
                <Image src='/images/product3.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px]'/>
                <p className='text-[20px] clash'>The Silky Vase</p>
                <p className='text-[18px] satoshi'>&pound;125</p>
              </div>
    
              {/* 4 */}
              <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] sm:mt-[40px] my:mt-0'>
                <Image src='/images/product4.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px]'/>
                <p className='text-[20px] clash'>The Lucy Lamp</p>
                <p className='text-[18px] satoshi'>&pound;399</p>
              </div>
            </div>
    
            {/* button */}
            <Link href='/Products' className='m-[auto]'><button type='button' className='text-[16px] satoshi bg-[#f9f9f9] my:w-[170px] px-[32px] py-[16px] rounded-[5px] m-[auto] sm:w-full'>View collection</button></Link>
    </div>

    {/* Section 3 */}
    <div className='my:w-[1440px] my:p-[100px] flex flex-col my:items-center gap-[50px] sm:px-[20px] sm:py-[50px] sm:items-start'>
    
            {/* first */}
            <div>
              <h2 className='clash my:text-[24px] text-[#2a254b] sm:text-[20px]'>What makes our brand different</h2>
            </div>
    
            {/* Second */}
            <div className='flex my:justify-between my:flex-row w-full my:items-center sm:flex-col sm:items-start sm:gap-[50px]'>
    
              {/* 1 */}
              <div className='flex flex-col gap-[15px] w-[270px] text-[#2a254b]'>
                <FontAwesomeIcon icon={faTruck} className='size-[24px]' />
                <h2 className='text-[20px] clash'>Next day as standard</h2>
                <p className='satoshi text-[16px] leading-[24px]'>Order before 3pm and get your order the next day as standard</p>
              </div>
    
              {/* 2 */}
              <div className='flex flex-col gap-[15px] w-[270px] text-[#2a254b]'>
                <FontAwesomeIcon icon={faCircleCheck} className='size-[24px]' />
                <h2 className='text-[20px] clash'>Made by true artisans</h2>
                <p className='satoshi text-[16px] leading-[24px]'>Handmade crafted goods made with real passion and craftmanship</p>
              </div>
    
              {/* 3 */}
              <div className='flex flex-col gap-[15px] w-[270px] text-[#2a254b]'>
                <FontAwesomeIcon icon={faCreditCard} className='size-[24px]' />
                <h2 className='text-[20px] clash'>Unbeatable prices</h2>
                <p className='satoshi text-[16px] leading-[24px]'>For our materials and quility you won&apos;t find better prices anywhere</p>
              </div>
    
              {/* 4 */}
              <div className='flex flex-col gap-[15px] w-[270px] text-[#2a254b]'>
                <FontAwesomeIcon icon={faSeedling} className='size-[24px]' />
                <h2 className='text-[20px] clash'>Recycled packaging</h2>
                <p className='satoshi text-[16px] leading-[24px]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
              </div>
            </div>
    </div>

    {/* Section 4 */}
    <div className=' my:w-[1440px] my:p-[50px] bg-[#f9f9f9] sm:px-[0px] sm:my-[30px] my:my-0'>
        <div className='bg-white my:p-[100px] text-[#2a254b] flex flex-col my:items-center gap-[16px] sm:px-[20px] sm:items-start'>
          <h2 className='my:text-[36px] clash sm:text-[20px]'>Join the club and get the benefits</h2>
          <p className='my:text-[16px] leading-[24px] satoshi my:w-[470px] my:text-center sm:text-[14px] sm:w-full sm:text-left'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className='flex my:w-[472px] h-[56px] justify-center items-center mt-[50px] sm:w-full'>
            <input type="email" placeholder='your@email.com' className='w-[354px] bg-[#f9f9f9] p-[16px] rounded-[5px]'/>
            <button type='submit' className='bg-[#2a254b] my:text-[16px] text-white satoshi my:px-[32px] py-[16px] my:w-[130px] sm:text-[13px] sm:px-[10px] sm:py-[16px] sm:w-[118px]'>Sign up</button>
          </div>
        </div>
    </div>

    {/* Section 5 */}
    <div className='my:w-[1440px] my:p-[100px] bg-[#2a254b] text-white flex my:flex-row justify-between w-full border-b-[2px] border-[#4e4d93] sm:px-[20px] sm:py-[50px] sm:flex-col sm:gap-[50px]'>

        {/* 1 */}
        <div className='w-[160px]'>
            <h2 className='clash text-[36px]'>Avion</h2>
            <p className='satoshi leading-[30.9px] text-[14px]'>21 New York Street <br /> New York City <br /> United States of America <br /> 432 34</p>
        </div>

        {/* 2 */}
        <div>
            <h2 className='clash text-[16px] mb-[15px]'>Social links</h2>
            <nav className='flex justify-center gap-[24px]'>
                <Link href=''><FontAwesomeIcon icon={faLinkedin} className='size-[24px] text-white' /></Link>
                <Link href=''><FontAwesomeIcon icon={faSquareFacebook} className='size-[24px] text-white' /></Link>
                <Link href=''><FontAwesomeIcon icon={faInstagram} className='size-[24px] text-white' /></Link>
                <Link href=''><FontAwesomeIcon icon={faSkype} className='size-[24px] text-white' /></Link>
                <Link href=''><FontAwesomeIcon icon={faTwitter} className='size-[24px] text-white' /></Link>
                <Link href=''><FontAwesomeIcon icon={faPinterest} className='size-[24px] text-white' /></Link>
            </nav>
        </div>

        {/* 2 */}
        <div className='w-[111px] flex flex-col gap-[12px]'>
          <h3 className='clash text-[16px]'>Menu</h3>
          <Link href='/Products' className='text-[14px] satoshi'>New arrivals</Link>
          <Link href='/Products' className='text-[14px] satoshi'>Best sellers</Link>
          <Link href='/Products' className='text-[14px] satoshi'>Recently viewed</Link>
          <Link href='/Products' className='text-[14px] satoshi'>Popular this week</Link>
          <Link href='/Products' className='text-[14px] satoshi'>All products</Link>
        </div>

        {/* 2 */}
        <div className='w-[84px] flex flex-col gap-[12px]'>
          <h3 className='clash text-[16px]'>Categoies</h3>
          <Link href='' className='text-[14px] satoshi'>Crockery</Link>
          <Link href='' className='text-[14px] satoshi'>Furniture</Link>
          <Link href='' className='text-[14px] satoshi'>Homeware</Link>
          <Link href='' className='text-[14px] satoshi'>Plant pots</Link>
          <Link href='' className='text-[14px] satoshi'>Chairs</Link>
          <Link href='' className='text-[14px] satoshi'>Crockery</Link>
        </div>

        {/* 3 */}
        <div className='w-[105px] flex flex-col gap-[12px]'>
          <h3 className='clash text-[16px]'>Our company</h3>
          <Link href='/About' className='text-[14px] satoshi'>About us</Link>
          <Link href='' className='text-[14px] satoshi'>Vacancies</Link>
          <Link href='' className='text-[14px] satoshi'>Contact us</Link>
          <Link href='' className='text-[14px] satoshi'>Privacy</Link>
          <Link href='' className='text-[14px] satoshi'>Returns policy</Link>
        </div>

        
      </div>

      <Productfooter />



    </>
  )
}

export default ProductListing