import Image from "next/image";
import React from "react";
import TopSales from "./TopSales";
import Link from "next/link";

const Card = ({ url, model, desc, id }) => {
  return (
    <div className=" w-[250px] h-[370px] flex flex-col rounded-xl glass goldShadow">
      {/* Image */}
      <div className="pt-2 h-[50%] w-[90%] rounded-xl place-self-center">
        <Image
          src={url}
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center rounded-xl"
          alt={model}
        />
      </div>
      {/* Text */}
      <div className="h-[35%] flex flex-col  text-start p-2 gap-2">
        <p className="text-lg font-semibold card-title  line-clamp-1">
          {model}
        </p>
        <p className="text-sm line-clamp-3 gold-text">{desc}</p>
      </div>
      <div className="h-[15%] flex justify-center items-center">
        <div className="w-fit button-container rounded-lg">
          <Link
            href={`./watches/${id}`}
            className="button text-xl font-regular py-1 px-6"
          >
            Mas Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
