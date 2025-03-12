import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            {/* Check 1 */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                FrontEnd Development
              </p>
            </div>
            {/* Check 2 */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                BackEnd Development
              </p>
            </div>
            {/* Check 3 */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                FullStack Development
              </p>
            </div>
          </div>
        </div>
        {/* Stats Session */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          {/* 1 Stat */}
          <div>
            <Image src="/images/customer.png" alt="customer" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.client}</p>
            <p  className="text-base sm:text-lg text-gray-400 text-center">Satisfied Customers</p>
          </div>
          {/* 2 Stat */}
          <div>
            <Image src="/images/experience.png" alt="customer" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
            <p  className="text-base sm:text-lg text-gray-400 text-center">Years Experience</p>
          </div>
          {/* 3 Stat */}
          <div>
            <Image src="/images/completed.png" alt="customer" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
            <p  className="text-base sm:text-lg text-gray-400 text-center">Completed Project</p>
          </div>
          {/* 4 Stat */}
          <div>
            <Image src="/images/rocket.png" alt="customer" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.website}</p>
            <p  className="text-base sm:text-lg text-gray-400 text-center">Website Lauched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
