"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const Checkout = () => {

  const router = useRouter();

  const goCart = () => {
    router.push('/Cart'); // Navigate to /about
  };

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col gap-[15px] m-[50px]'>
            <h1 className='text-[32px] clash font-semibold'>Checkout</h1>
            <h2 className='font-semibold text-[20px] satoshi'>Shipping Information</h2>
            <form action="" className='flex flex-col gap-[10px]'>
                <label htmlFor="name" className='font-medium   satoshi'>Full name<span className='text-red-600 text-[20px]'>*</span></label>
                <input type="text" placeholder='Enter full name' className='w-[526px] h-[50px] p-[15px] border-[1px] border-[#818EA1] text-black rounded-[10px] mb-[10px]' required/>
                <label htmlFor="email" className='font-medium   satoshi'>Email Address<span className='text-red-600 text-[20px]'>*</span></label>
                <input type="email" placeholder='Enter email address' className='w-[526px] h-[50px] p-[15px] border-[1px] border-[#818EA1] text-black rounded-[10px]' required/>
                <label htmlFor="phone" className='font-medium   satoshi'>Phone number<span className='text-red-600 text-[20px]'>*</span></label>
                <input type="number" placeholder='Enter phone number' className='w-[526px] h-[50px] p-[15px] border-[1px] border-[#818EA1] text-black rounded-[10px]' required/>
                <label htmlFor="country" className='font-medium   satoshi'>Country<span className='text-red-600 text-[20px]'>*</span></label>
                <select name="country" id="country" required className='border-[1px] border-[#818EA1] text-black rounded-[10px] w-[526px] h-[50px] px-[10px]'>
                  <option value="" disabled selected>Chose State</option>
                  <option value="state1" selected>Pakistan</option>
                  <option value="state2">India</option>
                  <option value="state3">Turkey</option>
                  <option value="state4">USA</option>
                </select>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="city" className='font-medium   satoshi'>City</label>
                    <input type="text" placeholder='Enter city' className='w-[150px] h-[50px] p-[15px] border-[1px] border-[#818EA1] text-black rounded-[10px]'/>
                  </div>

                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="State" className='font-medium   satoshi'>State</label>
                    <input type="text" placeholder='Enter state' className='w-[150px] h-[50px] p-[15px] border-[1px] border-[#818EA1] text-black rounded-[10px]'/>
                  </div>

                  <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="ZIP Code" className='font-medium   satoshi'>ZIP Code</label>
                    <input type="number" placeholder='Enter ZIP code' className='w-[150px] h-[50px] p-[15px] border-[1px] border-[#818EA1] text-black rounded-[10px]'/>
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <label className='satoshi'>I have read and agreed to the Terms and Conditions</label>
                  <input type="checkbox" placeholder='none' required  className='h-[15px] w-[15px] '/>
                </div>
              </form>

              <button onClick={goCart} className='w-full px-[32px] py-[16px] bg-[#2A254B] text-white'>Review Your Cart</button>

              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-[20px] satoshi'>Total</h2>
                <p className='border-[1px] border-black w-[80px] h-[30px] px-[5px]'>$</p>
              </div>

              <button className='w-full px-[32px] py-[16px] bg-[#2A254B] text-white'>Pay Now</button>
        </div>

        
    </div>
  )
}

export default Checkout