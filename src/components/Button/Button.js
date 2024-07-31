import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
    >
      {children}
    </button>
  );
}

export default Button;
