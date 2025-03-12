import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { aboutInfos } from "./utils/aboutInfos";
import CheckItem from "./_components/CheckItem";
import Stat from "./_components/Stat";


const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]"> 

      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>

      {/* Content Container */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          {/* Checks */}
          <div className="mt-8">
            <CheckItem bgColor="bg-blue-800">BackEnd Development</CheckItem>  
            <CheckItem bgColor="bg-red-800">BackEnd Development</CheckItem>  
            <CheckItem bgColor="bg-green-800">BackEnd Development</CheckItem>  
          </div>
        </div>

        {/* Stats Session */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          {aboutInfos.map((info) => (
            <div key={info.label}>
              <Stat title={info.label} description={info.description} src={info.imgUrl} size={80} />
            </div>
            // <Stat title={info.label} description={info.description} src={info.imgUrl} size={80} || width={} heigth={}
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
