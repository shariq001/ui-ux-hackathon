"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductListingheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center py-[16px] px-[30px] sm:min-w-[320px] sm:px-[20px] my:min-w-[1440px] md:min-w-[768px]">
      {/* Logo */}
      <h1 className="text-[#22202e] text-[24px] clash">Avion</h1>
      
      {/* Desktop Navigation */}
      <nav className="my:flex justify-center items-center gap-[44px] text-[#726E8D] text-[16px] satoshi sm:hidden">
        <Link href="">Plant pots</Link>
        <Link href="">Ceramics</Link>
        <Link href="">Tables</Link>
        <Link href="">Chairs</Link>
        <Link href="">Crockery</Link>
        <Link href="">Tableware</Link>
        <Link href="">Cutlery</Link>
      </nav>

      {/* Icons and Mobile Menu Button */}
      <div className="flex justify-center items-center gap-[16px]">
        <Link href="">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-[16px]" />
        </Link>
        <Link href="/Cart">
          <FontAwesomeIcon icon={faCartShopping} className="size-[16px]" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faUser} className="size-[16px]" />
        </Link>
        <button type="button" className="sm:block my:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="size-[15px]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-[50%] h-full bg-white z-50 shadow-lg sm:flex flex-col p-[20px] gap-5">
          <div className="flex justify-end">
            <button onClick={closeMenu} className="text-black text-[25px]">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="flex flex-col gap-[16px] text-[18px] text-[#22202e]">
            <li onClick={closeMenu}>
              <Link href="">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="">Product</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="">Product Listing</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="">Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductListingheader;
