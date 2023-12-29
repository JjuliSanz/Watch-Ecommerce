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

export default async function Watches({ searchParams }) {
  const products = await getProducts(searchParams.model);
  const topProducts = await getTopProducts();
  const lowestPrice = await getLowestPrice();
  const highestPrice = await getHighestPrice();

  return (
    <main className="w-full min-h-screen p-4 lg:p-10">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Category */}
        <div className="w-fit flex justify-center items-center mb-2 sm:mb-0">
          <div className="title-container w-fit">
            <div className="text-3xl font-bold title">Watches</div>
          </div>
        </div>
        {/* Search */}
        <div className="w-[300px] flex justify-center items-center ml-[300px]">
          <SearchBar />
        </div>
        {/* Filter */}
        <div className="hidden w-[300px] md:flex justify-center md:justify-start items-center gap-2">
          <Filter searchParams={searchParams} />
        </div>
      </div>
      <div className="flex flex-col max-lg:items-center lg:grid lg:grid-cols-5 xl:grid-cols-6 max-lg:gap-4 w-full h-full mt-10 max-lg:mb-4">
        <div className="flex flex-wrap max-xl:justify-center col-span-3 xl:col-span-4 gap-4">
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
        </div>
        <TopSales topProducts={topProducts} />
      </div>
    </main>
  );
}
