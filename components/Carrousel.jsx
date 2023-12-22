"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

const Carrousel = () => {
  return (
    <div className="h-[300px] sm:h-64 xl:h-80 2xl:h-96 relative">
      <Carousel className="w-full bg-gray-500 rounded-none !important">
        <Image
          src="/img/patinete01_1080.jpg"
          alt="..."
          width={3000}
          height={3000}
        />
        <Image
          src="/img/patinete02_1080.jpg"
          alt="..."
          width={3000}
          height={3000}
        />
        <Image
          src="/img/patinete03_recortado.jpg"
          alt="..."
          width={3000}
          height={3000}
        />
      </Carousel>
      <div className="w-full h-[5px] bg-gray-300 absolute bottom-0 right-0"></div>
      <div className="w-full h-[5px] bg-gray-500 absolute top-0 right-0"></div>
    </div>
  );
};

export default Carrousel;
