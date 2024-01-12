import Card from "@/components/Card";
import TopSales from "@/components/TopSales";
import { getProducts, getTopProducts } from "@/lib/utils";
import Banner from "@/components/Banner";

export default async function Home() {
  const products = await getProducts();
  const topProducts = await getTopProducts();

  return (
    <main className="w-full min-h-screen ">
      <Banner />
      <section className="w-full p-4 lg:p-10 mt-4 sm:mt-4">
        <header className="title-container w-fit">
          <h2 className="text-3xl font-bold title">Featured</h2>
        </header>
        <div className="flex flex-col max-lg:items-center lg:grid lg:grid-cols-5 xl:grid-cols-6 max-lg:gap-4 w-full h-full mt-4 max-lg:mb-4">
          <article className="flex flex-wrap max-xl:justify-center col-span-3 xl:col-span-4 gap-4">
            {products.slice(0, 3).map((product) => (
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
          <article className="col-span-2">
            <TopSales topProducts={topProducts} />
          </article>
        </div>
      </section>
    </main>
  );
}
