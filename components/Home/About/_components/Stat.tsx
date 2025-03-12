import Image from "next/image";
import React from "react";

type TProps = {
    title: string
    description: string
    src: string
    size?:  number
    width?: number
    heigth?: number
}

const Stat = ({title, description, src, size, width, heigth}: TProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={title}
        width={size ? size : width}
        height={size ? size : heigth}
        className="mx-auto"
      />
      <p className="mt-3 font-bold text-xl text-white text-center">
        {title}
      </p>
      <p className="text-base sm:text-lg text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
};

export default Stat;
