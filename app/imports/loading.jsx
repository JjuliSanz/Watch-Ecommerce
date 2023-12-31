const Loading = () => {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <div
        className="bg-brown animate-pulse w-[250px] h-[300px] border-[3px] border-gold rounded-lg shadow-gold-shadow"
        key={i}
      ></div>
    );
  }
  return (
    <main className="w-full min-h-screen p-4 lg:p-10">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Category */}
        <div className="w-fit flex justify-center items-center mb-2 sm:mb-0">
          <div className="title-container w-fit">
            <div className="text-3xl font-bold title">Amazon Watches</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-lg:items-center lg:grid lg:grid-cols-5 xl:grid-cols-6 max-lg:gap-4 w-full h-full mt-10 max-lg:mb-4">
        {/* Products */}
        <div className="flex flex-wrap max-xl:justify-center col-span-3 xl:col-span-4 gap-4">
          {cards}
        </div>
        {/* Top Sales */}
        <div className="col-span-2">
          <div className="w-[400px] h-[200px] bg-brown animate-pulse border-[3px] border-gold shadow-gold-shadow rounded-lg"></div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
