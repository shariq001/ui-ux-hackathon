import { faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Aboutheader = () => {
  return (
    <div>
        {/* 1 */}
        <div className='flex justify-between items-center px-[30px] py-[16px]'>
            <h1 className='text-[24px] clash'>Avion</h1>
            <div className='flex justify-end items-center gap-x-12 '>
                <div className='flex justify-end items-center gap-5 text-[#726E8D]'>
                    <Link href=''>About us</Link>
                    <Link href=''>Contact</Link>
                    <Link href=''>Blog</Link>
                </div>

                <div className='flex justify-end items-center gap-5'>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[15px]' /></button>
                    <button><FontAwesomeIcon icon={faShoppingCart} className='size-[15px]' /></button>
                    <button><FontAwesomeIcon icon={faUser} className='size-[15px]' /></button>
                </div>
            </div>
        </div>

        {/* 2 */}
        <div className='bg-[#f9f9f9] text-[#726E8D] px-[30px] py-[16px] flex justify-center items-center gap-[40px]'>
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