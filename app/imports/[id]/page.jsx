import ImportProductImages from "@/components/ImportProductImages";
import ProductInfo from "@/components/ProductInfo";
import {
  getAmazonRapidAPIProductById,
  getRapidAPIProductById,
} from "@/lib/utils";
import Link from "next/link";

export default async function Import({ params }) {
  const amazonProduct = await getAmazonRapidAPIProductById(params.id);
  const product = await amazonProduct.result[0];
  console.log(product);
  console.log(amazonProduct);

  return (
    <main className="min-h-screen flex py-4 md:p-11">
      {/* Go Back */}
      <Link
        href="/imports"
        className="w-fit text-gold flex items-center gap-2 text-base font-medium glassmorphism rounded-lg border border-gold px-2 hover:scale-[0.95] hover:shadow-gold-shadow absolute top-[70px] left-[10px]"
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
      <div className="w-full min-h-[600px] flex flex-col lg:grid lg:grid-cols-7 border-[3px] border-gold glassmorphism shadow-gold-shadow rounded-xl">
        <div className="lg:col-span-4 flex flex-col lg:flex-row h-full gap-4 lg:gap-0 mt-0 sm:mt-4 lg:mt-0">
          <ImportProductImages product={product} />
        </div>
        <div className="col-span-3 flex flex-col gap-4 h-full p-4">
          {/* Reference */}
          <div className="text-sm text-gold text-gold-shadow">
            Ref: {product.asin}
          </div>
          {/* Title */}
          <div className="text-3xl font-semibold text-gold text-gold-shadow">
            {product.title}
          </div>
          {/* Brand */}
          <div className="text-xl font-medium text-gold text-gold-shadow justify-start">
            {product.product_information.brand}
          </div>
          {/* Price */}
          <div className="text-3xl font-medium text-gold text-gold-shadow ">
            ${product.price.current_price} USD
          </div>
          {/* Description */}
          {/* <div className="text-xl font-medium text-gold text-gold-shadow">
            {product.product_description}
          </div> */}
          {/* Stars */}
          <div className="flex gap-2">
            <span className="text-xl font-medium text-gold text-gold-shadow">
              {product.reviews.rating}
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-star${
                    index <= product.reviews.rating ? "-fill" : ""
                  } text-gold`}
                  viewBox="0 0 16 16"
                >
                  {index <= product.reviews.rating ? (
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  ) : (
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  )}
                </svg>
              ))}
            </div>
          </div>
          {/* Reviews */}
          <div className="text-lg font-medium text-gold text-gold-shadow">
            {product.reviews.total_reviews} total reviews
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
