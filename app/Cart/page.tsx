import HomeHeader from '@/components/Homeheader'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Homefooter from '@/components/Homefooter';

const Cart = () => {
  return (
    <div className='my:min-w-[1440px] sm:min-w-[320px] md:min-w-[768px]'>
        <HomeHeader />

        <div className='my:px-[200px] py-[100px] sm:px-[20px] md:px-[30px]'>
            <h2 className='clash text-[#2a254b] text-[36px]'>Your shopping cart</h2>
            <div className='flex justify-between items-center w-full clash text-[#2a254b] text-[14px] py-[16px] border-[#EBE8F4] border-b-[1px]'>
              <h4 className='my:w-[309px] sm:w-[150px] md:w-[250px]'>Product</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>

            <div className='flex justify-between w-full items-center py-[16px]  gap-[50px]'>
              <div className='flex justify-center gap-[20px] items-center w-[280px]'>
                <Image src='/images/cart-img1.png' width={109} height={134} alt='Cart Item 1' className='sm:hidden my:block md:block'/>
                <div className='flex flex-col gap-[15px] w-[150px] text-[#2a254b]'>
                  <h3 className='clash text-[20px]'>Graystone vase</h3>
                  <p className='text-[14px] satoshi'>A timeless ceramic vase with a tri color grey glaze.</p>
                  <p className='text-[16px] satohsi'>&pound;85</p>
                </div>
              </div>
              <div className='text-[#2a254b] text-[16px] satoshi'>
                <p>1</p>
              </div>
              <div className='text-[#2a254b] satoshi text-[18px]'>
                <p>&pound;85</p>
              </div>
            </div>

            <div className='flex justify-between w-full items-center py-[16px] border-[#EBE8F4] border-b-[1px] gap-[50px]'>
              <div className='flex justify-center gap-[20px] items-center w-[280px]'>
                <Image src='/images/cart-img2.png' width={109} height={134} alt='Cart Item 1' className='sm:hidden my:block md:block'/>
                <div className='flex flex-col gap-[15px] w-[150px] text-[#2a254b]'>
                  <h3 className='clash text-[20px]'>Basic white vase</h3>
                  <p className='text-[14px] satoshi'>Beautiful and simple this is one for the classics</p>
                  <p className='text-[16px] satohsi'>&pound;85</p>
                </div>
              </div>
              <div className='text-[#2a254b] text-[16px] satoshi'>
                <p>1</p>
              </div>
              <div className='text-[#2a254b] satoshi text-[18px]'>
                <p>&pound;85</p>
              </div>
            </div>

            <div className='flex flex-col items-end gap-[15px] text-[#2a254b] py-[50px]'>
              <h3 className='clash text-[20px]'>Subtotal <span className='text-[24px] ml-[20px]'>&pound;210</span></h3>
              <p className='text-[14px] satoshi text-[#4E4D93]'>Taxes and shipping are calculated at checkout</p>
              <button type='button' className='px-[32px] py-[16px] bg-[#2a254b] text-white satohsi'>Go to checkout</button>
            </div>
        </div>

        <div className='my:p-[100px] bg-[#2a254b] text-white flex justify-between my:flex-row w-full border-b-[2px] border-[#4e4d93] sm:flex-col sm:gap-[30px] sm:px-[20px] sm:py-[50px] sm:min-w-[320px] md:flex-row'>

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
        <div className='flex flex-col my:w-[500px]'>
          <h2 className='text-[16px] clash'>Join our mailing list</h2>
          <div className='flex my:w-[472px] h-[56px] justify-center items-center mt-[50px] sm:w-[280px]'>
            <input type="email" placeholder='your@email.com' className='sm:w-[200px] lg:w-[300px] bg-[#f9f9f9]/15 p-[16px] '/>
            <button type='submit' className='bg-[#fff] text-[#2a254b] my:text-[16px] satoshi my:px-[32px] py-[16px] my:w-[130px] sm:text-[13px] sm:px-[10px] sm:py-[16px] sm:w-[118px]'>Sign up</button>
          </div>
        </div>
      </div>

      <Homefooter />
    </div>
  )
}

export default Cart