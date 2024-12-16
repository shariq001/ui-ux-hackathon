import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HomeHeader = () => {
  return (
    <div className='px-[20px] py-[16px] flex flex-col items-center w-full bg-white my:w-[1500px] sm:w-[320px]'>
        
        {/* 1 */}
        <div className='flex justify-between items-center bg-white text-black w-full border-gray-200 border-b-[1px] pb-[10px]'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[20px] my:block sm:hidden'/>
            <h1 className='clash text-[24px] text-[#22202e]'>Avion</h1>
            <div className='my:flex gap-5 sm:hidden'>
                <FontAwesomeIcon icon={faCartShopping} className='size-[20px]'/>
                <FontAwesomeIcon icon={faUser} className='size-[20px]'/>
            </div>
            <div className='sm:flex gap-4 my:hidden '>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[20px]'/>
                <FontAwesomeIcon icon={faBars} className='size-[20px]'/>
            </div>
        </div>

        {/* 2 */}
        <div className='my:flex my:justify-center gap-5 satoshi py-[10px] text-[#726E8D] text-[16px] sm:hidden'>
            <Link href=''>Plant pots</Link>
            <Link href=''>Ceramics</Link>
            <Link href=''>Tables</Link>
            <Link href=''>Chairs</Link>
            <Link href=''>Crockery</Link>
            <Link href=''>Tableware</Link>
            <Link href=''>Cutlery</Link>
        </div>
    </div>
  )
}

export default HomeHeader