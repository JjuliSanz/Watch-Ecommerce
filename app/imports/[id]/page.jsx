import ProductInfo from "@/components/ProductInfo";
import { getRapidAPIProductById } from "@/lib/utils";
import Image from "next/image";

export default async function Import({ params }) {
  const productsJSON = await getRapidAPIProductById(params.id);
  const product = productsJSON.result.item;
  console.log(product);

  return (
    <main className="min-h-screen p-10">
      <div className="w-full grid grid-cols-7 glass goldShadow rounded-xl">
        <div className="col-span-4 flex">
          {/* <div className="w-[20%] flex flex-col gap-4 justify-center items-center h-full">
            {product.images.map((image, index) => (
              <div
                className="w-[70px] h-[70px] rounded-xl border-2 border-[#ffaa00] goldShadow"
                key={index}
              >
                <Image
                  src={`https:${image}`}
                  alt={`image ${index}`}
                  width={1000}
                  height={1000}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[500px] h-[500px] relative glass rounded-xl goldShadow">
              <Image
                src={`https:${product.images[0]}`}
                alt={product.model}
                width={2000}
                height={2000}
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
          </div> */}
          <ProductInfo product={product} />
        </div>
        <div className="col-span-3 flex flex-col gap-4 h-full p-4">
          {/* Reference */}
          <div className="text-sm gold-text">{product.itemId}</div>
          {/* Title */}
          <div className="text-3xl font-semibold product-title">
            {product.title}
          </div>
          {/* Brand */}
          <div className="text-xl font-medium gold-text justify-start">
            {product.brand}
          </div>
          {/* Price */}
          <div className="text-3xl font-medium gold-text ">
            ${product.price} USD
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
          {/* Stars */}
          <div className="flex gap-2">
            <span>4</span>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </div>
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
