import HomeHeader from '@/components/Homeheader'
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='my:w-[1440px] sm:w-[320px]'>
      <HomeHeader />

      {/* Section 1 */}
      <div className='p-[100px] flex justify-center items-center border-red-500 border-[3px]'>

        {/* Left */}
        <div className='bg-[#2A254B] text-white flex flex-col items-start p-[50px] h-[584px] justify-between'>

          {/* Upper */}
          <div className='poppins flex flex-col gap-[30px] w-[513px]'>
            <h1 className='text-[32px] leading-[44.8px]'>The furniture brand for the future, with timeless designs</h1>
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
    </div>
  )
}

export default Home