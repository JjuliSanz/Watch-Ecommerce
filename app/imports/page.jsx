import ImportsCard from "@/components/ImportsCard";

import SearchBar from "@/components/SearchBar";
import TopSales from "@/components/TopSales";
import { getRapidAPIProducts, getTopProducts } from "@/lib/utils";

export default async function Imports() {
  const productsJSON = await getRapidAPIProducts();
  const products = await productsJSON.result.resultList;
  const topProducts = await getTopProducts();

  return (
    <main className="min-h-screen p-10">
      <div className="w-full flex justify-between">
        <div className="title-container w-fit">
          <div className="text-3xl font-bold title">
            Watches({products.length})
          </div>
        </div>
        {/* <SearchBar /> */}
      </div>

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
