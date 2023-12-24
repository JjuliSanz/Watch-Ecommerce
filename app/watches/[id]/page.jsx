import ProductInfo from "@/components/ProductInfo";
import { getProductById } from "@/lib/utils";
import Image from "next/image";

export default async function Watch({ params }) {
  const data = await getProductById(params.id);
  const product = data[0];
  console.log(product);

  return (
    <main className="min-h-screen p-10">
      <div className="w-full min-h-[600px] grid grid-cols-7 glass goldShadow rounded-xl">
        <div className="col-span-4 flex h-full ">
          {/* <div className="w-[20%] flex flex-col gap-4 justify-center items-center h-full">
            {product.images.map((image, index) => (
              <div
                className="w-[70px] h-[70px] rounded-xl border-2 border-[#ffaa00] goldShadow"
                key={index}
              >
                <Image
                  src={`${image}`}
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
                src={`${product.url}`}
                alt={product.model}
                width={1000}
                height={1000}
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
          </div> */}
          <ProductInfo product={product} />
        </div>
        <div className="col-span-3 flex flex-col gap-4 h-full p-4">
          {/* Reference */}
          <div className="text-sm gold-text">Ref {product.ref}</div>
          {/* Title */}
          <div className="text-3xl font-semibold product-title">
            {product.model}
          </div>
          {/* Brand */}
          <div className="text-xl font-medium gold-text justify-start">
            {product.brand}
          </div>
          {/* Price */}
          <div className="text-3xl font-medium gold-text ">
            ${product.price.toLocaleString()} USD
          </div>
          {/* Description */}
          <div className="text-xl font-medium gold-text">{product.desc}</div>
          {/* Stock */}
          {product.stock > 0 ? (
            <div className="text-xl font-medium in-stock">In Stock</div>
          ) : (
            <div className="text-xl font-medium inline out-stock">
              Out Stock
            </div>
          )}
          {/* Ship */}
          <div className="text-base font-medium gold-text">
            Ships from {product.location}
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-6">
            <div className="w-fit rounded-xl button-container">
              <button className="text-3xl font-semibold py-1 px-6 rounded-xl button">
                Buy It
              </button>
            </div>
            <div className="w-fit rounded-xl button-container">
              <button className="text-3xl font-semibold py-1 px-6 rounded-xl button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
