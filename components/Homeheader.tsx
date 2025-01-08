"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="my:px-[30px] py-[16px] flex flex-col items-center w-full bg-white my:min-w-[1440px] sm:px-[10px] sm:min-w-[320px] md:min-w-[768px] md:px-[30px]">
      {/* Header Top Section */}
      <div className="flex justify-between items-center bg-white text-black w-full border-gray-200 border-b-[1px] pb-[10px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="size-[20px] my:block sm:hidden" />
        <h1 className="clash text-[24px] text-[#22202e]">Avion</h1>
        <div className="my:flex gap-5 sm:hidden">
          <Link href="/Cart">
            <FontAwesomeIcon icon={faCartShopping} className="size-[20px]" />
          </Link>
          <FontAwesomeIcon icon={faUser} className="size-[20px]" />
        </div>
        <div className="sm:flex gap-4 my:hidden">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-[20px]" />
          <button type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="size-[20px]" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="my:flex my:justify-center gap-5 satoshi py-[10px] text-[#726E8D] text-[16px] sm:hidden">
        <Link href="">Plant pots</Link>
        <Link href="">Ceramics</Link>
        <Link href="">Tables</Link>
        <Link href="">Chairs</Link>
        <Link href="">Crockery</Link>
        <Link href="">Tableware</Link>
        <Link href="">Cutlery</Link>
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

export default HomeHeader;
