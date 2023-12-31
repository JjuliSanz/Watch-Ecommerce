"use client";
import Image from "next/image";
import { useState } from "react";

const ImportProductImages = ({ product }) => {
  const [productImage, setProductImage] = useState(
    product.variants && product.variants.length > 0
      ? product.variants[0].images[0].hiRes
      : product.images[0]
  );

  const handleImageClick = (image) => {
    setProductImage(image);
  };

  return (
    <>
      <div className="w-full lg:w-[20%] flex order-2 lg:order-1 lg:flex-col gap-4 h-full justify-center items-center">
        {/* Images column */}
        {product.variants && product.variants.length > 0
          ? product.variants[0].images.slice(0, 7).map((image, index) => (
              <div
                className={`w-[70px] h-[70px] rounded-xl border-2 border-gold cursor-pointer hover:scale-[.95] hover:shadow-gold-shadow ${
                  productImage === image ? "shadow-gold-shadow" : ""
                }`}
                key={index}
                onClick={() => handleImageClick(image.hiRes)}
              >
                <Image
                  src={image.hiRes}
                  alt={`image ${index}`}
                  width={1000}
                  height={1000}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            ))
          : product.images.slice(0, 7).map((image, index) => (
              <div
                className={`w-[70px] h-[70px] rounded-xl border-2 border-gold cursor-pointer hover:scale-[.95] ${
                  productImage === image ? "shadow-gold-shadow" : ""
                }`}
                key={index}
                onClick={() => handleImageClick(image.hiRes)}
              >
                <Image
                  src={image.hiRes}
                  alt={`image ${index}`}
                  width={1000}
                  height={1000}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            ))}
      </div>
      {/* Image main */}
      <div className="w-full h-full flex justify-center items-center order-1 lg:order-2">
        <div className="w-[500px] h-[500px] border-[3px] border-gold relative glassmorphism rounded-xl shadow-gold-shadow">
          <Image
            src={productImage}
            alt={product.title}
            width={1000}
            height={1000}
            className="object-cover object-center rounded-xl w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default ImportProductImages;
