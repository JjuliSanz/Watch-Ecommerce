"use client";
import { getProductById } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductInfo = ({ product }) => {
  const [productImage, setProductImage] = useState(product.images[0]);

  const handleImageClick = (image) => {
    setProductImage(image);
  };

  return (
    <>
      <div className="w-[20%] flex flex-col gap-4 h-full justify-center items-center">
        {product.images.slice(0, 7).map((image, index) => (
          <div
            className={`w-[70px] h-[70px] rounded-xl border-2 border-[#ffaa00] cursor-pointer  hover:scale-[.95] ${productImage === image ? "goldShadow" : ""}`}
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={`image ${index}`}
              width={1000}
              height={1000}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[500px] h-[500px] relative glass rounded-xl goldShadow">
          <Image
            src={productImage}
            alt={product.model}
            width={1000}
            height={1000}
            className="object-cover object-center rounded-xl w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
