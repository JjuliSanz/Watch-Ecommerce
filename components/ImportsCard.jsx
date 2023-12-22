import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImportsCard = ({ url, model, desc, id }) => {
  return (
    <div className="w-[250px] h-[400px] flex flex-col bg-white rounded p-1 dark:bg-gray-800 border-[3px] border-yellow-300">
      {/* Image */}
      <div className="h-[55%] p-2">
        <Image
          src={`${url}`}
          width={1000}
          height={1000}
          className="w-full h-full object-contain object-center"
          alt={model}
        />
      </div>
      {/* Text */}
      <div className="h-[30%] flex flex-col justify-center text-start pl-2 text-white">
        <p className="text-lg font-semibold line-clamp-2">{model}</p>
        <p className="text-sm line-clamp-2">{desc}</p>
      </div>
      {/* Button */}
      <div className="h-[15%] flex justify-center items-center border-t">
        <Link
          href={`./imports/${id}`}
          className=" text-sm text-white font-semibold bg-yellow-500 rounded-lg p-2"
        >
          Mas Info
        </Link>
      </div>
    </div>
  );
};

export default ImportsCard;
