import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const ProductListingheader = () => {
  return (
    <div className='my:w-[1440px] flex justify-between items-center py-[16px] my:px-[100px] sm:w-[390px] sm:px-[20px] sm:justify-between'>
        <h1 className='text-[#22202e] text-[24px] clash'>Avion</h1>
        <nav className='my:flex justify-center items-center gap-[44px] text-[#726E8D] text-[16px] satoshi sm:hidden'>
            <Link href=''>Plant pots</Link>
            <Link href=''>Ceramics</Link>
            <Link href=''>Tables</Link>
            <Link href=''>Chairs</Link>
            <Link href=''>Crockery</Link>
            <Link href=''>Tableware</Link>
            <Link href=''>Cutlery</Link>
        </nav>
        <div className='flex justify-center items-center gap-[16px]'>
            <Link href=''><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[16px]' /></Link>
            <Link href='/Cart'><FontAwesomeIcon icon={faCartShopping} className='size-[16px]' /></Link>
            <Link href=''><FontAwesomeIcon icon={faUser} className='size-[16px]' /></Link>
            <button type='button' className='sm:block my:hidden'><FontAwesomeIcon icon={faBars} className='size-[15px]' /></button>
        </div>
    </div>
  )
}

export default ProductListingheader