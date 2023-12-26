import React from "react";

const TopSales = ({ topProducts }) => {
  return (
    <div className="h-[200px] w-[400px] border-[3px] border-gold glassmorphism shadow-gold-shadow rounded-lg flex flex-col">
      {/* Title */}
      <div className="text-2xl font-semibold w-full h-1/4 flex items-center p-2 topsales-title">
        Top Sales
      </div>
      {/* Products */}
      {topProducts.map((product, index) => (
        <div
          className="text-base font-medium w-full h-1/4 flex items-center justify-between p-2 relative topsales "
          key={index}
        >
          {/* Model */}
          <p className="text-gold text-gold-shadow">{product.model}</p>
          {/* Price */}
          <p className="text-gold text-gold-shadow flex items-center justify-center">
            {product.price.toLocaleString()} USD
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopSales;
