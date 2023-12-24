import Card from "@/components/Card";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import TopSales from "@/components/TopSales";
import {
  getHighestPrice,
  getLowerPrice,
  getProducts,
  getTopProducts,
} from "@/lib/utils";

export default async function Watches({ searchParams }) {
  const products = await getProducts(searchParams.model);
  const topProducts = await getTopProducts();
  const lowerPrice = await getLowerPrice();
  const highestPrice = await getHighestPrice();
  console.log(searchParams);
  // console.log(lowerPrice)

  return (
    <main className="min-h-screen p-10">
      <div className="w-full flex justify-center items-center gap-6">
        <div className="title-container w-fit">
          <div className="text-3xl font-bold title">Watches</div>
        </div>
        <SearchBar />
        <Filter />
      </div>
      <div className="grid grid-cols-6 w-full h-full mt-4">
        <div className="flex flex-wrap col-span-4 gap-4">
          {searchParams.model === "lower"
            ? lowerPrice.map((product) => (
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
