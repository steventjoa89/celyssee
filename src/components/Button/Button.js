import React from "react";

function Button({ children, icon, isSelected = false, ...props }) {
  const defaultStyles = "text-black bg-white border-black font-semibold";
  const selectedStyles = "bg-black text-white border-black";

  const buttonStyle = `border text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 ${
    !isSelected ? defaultStyles : selectedStyles
  }`;

  return (
    <button type="button" className={buttonStyle} {...props}>
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </button>
  );
}

export default Button;
