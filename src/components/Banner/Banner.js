import React from "react";

function Banner({ img, children, onClick }) {
  return (
    <div
      className={`relative w-full max-w-full h-[40vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center cursor-pointer`}
      style={{ backgroundImage: `url(${img})` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Banner;
