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
    <div className='my:min-w-[1440px] sm:min-w-[320px] md:min-w-[768px] lg:min-w-[1024px]'>
      <HomeHeader />

      {/* Section 1 */}
      <div className='my:p-[100px] my:w-full flex my:flex-row my:justify-center items-center sm:px-0 sm:flex-col sm:w-full md:flex-row lg:px-[50px]'>

        {/* Left */}
        <div className='bg-[#2A254B] text-white flex flex-col items-start p-[50px] my:h-[584px] sm:h-[550px] justify-between my:w-[656px] sm:w-full'>

          {/* Upper */}
          <div className=' flex flex-col gap-[30px] my:w-[513px] '>
            <h1 className='my:text-[32px] sm:text-[24px] my:leading-[44.8px] clash'>The furniture brand for the future, with timeless designs</h1>
            <Link href='/Products'><button type='button' className='satoshi text-[16px] bg-[#f9f9f9]/15 px-[30px] py-[16px] w-[170px]'>View collection</button></Link>
          </div>

          {/* Lower */}
          <div className='text-[18px] satoshi my:w-[502px] sm:w-[230px] md:w-[400px]'>
            <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
          </div>
        </div>

        {/* Right */}
        <div className='sm:hidden my:block md:block'>
          <Image src='/images/Right Image.png' width={520} height={584} alt='Right Image' className='my:w-[520px] my:h-[584px] md:h-[550px]'/>
        </div>
      </div>

      {/* Section 2 */}
      <div className='my:p-[100px] flex flex-col my:items-center gap-[50px] sm:items-start sm:px-[20px] sm:py-[50px] md:items-center '>

        {/* first */}
        <div>
          <h2 className='clash md:text-[32px] sm:text-[24px] text-[#2a254b]'>What makes our brand different</h2>
        </div>

        {/* Second */}
        <div className='flex justify-between lg:flex-row w-full lg:items-start sm:flex-col sm:items-start md:items-center sm:gap-[50px] lg:gap-0'>

          {/* 1 */}
          <div className='flex flex-col gap-[15px] my:w-[270px] text-[#2a254b] sm:w-full md:w-[400px] lg:w-[250px]'>
            <FontAwesomeIcon icon={faTruck} className='size-[24px]' />
            <h2 className='text-[20px] clash'>Next day as standard</h2>
            <p className='satoshi text-[16px] leading-[24px]'>Order before 3pm and get your order the next day as standard</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[15px] my:w-[270px] text-[#2a254b] sm:w-full md:w-[400px] lg:w-[250px]'>
            <FontAwesomeIcon icon={faCircleCheck} className='size-[24px]' />
            <h2 className='text-[20px] clash'>Made by true artisans</h2>
            <p className='satoshi text-[16px] leading-[24px]'>Handmade crafted goods made with real passion and craftmanship</p>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[15px] my:w-[270px] text-[#2a254b] sm:w-full md:w-[400px] lg:w-[250px]'>
            <FontAwesomeIcon icon={faCreditCard} className='size-[24px]' />
            <h2 className='text-[20px] clash'>Unbeatable prices</h2>
            <p className='satoshi text-[16px] leading-[24px]'>For our materials and quility you won&apos;t find better prices anywhere</p>
          </div>

          {/* 4 */}
          <div className='flex flex-col gap-[15px] my:w-[270px] text-[#2a254b] sm:w-full md:w-[400px] lg:w-[250px]'>
            <FontAwesomeIcon icon={faSeedling} className='size-[24px]' />
            <h2 className='text-[20px] clash'>Recycled packaging</h2>
            <p className='satoshi text-[16px] leading-[24px]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='my:p-[100px] flex flex-col gap-[50px] sm:px-[20px] md:px-[30px]'>

        {/* first */}
        <div>
          <h2 className='text-[32px] clash text-[#2a254b]'>New ceramics</h2>
        </div>

        {/* Second */}
        <div className='flex justify-between w-full text-[#2a254b] sm:flex-wrap my:flex-nowrap items-center'>

          {/* 1 */}
          <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] lg:w-[200px]'>
            <Image src='/images/product1.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px] lg:w-[200px]'/>
            <p className='text-[20px] clash'>The Dandy chair</p>
            <p className='text-[18px] satoshi'>&pound;250</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] lg:w-[200px]'>
            <Image src='/images/product2.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px] lg:w-[200px]'/>
            <p className='text-[20px] clash'>Rustic Vase Set</p>
            <p className='text-[18px] satoshi'>&pound;155</p>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] lg:w-[200px] sm:mt-[40px]  md:mt-0'>
            <Image src='/images/product3.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px] lg:w-[200px]'/>
            <p className='text-[20px] clash'>The Silky Vase</p>
            <p className='text-[18px] satoshi'>&pound;125</p>
          </div>

          {/* 4 */}
          <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] sm:mt-[40px]  md:mt-0 lg:w-[200px]'>
            <Image src='/images/product4.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[375px] lg:w-[200px]'/>
            <p className='text-[20px] clash'>The Lucy Lamp</p>
            <p className='text-[18px] satoshi'>&pound;399</p>
          </div>
        </div>

        {/* button */}
        <Link href='/Products' className='m-[auto]'><button type='button' className='text-[16px] satoshi bg-[#f9f9f9] my:w-[170px] px-[32px] py-[16px] rounded-[5px] m-[auto] sm:w-full'>View collection</button></Link>
      </div>

      {/* Section 4 */}
      <div className='my:p-[100px] flex flex-col gap-[50px] sm:px-[20px] md:px-[30px] sm:py-[50px] '>

        {/* first */}
        <div>
          <h2 className='text-[32px] clash text-[#2a254b]'>Our popular products</h2>
        </div>

        {/* Second */}
        <div className='flex justify-between w-full text-[#2a254b] sm:flex-wrap md:flex-nowrap'>

          {/* 1 */}
          <div className='flex flex-col gap-[10px] my:w-[600px]'>
            <Image src='/images/product5.png' width={630} height={375} alt='Product Card' className='sm:w-[305px] lg:w-[550px] my:w-[600px]'/>
            <p className='text-[20px] clash'>The Poplar suede sofa</p>
            <p className='text-[18px] satoshi'>&pound;980</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] sm:mt-[40px] md:mt-0 lg:w-[200px]'>
            <Image src='/images/product1.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[356px] lg:w-[200px] '/>
            <p className='text-[20px] clash'>The Dandy chair</p>
            <p className='text-[18px] satoshi'>&pound;250</p>
          </div>

          {/* 3 */}
          <div className='flex flex-col gap-[10px] my:w-[305px] sm:w-[163px] sm:mt-[40px] md:mt-0 lg:w-[200px] '>
            <Image src='/images/product6.png' width={305} height={375} alt='Product Card' className='sm:w-[163px] sm:h-[201px] my:w-[305px] my:h-[356px] lg:w-[200px]'/>
            <p className='text-[20px] clash'>The Dandy chair</p>
            <p className='text-[18px] satoshi'>&pound;250</p>
          </div>
        </div>

        {/* button */}
        <Link href='/Products' className='m-[auto]'><button type='button' className='text-[16px] satoshi bg-[#f9f9f9] my:w-[170px] px-[32px] py-[16px] rounded-[5px] my:m-[auto] sm:w-full'>View collection</button></Link>
      </div>

      {/* Section 5 */}
      <div className='my:p-[50px] bg-[#f9f9f9] sm:px-[0px] md:px-[30px] md:py-[50px]'>
        <div className='bg-white my:p-[100px] text-[#2a254b] flex flex-col my:items-center gap-[16px] sm:px-[20px] sm:items-start md:items-center md:py-[30px]'>
          <h2 className='md:text-[36px] clash sm:text-[20px]'>Join the club and get the benefits</h2>
          <p className='my:text-[16px] leading-[24px] satoshi my:w-[470px] my:text-center sm:text-[14px] sm:w-full sm:text-left lg:text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className='flex my:w-[472px] h-[56px] justify-center items-center mt-[50px] sm:w-full'>
            <input type="email" placeholder='your@email.com' className='sm:w-[200px] bg-[#f9f9f9] p-[16px] md:w-[300px] lg:w-[400px]'/>
            <button type='submit' className='bg-[#2a254b] my:text-[16px] text-white satoshi my:px-[32px] my:py-[16px] my:w-[130px] sm:text-[13px] sm:px-[10px] sm:py-[16px] sm:w-[118px]'>Sign up</button>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className='flex justify-between lg:flex-row items-center w-full sm:flex-col '>

        {/* Left */}
        <div className='my:p-[100px] flex flex-col gap-[25px] my:w-[720px] sm:px-[20px] sm:py-[50px] sm:w-full '>
          <h2 className='md:text-[32px] text-[#2a254b] clash leading-[33.6px] sm:text-[20px]'>From a studio in London to a global brand with over 400 outlets</h2>
          <p className='my:text-[16px] text-[#505977] satoshi sm:text-[14px] sm:leading-[21px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
          <p className='my:text-[16px] text-[#505977] satoshi sm:text-[14px] sm:leading-[21px]'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

          <Link href='/About'><button type='button' className='bg-[#f9f9f9] satoshi px-[32px] py-[16px] my:w-[160px] rounded-[5px] mt-[80px] sm:w-full md:w-[170px]'>Get in touch</button></Link>
        </div>

        <div>
          <Image src='/images/touch-img.png' width={720} height={603} alt='Get in Touch' className='sm:w-[390px] sm:h-[358px] my:w-[720px] my:h-[603px] md:w-[768px] md:h-[500px]'/>
        </div>
      </div>

      {/* Section 7 */}
      <div className='my:p-[100px] bg-[#2a254b] text-white flex justify-between w-full border-b-[2px] border-[#4e4d93] sm:px-[20px] sm:py-[50px] sm:flex-wrap sm:gap-[30px] md:flex-nowrap'>

        {/* 1 */}
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

        {/* 4 */}
        <div className='flex flex-col my:w-[550px] my:mt-0 sm:mt-[20px]'>
          <h2 className='text-[16px] clash'>Join our mailing list</h2>
          <div className='flex my:w-[472px] h-[56px] justify-center items-center mt-[50px] sm:w-[280px]'>
            <input type="email" placeholder='your@email.com' className='lg:w-[354px] sm:w-[200px] md:w-[300px] bg-[#f9f9f9]/15 p-[15px] '/>
            <button type='submit' className='bg-[#fff] text-[#2a254b] satoshi my:px-[32px] my:py-[16px] my:text-[16px] my:w-[130px] sm:text-[13px] sm:px-[10px] sm:py-[16px] sm:w-[118px]'>Sign up</button>
          </div>
        </div>
      </div>

      <Homefooter />
    </div>
  )
}

export default Home