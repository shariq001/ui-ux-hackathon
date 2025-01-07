"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Aboutheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col items-center sm:min-w-[390px] my:min-w-[1440px]">
      {/* First */}
      <div className="flex justify-between w-full items-center my:px-[100px] py-[16px] sm:px-[20px]">
        <h2 className="clash text-[#22202e] text-[24px]">Avion</h2>
        <nav className="my:flex my:justify-center items-center gap-[50px] sm:hidden">
          <div className="flex justify-center items-center gap-[32px] text-[16px] satoshi text-[#726E8D]">
            <Link href="/">About us</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Blog</Link>
          </div>

          <div className="flex justify-center items-center gap-[16px]">
            <Link href="#">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="size-[16px]" />
            </Link>
            <Link href="/Cart">
              <FontAwesomeIcon icon={faCartShopping} className="size-[16px]" />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faUser} className="size-[16px]" />
            </Link>
          </div>
        </nav>
        <div className="sm:block my:hidden">
          <button type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="size-[15px]" />
          </button>
        </div>
      </div>

      {/* Second */}
      <div className="bg-[#f9f9f9] w-full py-[16px] px-[100px] my:flex justify-center items-center gap-[44px] text-[16px] text-[#726E8D] satoshi sm:hidden">
        <Link href="/Products">All products</Link>
        <Link href="#">Plant pots</Link>
        <Link href="#">Ceramics</Link>
        <Link href="#">Tables</Link>
        <Link href="#">Chairs</Link>
        <Link href="#">Crockery</Link>
        <Link href="#">Tableware</Link>
        <Link href="#">Cutlery</Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:flex flex-col bg-white fixed top-0 left-0 w-[80%] h-full z-50 shadow-lg px-6 py-6 my:hidden">
          <div className="flex justify-end">
            <button onClick={closeMenu} className="text-black text-[25px]">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-[#726E8D] text-[18px] satoshi">
            <li onClick={closeMenu}>
              <Link href="/">About us</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Contact</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Blog</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/Products">All products</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Plant pots</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Ceramics</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Tables</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Chairs</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Crockery</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Tableware</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#">Cutlery</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Aboutheader;
