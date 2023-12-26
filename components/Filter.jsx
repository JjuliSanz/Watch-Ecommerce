"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Filter = ({ searchParams }) => {
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
        <div className="bg-brown border border-gold absolute z-10 right-[120px] flex rounded">
          {/* Alphabetically */}
          <div
            className={`text-sm font-medium text-gold text-gold-shadow cursor-pointer h-fit p-2 decoration-gold border-r border-gold underline-offset-4 hover:shadow-gold-shadow ${
              searchParams.model === "" || searchParams.model === undefined
                ? "underline"
                : ""
            }`}
            onClick={() => {
              router.push("/watches?model=");
            }}
          >
            Alphabetically
          </div>
          {/* Lowest */}
          <div
            className={`text-sm font-medium text-gold text-gold-shadow cursor-pointer h-fit p-2 decoration-gold border-r border-gold underline-offset-4 hover:shadow-gold-shadow ${
              searchParams.model === "lowest" ? "underline" : ""
            }`}
            onClick={() => {
              router.push("/watches?model=lowest");
            }}
          >
            LowestPrice
          </div>
          {/* Highest */}
          <div
            className={`text-sm font-medium text-gold text-gold-shadow cursor-pointer h-fit p-2 decoration-gold underline-offset-4 hover:shadow-gold-shadow ${
              searchParams.model === "highest" ? "underline" : ""
            }`}
            onClick={() => {
              router.push("/watches?model=highest");
            }}
          >
            HighestPrice
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
