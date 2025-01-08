"use client";

import { faMagnifyingGlass, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

const Aboutheader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      {/* Desktop Header */}
      <div className="flex justify-between items-center px-[30px] py-[16px]">
        <h1 className="text-[24px] clash">Avion</h1>
        <div className="my:flex justify-end items-center gap-x-12 sm:hidden">
          <div className="flex justify-end items-center gap-5 text-[#726E8D]">
            <Link href="/">About us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="flex justify-end items-center gap-5">
            <button><FontAwesomeIcon icon={faMagnifyingGlass} className="text-[15px]" /></button>
            <button><FontAwesomeIcon icon={faShoppingCart} className="text-[15px]" /></button>
            <button><FontAwesomeIcon icon={faUser} className="text-[15px]" /></button>
          </div>
        </div>
        <button className="sm:block my:hidden" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} className="text-[20px]" />
        </button>
      </div>

      {/* Mobile Navbar */}
      {isNavOpen && (
        <div className="absolute top-0 left-0 z-50 bg-white shadow-lg w-[80%] max-w-[280px] h-auto px-[20px] py-[16px]">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[24px] clash">Avion</h1>
            <button onClick={closeNav}>
              <FontAwesomeIcon icon={faTimes} className="text-[20px]" />
            </button>
          </div>
          <div className="flex flex-col gap-5 text-[#726E8D]">
            <Link href="/" onClick={closeNav}>Home</Link>
            <Link href="/" onClick={closeNav}>Products</Link>
            <Link href="/" onClick={closeNav}>Product Listing</Link>
            <Link href="/" onClick={closeNav}>Cart</Link>
          </div>
        </div>
      )}

      {/* Subheader */}
      <div className="bg-[#f9f9f9] text-[#726E8D] px-[30px] py-[16px] flex justify-center items-center gap-[40px] sm:hidden">
        <Link href="/">All products</Link>
        <Link href="/">Plant pots</Link>
        <Link href="/">Ceramics</Link>
        <Link href="/">Tables</Link>
        <Link href="/">Chairs</Link>
        <Link href="/">Crockery</Link>
        <Link href="/">Tableware</Link>
        <Link href="/">Cutlery</Link>
      </div>
    </div>
  );
};

export default Aboutheader;
