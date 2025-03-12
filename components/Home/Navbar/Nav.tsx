
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { showNavWhenScrolled } from "./utils/scrollHelper";
import { navLinks } from "@/constant/constant";

type TProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: TProps) => {

    const [navBg, setNavBg] = useState(false);

    const bgColor = navBg ? 'bg-[#240b39]' : 'fixed'

    useEffect(() => showNavWhenScrolled(setNavBg, 90),[])


  return (
    <div className={`fixed ${bgColor} h-[10vh] w-full z-[10] transition-all duration-200`}>
      <div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto ">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* NavLinks + btn */}
        <div className="flex items-center space-x-10">
          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.url}>
                <p className="nav__link">{navLink.label}</p>
              </Link>
            ))}
          </div>

          {/* Btns */}
          <div className="flex items-center space-x-4">
            {/* HireMe btn */}
            <button
              className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
                rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              Hire Me
            </button>

            {/* Mobile Nav btn */}
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
