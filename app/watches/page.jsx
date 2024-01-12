import Card from "@/components/Card";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import TopSales from "@/components/TopSales";
import {
  getHighestPrice,
  getLowestPrice,
  getProducts,
  getTopProducts,
} from "@/lib/utils";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Watches({ searchParams }) {
  const products = await getProducts(searchParams.model);
  const topProducts = await getTopProducts();
  const lowestPrice = await getLowestPrice();
  const highestPrice = await getHighestPrice();

  return (
    <main className="w-full min-h-screen p-4 lg:p-10">
      <header className="w-full flex flex-col md:flex-row items-center">
        {/* Category */}
        <div className="w-fit flex justify-center items-center mb-2 sm:mb-0">
          <div className="title-container w-fit">
            <h2 className="text-3xl font-bold title">Watches</h2>
          </div>
        </div>
        {/* Search */}
        <div className="w-[300px] flex justify-center items-center md:ml-[50px] lg:ml-[300px]">
          <SearchBar />
        </div>
        {/* Filter */}
        <div className="hidden w-[300px] md:flex justify-center md:justify-start items-center gap-2 ml-[10px]">
          <Filter searchParams={searchParams} />
        </div>
      </header>

      <section className="flex flex-col max-lg:items-center lg:grid lg:grid-cols-5 xl:grid-cols-6 max-lg:gap-4 w-full h-full mt-10 max-lg:mb-4">
        <article className="flex flex-wrap max-xl:justify-center col-span-3 xl:col-span-4 gap-4">
          {searchParams.model === "lowest"
            ? lowestPrice.map((product) => (
                <Card
                  url={product.url}
                  model={product.model}
                  desc={product.desc}
                  price={product.price}
                  key={product.id}
                  id={product.id}
                />
              ))
            : searchParams.model === "highest"
            ? highestPrice.map((product) => (
                <Card
                  url={product.url}
                  model={product.model}
                  desc={product.desc}
                  price={product.price}
                  key={product.id}
                  id={product.id}
                />
              ))
            : products.map((product) => (
                <Card
                  url={product.url}
                  model={product.model}
                  desc={product.desc}
                  price={product.price}
                  key={product.id}
                  id={product.id}
                />
              ))}
        </article>
        
        <TopSales topProducts={topProducts} />
      </section>
    </main>
  );
}
