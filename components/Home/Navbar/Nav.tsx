"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { checkScrollPosition } from "./utils/scrollHelper";

// define props type
type TProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: TProps) => {
  const [navBg, setNavBg] = useState(false);

  const bgColor = navBg ? 'bg-[#240b39]' : 'fixed'

  //* Show nav BG when scrolled
  useEffect(() =>  checkScrollPosition(setNavBg, 90), []);

  //* -- Component -- *\\
  return (
    <div className={`fixed ${bgColor} h-[10vh] w-full z-[10] transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* NAV LINKS */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.url}>
                <p className="nav__link">{navLink.label}</p>
              </Link>
            ))}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button
              className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm  bg-white
            hover:bg-gray-200 transition-all duration-200 rounded-lg"
            >
              Hire Me
            </button>
            {/* Burger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
