import React, { useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Accordion({
  isAccordionOpen = false,
  title,
  isShowBottomBorder = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(isAccordionOpen);
  const contentRef = useRef(0);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  // const titleFontSize =
  //   titleSize === "semi" ? `text-xs md:text-sm` : `text-${titleSize}`;

  return (
    <div
      className={`${
        isShowBottomBorder ? "border-b border-gray-200" : ""
      } w-full mt-3`}
    >
      <button
        className="flex justify-between w-full px-0 py-2 text-left"
        onClick={onClick}
      >
        <span className="text-xs text-black uppercase font-bold">{title}</span>
        <span>
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
