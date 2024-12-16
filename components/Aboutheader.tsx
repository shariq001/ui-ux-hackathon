import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Aboutheader = () => {
  return (
    <div className='flex flex-col items-center '>

        {/* First */}
        <div className='flex justify-between w-full items-center px-[100px] py-[16px]'>
            <h2 className='clash text-[#22202e] text-[24px] '>Avion</h2>
            <nav className='flex justify-center items-center gap-[50px]'>
                <div className='flex justify-center items-center gap-[32px] text-[16px] satoshi text-[#726E8D]'>
                    <Link href=''>About us</Link>
                    <Link href=''>Contact</Link>
                    <Link href=''>Blog</Link>
                </div>

                <div className='flex justify-center items-center gap-[16px]'>
                    <Link href=''><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[16px]' /></Link>
                    <Link href=''><FontAwesomeIcon icon={faCartShopping} className='size-[16px]' /></Link>
                    <Link href=''><FontAwesomeIcon icon={faUser} className='size-[16px]' /></Link>
                </div>
            </nav>
        </div>

        {/* Second */}
        <div className='bg-[#f9f9f9] w-full py-[16px] px-[100px] flex justify-center items-center gap-[44px] text-[16px] text-[#726E8D] satoshi'>
            <Link href=''>All products</Link>
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

export default Aboutheader