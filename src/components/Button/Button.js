import React from "react";

function Button({ text }) {
  return (
    <button className="w-full items-center justify-center border border-black">
      {text}
    </button>
  );
}

export default Button;
