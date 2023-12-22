import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[500px]">
      <video autoPlay loop muted>
        <source src="/watches.mp4" />
      </video>
    </div>
  );
};

export default Banner;
