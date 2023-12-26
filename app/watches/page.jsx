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
    <main className="min-h-screen p-10">
      <div className="w-full grid grid-cols-3 justify-evenly items-center gap-6">
        <div className="col-span-1 w-full flex justify-center items-center">
          <div className="title-container w-fit">
            <div className="text-3xl font-bold title">Watches</div>
          </div>
        </div>
        <div className="col-span-1 w-full flex justify-center items-center">
          <SearchBar />
        </div>
        <div className="col-span-1 w-full flex justify-start items-center">
          <Filter searchParams={searchParams} />
        </div>
      </div>
      <div className="grid grid-cols-6 w-full h-full mt-4">
        <div className="flex flex-wrap col-span-4 gap-4">
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
          {/* {products.map((product) => (
            <Card
              url={product.url}
              model={product.model}
              desc={product.desc}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          ))} */}
        </div>
        <TopSales topProducts={topProducts} />
      </div>
    </main>
  );
}
