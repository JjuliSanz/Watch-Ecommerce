import ProductImages from "@/components/ProductImages";
import { getProductById } from "@/lib/utils";
import Link from "next/link";

export default async function Watch({ params }) {
  const data = await getProductById(params.id);
  const product = data[0];

  return (
    <main className="min-h-screen flex py-4 md:p-11">
      {/* Go Back */}
      <Link
        href="/watches"
        className="w-fit text-gold flex items-center gap-2 text-base font-medium glassmorphism rounded-lg border border-gold px-2 hover:scale-[0.95] hover:shadow-gold-shadow absolute z-10 top-[45px] md:top-[70px] left-[10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        Back
      </Link>
      {/* Product */}
      <article className="w-full min-h-[600px] flex flex-col lg:grid lg:grid-cols-7 border-[3px] border-gold glassmorphism shadow-gold-shadow rounded-xl ">
        <div className="lg:col-span-4 flex flex-col lg:flex-row h-full gap-4 lg:gap-0 mt-0 sm:mt-4 lg:mt-0">
          <ProductImages product={product} />
        </div>
        <div className="col-span-3 flex flex-col gap-4 h-full p-4">
          {/* Reference */}
          <h4 className="text-sm text-gold text-gold-shadow">
            Ref: {product.ref}
          </h4>
          {/* Title */}
          <h2 className="text-3xl font-semibold product-title">
            {product.model}
          </h2>
          {/* Brand */}
          <h4 className="text-xl font-medium text-gold text-gold-shadow justify-start">
            {product.brand}
          </h4>
          {/* Price */}
          <h3 className="text-3xl font-medium text-gold text-gold-shadow ">
            ${product.price.toLocaleString()} USD
          </h3>
          {/* Description */}
          <p className="text-xl font-medium text-gold text-gold-shadow">
            {product.desc}
          </p>
          {/* Stock */}
          {product.stock > 0 ? (
            <h4 className="text-xl font-medium in-stock">In Stock</h4>
          ) : (
            <h4 className="text-xl font-medium inline out-stock">
              Out Stock
            </h4>
          )}
          {/* Ship */}
          {/* <div className="text-base font-medium text-gold text-gold-shadow">
            Ships from {product.location}
          </div> */}

          {/* Buttons */}
          <div className="flex justify-center items-center gap-6">
            <div className="w-fit rounded-xl border border-gold glassmorphism hover:scale-[0.95] hover:shadow-gold-shadow">
              <button className="text-3xl font-semibold py-1 px-6 rounded-xl button">
                Buy It
              </button>
            </div>
            <div className="w-fit rounded-xl border border-gold glassmorphism hover:scale-[0.95] hover:shadow-gold-shadow">
              <button className="text-3xl font-semibold py-1 px-6 rounded-xl button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
