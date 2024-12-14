import HomeHeader from '@/components/Homeheader'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import Homefooter from '@/components/Homefooter';

const Home = () => {
  return (
    <div className='my:w-[1519.5px] sm:w-[320px]'>
      <HomeHeader />

      {/* Section 1 */}
      <div className='p-[100px] w-full flex justify-center items-center'>

        {/* Left */}
        <div className='bg-[#2A254B] text-white flex flex-col items-start p-[50px] h-[584px] justify-between'>

          {/* Upper */}
          <div className=' flex flex-col gap-[30px] w-[513px]'>
            <h1 className='text-[32px] leading-[44.8px] clash'>The furniture brand for the future, with timeless designs</h1>
            <button type='button' className='satoshi text-[16px] bg-[#5B5676] px-[30px] py-[16px] w-[170px]'>View collection</button>
          </div>

          {/* Lower */}
          <div className='text-[18px] satoshi w-[602px]'>
            <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
          </div>
        </div>

        {/* Right */}
        <div>
          <Image src='/images/Right Image.png' width={520} height={584} alt='Right Image' />
        </div>
      </div>

      {/* Section 2 */}
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

      {/* Section 3 */}
      <div className='p-[100px] flex flex-col gap-[50px]'>

        {/* first */}
        <div>
          <h2 className='text-[32px] clash text-[#2a254b]'>New ceramics</h2>
        </div>

        {/* Second */}
        <div className='flex justify-between w-full text-[#2a254b]'>

          {/* 1 */}
          <div className='flex flex-col gap-[10px] w-[305px]'>
            <Image src='/images/product1.png' width={305} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>The Dandy chair</p>
            <p className='text-[18px] satoshi'>&pound;250</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px] w-[305px]'>
            <Image src='/images/product2.png' width={305} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>Rustic Vase Set</p>
            <p className='text-[18px] satoshi'>&pound;155</p>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[10px] w-[305px]'>
            <Image src='/images/product3.png' width={305} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>The Silky Vase</p>
            <p className='text-[18px] satoshi'>&pound;125</p>
          </div>

          {/* 4 */}
          <div className='flex flex-col gap-[10px] w-[305px]'>
            <Image src='/images/product4.png' width={305} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>The Lucy Lamp</p>
            <p className='text-[18px] satoshi'>&pound;399</p>
          </div>
        </div>

        {/* button */}
        <button type='button' className='text-[16px] satoshi bg-[#f9f9f9] w-[170px] px-[32px] py-[16px] rounded-[5px]  m-[auto]'>View collection</button>
      </div>

      {/* Section 4 */}
      <div className='p-[100px] flex flex-col gap-[50px]'>

        {/* first */}
        <div>
          <h2 className='text-[32px] clash text-[#2a254b]'>Our popular products</h2>
        </div>

        {/* Second */}
        <div className='flex justify-between w-full text-[#2a254b]'>

          {/* 1 */}
          <div className='flex flex-col gap-[10px] w-[630px]'>
            <Image src='/images/product5.png' width={630} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>The Poplar suede sofa</p>
            <p className='text-[18px] satoshi'>&pound;980</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px] w-[305px]'>
            <Image src='/images/product1.png' width={305} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>The Dandy chair</p>
            <p className='text-[18px] satoshi'>&pound;250</p>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[10px] w-[305px]'>
            <Image src='/images/product6.png' width={305} height={375} alt='Product Card' />
            <p className='text-[20px] clash'>The Dandy chair</p>
            <p className='text-[18px] satoshi'>&pound;250</p>
          </div>
        </div>

        {/* button */}
        <button type='button' className='text-[16px] satoshi bg-[#f9f9f9] w-[170px] px-[32px] py-[16px] rounded-[5px]  m-[auto]'>View collection</button>
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
      <div className='flex justify-between items-center w-full'>

        {/* Left */}
        <div className='p-[100px] flex flex-col gap-[25px] w-[720px]'>
          <h2 className='text-[24px] text-[#2a254b] clash leading-[33.6px]'>From a studio in London to a global brand with over 400 outlets</h2>
          <p className='text-[16px] text-[#505977] satoshi'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
          <p className='text-[16px] text-[#505977] satoshi'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

          <button type='button' className='bg-[#f9f9f9] satoshi px-[32px] py-[16px] w-[160px] rounded-[5px] mt-[80px]'>Get in touch</button>
        </div>

        <div>
          <Image src='/images/touch-img.png' width={720} height={603} alt='Get in Touch' />
        </div>
      </div>

      {/* Section 7 */}
      <div className='p-[100px] bg-[#2a254b] text-white flex justify-between w-full border-b-[2px] border-[#4e4d93]'>

        {/* 1 */}
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

        {/* 4 */}
        <div className='flex flex-col w-[627px]'>
          <h2 className='text-[16px] clash'>Join our mailing list</h2>
          <div className='flex w-[472px] h-[56px] justify-center items-center mt-[50px]'>
            <input type="email" placeholder='your@email.com' className='w-[354px] bg-[#4f4978] p-[16px] '/>
            <button type='submit' className='bg-[#fff] text-[#2a254b] satoshi px-[32px] py-[16px] w-[130px]'>Sign up</button>
          </div>
        </div>
      </div>

      <Homefooter />
    </div>
  )
}

export default Home