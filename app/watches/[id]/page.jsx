import ProductInfo from "@/components/ProductInfo";
import { getProductById } from "@/lib/utils";
import Image from "next/image";

export default async function Watch({ params }) {
  const data = await getProductById(params.id);
  const product = data[0];

  return (
    <main className="min-h-screen p-10">
      <div className="w-full min-h-[600px] grid grid-cols-7 border-[3px] border-gold glassmorphism shadow-gold-shadow rounded-xl">
        <div className="col-span-4 flex h-full ">
          <ProductInfo product={product} />
        </div>
        <div className="col-span-3 flex flex-col gap-4 h-full p-4">
          {/* Reference */}
          <div className="text-sm text-gold text-gold-shadow">Ref {product.ref}</div>
          {/* Title */}
          <div className="text-3xl font-semibold product-title">
            {product.model}
          </div>
          {/* Brand */}
          <div className="text-xl font-medium text-gold text-gold-shadow justify-start">
            {product.brand}
          </div>
          {/* Price */}
          <div className="text-3xl font-medium text-gold text-gold-shadow ">
            ${product.price.toLocaleString()} USD
          </div>
          {/* Description */}
          <div className="text-xl font-medium text-gold text-gold-shadow">{product.desc}</div>
          {/* Stock */}
          {product.stock > 0 ? (
            <div className="text-xl font-medium in-stock">In Stock</div>
          ) : (
            <div className="text-xl font-medium inline out-stock">
              Out Stock
            </div>
          )}
          {/* Ship */}
          <div className="text-base font-medium text-gold text-gold-shadow">
            Ships from {product.location}
          </div>

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
      </div>
    </main>
  );
}
