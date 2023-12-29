import Card from "@/components/Card";
import Filter from "@/components/Filter";
import ImportFilter from "@/components/ImportFilter";
import ImportsCard from "@/components/ImportsCard";

import SearchBar from "@/components/SearchBar";
import TopSales from "@/components/TopSales";
import {
  getAmazonHighestPriceRapidAPI,
  getAmazonLowestPriceRapidAPI,
  getAmazonRapidAPI,
  getRapidAPIProducts,
  getTopProducts,
} from "@/lib/utils";

export default async function Imports({ searchParams }) {
  const topProducts = await getTopProducts();

  const amazonProducts = await getAmazonRapidAPI();
  const products = await amazonProducts.data.products;

  const highestProducts = await getAmazonHighestPriceRapidAPI();
  const highestPrice = await highestProducts.data.products;

  const lowestProducts = await getAmazonLowestPriceRapidAPI();
  const lowestPrice = await lowestProducts.data.products;

  return (
    <main className="w-full min-h-screen p-4 lg:p-10">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Category */}
        <div className="w-fit flex justify-center items-center mb-2 sm:mb-0">
          <div className="title-container w-fit">
            <div className="text-3xl font-bold title">Amazon Watches</div>
          </div>
        </div>
        {/* Search */}
        <div className="w-[300px] flex justify-center items-center ml-[300px]">
          {/* <SearchBar /> */}
        </div>
        {/* Filter */}
        <div className="hidden w-[300px] md:flex justify-center md:justify-start items-center gap-2">
          <ImportFilter searchParams={searchParams} />
        </div>
      </div>

      <div className="flex flex-col max-lg:items-center lg:grid lg:grid-cols-5 xl:grid-cols-6 max-lg:gap-4 w-full h-full mt-10 max-lg:mb-4">
        <div className="flex flex-wrap max-xl:justify-center col-span-3 xl:col-span-4 gap-4">
          {searchParams.price === "lowest"
            ? lowestPrice.map((product, index) => (
                <ImportsCard
                  url={product.product_photo}
                  model={product.product_title}
                  desc={product.product_title}
                  price={product.product_price}
                  key={index}
                  id={product.asin}
                  sales={product.sales_volume}
                />
              ))
            : searchParams.price === "highest"
            ? highestPrice.map((product, index) => (
                <ImportsCard
                  url={product.product_photo}
                  model={product.product_title}
                  desc={product.product_title}
                  price={product.product_price}
                  key={index}
                  id={product.asin}
                  sales={product.sales_volume}
                />
              ))
            : products.map((product, index) => (
                <ImportsCard
                  url={product.product_photo}
                  model={product.product_title}
                  desc={product.product_title}
                  price={product.product_price}
                  key={index}
                  id={product.asin}
                  sales={product.sales_volume}
                />
              ))}
        </div>
        <TopSales topProducts={topProducts} />
      </div>
    </main>
  );
}
