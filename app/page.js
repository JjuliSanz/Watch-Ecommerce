
import Carrousel from "@/components/Carrousel";
import Image from "next/image";
import Card from "@/components/Card";
import TopSales from "@/components/TopSales";
import { getProducts, getTopProducts } from "@/lib/utils";
import Banner from "@/components/Banner";

export default async function Home() {
  const products = await getProducts();
  const topProducts = await getTopProducts();
  console.log(products)
  return (
    <main className="w-full min-h-screen">
      {/* <Carrousel /> */}
      <Banner />
      {/* <Card/> */}
      <div className="w-full p-10">
        <div className="title-container w-fit">
          <div className="text-3xl font-bold title">Destacados</div>
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
      </div>
    </main>
  );
}
