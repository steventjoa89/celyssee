import React from "react";

function Button({
  children,
  icon,
  isSelected = false,
  isUnavailable = false,
  isDisabled = false,
  ...props
}) {
  const defaultStyles = "text-black bg-white border-black font-semibold";
  const selectedStyles = "bg-black text-white border-black";

  const unavailableStyles =
    "border-gray-200 bg-gray-100 text-gray-400 line-through";

  let buttonStyle = `border text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 ${
    !isSelected ? defaultStyles : selectedStyles
  } ${!isUnavailable ? "" : unavailableStyles}`;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={buttonStyle}
      {...props}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </button>
  );
}

export default Button;
