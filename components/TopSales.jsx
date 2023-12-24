import React from "react";

const TopSales = ({ topProducts }) => {
  return (
    <div className="h-[200px] w-[400px] glass goldShadow rounded-lg flex flex-col border-[3px]">
      <div className="text-2xl font-semibold w-full h-1/4 flex items-center p-2 topsales-title">
        Watches Top Sales
      </div>
      {topProducts.map((product, index) => (
        <div
          className="text-base font-medium w-full h-1/4 flex items-center justify-between p-2 topsales-border  "
          key={index}
        >
          <p className="gold-text">{product.model}</p>
          <p className="gold-text flex items-center justify-center">
            {product.price.toLocaleString()} USD
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopSales;
