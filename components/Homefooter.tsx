import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faInstagram, faSkype, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Homefooter = () => {
  return (
    <div className='my:min-w-[1440px] bg-[#2a254b] text-white my:px-[100px] py-[16px] flex my:justify-between items-center sm:min-w-[320px] sm:px-[20px] sm:justify-center'>
        <h2 className='satoshi text-[14px]'>Copyright 2022 Avion LTD</h2>
        <nav className='my:flex gap-[24px] sm:hidden'>
            <Link href=''><FontAwesomeIcon icon={faLinkedin} className='size-[24px] text-white' /></Link>
            <Link href=''><FontAwesomeIcon icon={faSquareFacebook} className='size-[24px] text-white' /></Link>
            <Link href=''><FontAwesomeIcon icon={faInstagram} className='size-[24px] text-white' /></Link>
            <Link href=''><FontAwesomeIcon icon={faSkype} className='size-[24px] text-white' /></Link>
            <Link href=''><FontAwesomeIcon icon={faTwitter} className='size-[24px] text-white' /></Link>
            <Link href=''><FontAwesomeIcon icon={faPinterest} className='size-[24px] text-white' /></Link>
        </nav>
    </div>
  )
}

export default Homefooter