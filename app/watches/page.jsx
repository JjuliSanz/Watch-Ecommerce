import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import TopSales from "@/components/TopSales";
import { getChiepestProducts, getExpensiveProducts, getProducts, getTopProducts } from "@/lib/utils";

export default async function Watches({ searchParams }) {
  const products = await getProducts(searchParams.model);
  const topProducts = await getTopProducts();
  const expensiveProducts = await getExpensiveProducts();
  const chiepestProducts = await getChiepestProducts();
  console.log(searchParams);

  return (
    <main className="min-h-screen p-10">
      <div className="w-full flex justify-between">
        <div className="title-container w-fit">
          <div className="text-3xl font-bold title">
            Watches({products.length})
          </div>
        </div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-6 w-full h-full mt-4">
        <div className="flex flex-wrap col-span-4 gap-4">
          {products.map((product) => (
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
