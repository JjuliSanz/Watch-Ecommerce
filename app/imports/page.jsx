import ImportsCard from "@/components/ImportsCard";

import SearchBar from "@/components/SearchBar";
import TopSales from "@/components/TopSales";
import { getRapidAPIProducts, getTopProducts } from "@/lib/utils";



export default async function Imports() {
  const productsJSON = await getRapidAPIProducts();
  const products = await productsJSON.result.resultList;
  const topProducts = await getTopProducts();

  return (
    <main className="min-h-screen p-10 dark:bg-gray-950">
      {/* <SearchBar /> */}
      <div className="text-3xl dark:text-yellow-300">Scooters({products.length})</div>
      <div className="grid grid-cols-6 w-full h-full mt-4">
        <div className="flex flex-wrap col-span-4 gap-4">
          {products.map((product) => (
            <ImportsCard
              url={`https:${product.item.image}`}
              model={product.item.title}
              desc={product.desc}
              price={product.item.sku.def.promotionPrice}
              key={product.item.itemId}
              id={product.item.itemId}
            />
          ))}
        </div>
        <TopSales topProducts={topProducts} />
      </div>
    </main>
  );
}
