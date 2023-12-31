const Loading = () => {
  const imgs = [];
  for (let i = 0; i < 6; i++) {
    imgs.push(
      <div
        className="bg-brown animate-pulse w-[70px] h-[70px] rounded-xl border-2 border-gold"
        key={i}
      ></div>
    );
  }

  return (
    <main className="min-h-screen flex py-4 md:p-11">
      {/* Go Back */}
      <div
        href="/watches"
        className="w-[50px] h-[10px] text-gold  rounded-lg border border-gold px-2 absolute top-[70px] left-[10px] bg-brown animate-pulse"
      ></div>
      {/* Product */}
      <div className="w-full min-h-[600px] flex flex-col lg:grid lg:grid-cols-7 border-[3px] border-gold glassmorphism shadow-gold-shadow rounded-xl ">
        {/* Product Images */}
        <div className="lg:col-span-4 flex flex-col lg:flex-row h-full gap-4 lg:gap-0 mt-0 sm:mt-4 lg:mt-0">
          {/* Images */}
          <div className="w-full lg:w-[20%] flex order-2 lg:order-1 lg:flex-col gap-4 h-full justify-center items-center">
            {imgs}
          </div>
          {/* Image main */}
          <div className="w-full h-full flex justify-center items-center order-1 lg:order-2">
            <div className="w-[500px] h-[500px] border-[3px] border-gold relative bg-brown rounded-xl shadow-gold-shadow animate-pulse"></div>
          </div>
        </div>
        {/* Product Info */}
        <div className="col-span-3 flex flex-col gap-4 h-full p-4">
          {/* Reference */}
          <div className="w-[100px] h-[30px] bg-brown animate-pulse border border-gold rounded-xl"></div>
          {/* Title */}
          <div className="w-[300px] h-[30px] bg-brown animate-pulse border border-gold rounded-xl"></div>
          {/* Brand */}
          <div className="w-[100px] h-[20px] bg-brown animate-pulse border border-gold rounded-xl"></div>
          {/* Price */}
          <div className="w-[200px] h-[30px] bg-brown animate-pulse border border-gold rounded-xl"></div>
          {/* Description */}
          <div className="w-full h-[300px] bg-brown animate-pulse border border-gold rounded-xl"></div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-6">
            <div className="w-[130px] h-[50px] rounded-xl border border-gold bg-brown animate-pulse"></div>
            <div className="w-[200px] h-[50px] rounded-xl border border-gold bg-brown animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;