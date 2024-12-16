import HomeHeader from '@/components/Homeheader'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Homefooter from '@/components/Homefooter';

const Products = () => {
  return (
    <div>
        <HomeHeader />

        <div>
            <Image src='/images/product-bg.png' width={1519.5} height={209} alt='Products banner' />
        </div>

        <div className='flex justify-between w-full px-[100px] py-[16px] items-center'>
            <div className='flex justify-center items-center gap-[30px] text-[16px] satoshi text-[#2a254b]'>
                <button type='button'>Category <FontAwesomeIcon icon={faCaretDown} className='size-[10px] inline-flex items-center ml-[5px]' /></button>
                <button type='button'>Product type <FontAwesomeIcon icon={faCaretDown} className='size-[10px] inline-flex items-center ml-[5px]' /></button>
                <button type='button'>Price <FontAwesomeIcon icon={faCaretDown} className='size-[10px] inline-flex items-center ml-[5px]' /></button>
                <button type='button'>Brand <FontAwesomeIcon icon={faCaretDown} className='size-[10px] inline-flex items-center ml-[5px]' /></button>
            </div>

            <div className='flex justify-center gap-[30px] items-center text-[#2a254b] satoshi'>
                <p className='text-[14px] '>Sorting by:</p>
                <button type='button'>Date added <FontAwesomeIcon icon={faCaretDown} className='size-[10px] inline-flex items-center ml-[5px]' /></button>
            </div>
        </div>

        {/* Section 1 */}
        <div className='p-[100px] flex flex-col gap-[50px]'>
        
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

                {/* Second */}
                <div className='flex justify-between w-full text-[#2a254b]'>
        
                  {/* 1 */}
                  <div className='flex flex-col gap-[10px] w-[305px]'>
                    <Image src='/images/product-img1.png' width={305} height={375} alt='Product Card' />
                    <p className='text-[20px] clash'>The Dandy chair</p>
                    <p className='text-[18px] satoshi'>&pound;250</p>
                  </div>
        
                  {/* 2 */}
                  <div className='flex flex-col gap-[10px] w-[305px]'>
                    <Image src='/images/product-img2.png' width={305} height={375} alt='Product Card' />
                    <p className='text-[20px] clash'>Rustic Vase Set</p>
                    <p className='text-[18px] satoshi'>&pound;155</p>
                  </div>
        
                  {/* 3 */}
                  <div className='flex flex-col gap-[10px] w-[305px]'>
                    <Image src='/images/product-img3.png' width={305} height={375} alt='Product Card' />
                    <p className='text-[20px] clash'>The Silky Vase</p>
                    <p className='text-[18px] satoshi'>&pound;125</p>
                  </div>
        
                  {/* 4 */}
                  <div className='flex flex-col gap-[10px] w-[305px]'>
                    <Image src='/images/product-img4.png' width={305} height={375} alt='Product Card' />
                    <p className='text-[20px] clash'>The Lucy Lamp</p>
                    <p className='text-[18px] satoshi'>&pound;399</p>
                  </div>
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

        {/* Section 2 */}
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
            <input type="email" placeholder='your@email.com' className='w-[354px] bg-[#f9f9f9]/15 p-[16px] '/>
            <button type='submit' className='bg-[#fff] text-[#2a254b] satoshi px-[32px] py-[16px] w-[130px]'>Sign up</button>
          </div>
        </div>
      </div>

      <Homefooter />
    </div>
    
  )
}

export default Products