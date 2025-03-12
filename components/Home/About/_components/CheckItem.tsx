import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

type TProps = {
  children: ReactNode
  bgColor?: string
}

const CheckItem = ({children, bgColor = 'bg-green-600' }: TProps) => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <div className={`w-7 h-7 ${bgColor}  flex flex-col items-center justify-center`}>
        <FaCheck className="text-white" />
      </div>
      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
        {children}
      </p>
    </div>
  );
};

export default CheckItem;
