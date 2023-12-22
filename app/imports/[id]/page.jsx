import { getRapidAPIProductById } from "@/lib/utils";
import Image from "next/image";

export default async function Import({ params }) {
  const productsJSON = await getRapidAPIProductById(params.id);
  const product = productsJSON.result.item;
  console.log(product);

  return (
    <main className="min-h-screen p-10 dark:bg-gray-950">
      <div className="w-full grid grid-cols-6 bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
        <div className="col-span-4 flex">
          <div className="flex flex-col gap-4 justify-center">
            {product.images.map((image, index) => (
              <div
                className="w-[60px] h-[60px] rounded-xl border-[4px] dark:border-yellow-600 "
                key={index}
              >
                <Image
                  src={`https:${image}`}
                  alt={`image ${index}`}
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
          <div className="p-10">
            <Image
              src={`https:${product.images[0]}`}
              alt={product.model}
              width={2000}
              height={2000}
              className="border-[4px] rounded-xl dark:border-yellow-600"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4 ">
          <div className="text-sm">{product.itemId}</div>
          <div className="text-xl text-semibold">{product.title}</div>
          {/* <div>{product.desc}</div> */}
          {/* Start */}
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
          <div className="">5 Unidades disponibles</div>
          <div className="text-2xl">{product.sku.def.quantity} USD</div>
        </div>
        {/* <div className="col-span-2 border rounded-xl"></div> */}
      </div>
    </main>
  );
}
