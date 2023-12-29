"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ImportFilter = ({ searchParams }) => {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();

  return (
    <>
      {/* Arrow container */}
      <div
        className="cursor-pointer bg-brown border border-gold rounded flex items-center h-fit p-1 w-fit hover:scale-[0.95] hover:shadow-gold-shadow"
        onClick={() => setHidden(!hidden)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-bar-right text-gold text-gold-shadow"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
          />
        </svg>
      </div>
      {hidden ? (
        ""
      ) : (
        <div className="bg-brown border border-gold z-10 top-[10px] right-[100px] flex rounded text-xs md:text-sm font-medium text-gold text-gold-shadow decoration-gold underline-offset-4">
          {/* Default */}
          <div
            className={`cursor-pointer h-fit p-2 border-r border-gold  hover:shadow-gold-shadow ${
              searchParams.price === "" || searchParams.price === undefined
                ? "underline"
                : ""
            }`}
            onClick={() => {
              router.push("/imports");
            }}
          >
            Default
          </div>
          {/* Lowest */}
          <div
            className={`cursor-pointer h-fit p-2 border-r border-gold  hover:shadow-gold-shadow ${
              searchParams.price === "lowest" ? "underline" : ""
            }`}
            onClick={() => {
              router.push("/imports?price=lowest");
            }}
          >
            LowestPrice
          </div>
          {/* Highest */}
          <div
            className={`cursor-pointer h-fit p-2 hover:shadow-gold-shadow ${
              searchParams.price === "highest" ? "underline" : ""
            }`}
            onClick={() => {
              router.push("/imports?price=highest");
            }}
          >
            HighestPrice
          </div>
        </div>
      )}
    </>
  );
};

export default ImportFilter;
