"use client"

import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faXmark, faSeedling  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareFacebook, faInstagram, faSkype, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import Aboutheader from '@/components/Aboutheader';
import Productfooter from '@/components/Productfooter';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {

    const [isVisible, setIsVisible] = useState(true);

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

        <Aboutheader />

        {/* Section 1 */}
        <div className='p-[100px] flex justify-between w-full items-center'>
            <h2 className='leading-[50.4px] text-[36px] clash w-[704px] text-[#2a254b]'>A brand built on the love of craftmanship, quality and outstanding customer service</h2>
            <button type='button' className='bg-[#f9f9f9] text-[#2a254b] satoshi px-[32px] py-[16px] rounded-[5px]'>View our products</button>
        </div>

        {/* Section 2 */}
        <div className='px-[100px] py-[50px] flex justify-between w-full items-center'>
            <div className='bg-[#2a254b] text-white flex flex-col gap-[20px] w-[634px] h-[478px] p-[50px]'>
                <h2 className='clash text-[32px]'>It started with a small idea</h2>
                <p className='text-[18px] satoshi leading-[24.3px] w-[495px]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                <button type='button' className='bg-[#f9f9f9]/15 text-white w-[175px] mt-[150px] px-[32px] py-[16px]'>View collection</button>
            </div>
            <div>
                <Image src='/images/about-img1.png' width={630} height={478} alt='Image 1' />
            </div>
        </div>

        {/* Section 3 */}
        <div className='flex justify-between items-center bg-[#f9f9f9] w-full'>
        
            {/* Left */}
            <div>
                <Image src='/images/about-img2.png' width={720} height={603} alt='Get in Touch' />
            </div>

            {/* Right */}
            <div className='p-[100px] flex flex-col gap-[25px]  w-[720px]'>
                  <h2 className='text-[24px] text-[#2a254b] clash leading-[33.6px]'>Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite</h2>
                  <p className='text-[16px] text-[#505977] satoshi'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                  <p className='text-[16px] text-[#505977] satoshi'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        
                  <button type='button' className='bg-[#fff] satoshi px-[32px] py-[16px] w-[160px] mt-[80px]'>Get in touch</button>
            </div> 
        </div>

        {/* Section 4 */}
        <div className='p-[100px] flex flex-col items-center gap-[50px]'>
        
                {/* first */}
                <div>
                  <h2 className='clash text-[24px] text-[#2a254b]'>What makes our brand different</h2>
                </div>
        
                {/* Second */}
                <div className='flex justify-between w-full items-center '>
        
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

        {/* Section 5 */}
        <div className='p-[50px] bg-[#f9f9f9]'>
            <div className='bg-white p-[100px] text-[#2a254b] flex flex-col items-center gap-[16px]'>
            <h2 className='text-[36px] clash'>Join the club and get the benefits</h2>
            <p className='text-[16px] leading-[24px] satoshi w-[470px] text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            <div className='flex w-[472px] h-[56px] justify-center items-center mt-[50px]'>
                <input type="email" placeholder='your@email.com' className='w-[354px] bg-[#f9f9f9] p-[16px] rounded-[5px]'/>
                <button type='submit' className='bg-[#2a254b] text-white satoshi px-[32px] py-[16px] w-[130px]'>Sign up</button>
            </div>
            </div>
      </div>

      {/* Section 6 */}
      <div className='p-[100px] bg-[#2a254b] text-white flex justify-between w-full border-b-[2px] border-[#4e4d93]'>

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
          <Link href='' className='text-[14px] satoshi'>New arrivals</Link>
          <Link href='' className='text-[14px] satoshi'>Best sellers</Link>
          <Link href='' className='text-[14px] satoshi'>Recently viewed</Link>
          <Link href='' className='text-[14px] satoshi'>Popular this week</Link>
          <Link href='' className='text-[14px] satoshi'>All products</Link>
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
          <Link href='' className='text-[14px] satoshi'>About us</Link>
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

export default About