import React from "react";

function Button({ children, ...props }) {
  return (
    // <button
    //   {...props}
    //   className="text-sm md:text-base lg::text-lg font-medium border-2 border-black text-black px-4 py-2 rounded"
    // >
    //   {children}
    // </button>

    // hover:bg-gray-100 hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-100
    <button
      type="button"
      className="text-black font-semibold bg-white border border-black text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
