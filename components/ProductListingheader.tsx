import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const ProductListingheader = () => {
  return (
    <div className='w-[1500px] flex justify-between items-center py-[16px] px-[100px]'>
        <h1 className='text-[#22202e] text-[24px] clash'>Avion</h1>
        <nav className='flex justify-center items-center gap-[44px] text-[#726E8D] text-[16px] satoshi'>
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
            <Link href=''><FontAwesomeIcon icon={faCartShopping} className='size-[16px]' /></Link>
            <Link href=''><FontAwesomeIcon icon={faUser} className='size-[16px]' /></Link>
        </div>
    </div>
  )
}

export default ProductListingheader