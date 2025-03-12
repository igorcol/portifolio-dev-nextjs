import Image from "next/image";
import React from "react";

const footerLogo = "/images/logo.png";

const Footer = () => {
  return (
    <div className="py-16 bg-[#0f0715]">
      {/* Logo */}
      <div>
        <Image
          src={footerLogo}
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>

      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Reviews</div>
        <div>Content</div>
      </div>
      <p className="text-white opacity-60 mt-6 text-center">
        © 2025 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
