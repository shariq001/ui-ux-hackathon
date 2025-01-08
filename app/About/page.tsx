"use client"

import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faXmark, faSeedling  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareFacebook, faInstagram, faSkype, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck, faCreditCard } from '@fortawesome/free-regular-svg-icons';

import Productfooter from '@/components/Productfooter';
import Image from 'next/image';
import Link from 'next/link';
import AboutHeader from '@/components/AboutHead';





const About = () => {

    const [isVisible, setIsVisible] = useState(true);

  return (
    <>
        {isVisible && (
            <div className='my:min-w-[1440px]'>
                {/* Promo */}
                <div className='bg-[#2a254b] my:min-w-[1440px]  text-white text-center flex justify-between items-center py-[10px] px-[30px] w-full'>
                    <p></p>
                    <p className='text-[14px] satoshi flex items-center justify-center'><FontAwesomeIcon icon={faTruck} className='size-[15px] inline-flex  mr-[10px]' />Free delivery on all orders over £50 with code easter checkout</p>
                    <button type='button' onClick={() => setIsVisible(false)}><FontAwesomeIcon icon={faXmark} className='size-[15px]' /></button>
                </div>
            </div>
        )}

        <AboutHeader />

        {/* Section 1 */}
        <div className='my:min-w-[1440px] my:p-[100px] flex justify-between my:flex-row w-full items-center sm:px-[20px] sm:py-[50px] sm:flex-col sm:gap-[50px]'>
            <h2 className='leading-[50.4px] my:text-[36px] clash my:w-[704px] text-[#2a254b] sm:text-[32px] sm:w-[342px]'>A brand built on the love of craftmanship, quality and outstanding customer service</h2>
            <Link href='/Products'><button type='button' className='text-[16px] satoshi bg-[#f9f9f9] my:w-[170px] px-[32px] py-[16px] rounded-[5px] my:m-[auto] sm:w-full'>View collection</button></Link>
        </div>

        {/* Section 2 */}
        <div className='my:w-[1440px] my:px-[100px] py-[50px] flex my:flex-row justify-between w-full items-center sm:flex-col sm:px-[20px] sm:gap-[30px]'>
            <div className='bg-[#2a254b] text-white flex flex-col gap-[20px] my:w-[634px] my:h-[478px] my:p-[50px] sm:px-[20px] sm:py-[30px] sm:w-[342px] sm:h-[281px]'>
                <h2 className='clash my:text-[32px] sm:text-[20px]'>It started with a small idea</h2>
                <p className='my:text-[18px] satoshi leading-[24.3px] my:w-[495px] sm:text-[14px] sm:w-[278px]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                <Link href='/Products' ><button type='button' className='text-[16px] satoshi bg-[#f9f9f9]/15 my:w-[170px] px-[32px] py-[16px] sm:w-full'>View collection</button></Link>
            </div>
            <div>
                <Image src='/images/about-img1.png' width={630} height={478} alt='Image 1' className='sm:w-[342px] sm:h-[259px] my:w-[630px] my:h-[478px]'/>
            </div>
        </div>

        {/* Section 3 */}
        <div className='my:min-w-[1440px] flex justify-between my:flex-row items-center bg-[#f9f9f9] w-full sm:flex-col'>
        
            {/* Left */}
            <div>
                <Image src='/images/about-img2.png' width={720} height={603} alt='Get in Touch' className='sm:w-[390px] sm:h-[358px] my:w-[720px] my:h-[603px]'/>
            </div>

            {/* Right */}
            <div className='my:p-[100px] flex flex-col gap-[25px]  my:w-[720px] sm:px-[20px] sm:py-[50px] sm:w-full'>
                  <h2 className='my:text-[24px] text-[#2a254b] clash leading-[33.6px] sm:text-[20px]'>Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite</h2>
                  <p className='my:text-[16px] text-[#505977] satoshi sm:text-[14px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                  <p className='my:text-[16px] text-[#505977] satoshi sm:text-[14px]'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        
                  <Link href='/About'><button type='button' className='text-[16px] satoshi bg-[#fff] my:w-[170px] px-[32px] py-[16px] rounded-[5px] my:m-[auto] sm:w-full'>Get in touch</button></Link>
            </div> 
        </div>

        {/* Section 4 */}
        <div className='my:min-w-[1440px] my:p-[100px] flex flex-col my:items-center gap-[50px] sm:px-[20px] sm:py-[50px] sm:items-start'>
        
                {/* first */}
                <div>
                  <h2 className='clash my:text-[24px] text-[#2a254b] sm:text-[20px]'>What makes our brand different</h2>
                </div>
        
                {/* Second */}
                <div className='flex my:flex-row justify-between w-full my:items-center sm:flex-col sm:gap-[50px] sm:items-start'>
        
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
        <div className='my:min-w-[1440px] my:p-[50px] bg-[#f9f9f9] sm:px-[0px]'>
            <div className='bg-white my:p-[100px] text-[#2a254b] flex flex-col my:items-center gap-[16px] sm:px-[20px] sm:items-start'>
            <h2 className='my:text-[36px] clash sm:text-[20px]'>Join the club and get the benefits</h2>
            <p className='text-[16px] leading-[24px] satoshi my:w-[470px] my:text-center sm:text-[14px] sm:w-full sm:text-left'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            <div className='flex my:w-[472px] h-[56px] justify-center items-center mt-[50px] sm:w-full'>
                <input type="email" placeholder='your@email.com' className='w-[354px] bg-[#f9f9f9] p-[16px] rounded-[5px]'/>
                <button type='submit' className='bg-[#2a254b] text-white my:text-[16px] satoshi my:px-[32px] py-[16px] my:w-[130px] sm:text-[13px] sm:px-[10px] sm:py-[16px] sm:w-[118px]'>Sign up</button>
            </div>
            </div>
      </div>

      {/* Section 6 */}
      <div className='my:min-w-[1440px] my:p-[100px] bg-[#2a254b] text-white flex justify-between my:flex-row w-full border-b-[2px] border-[#4e4d93] sm:px-[20px] sm:py-[50px] sm:flex-col sm:gap-[50px]'>

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

export default About