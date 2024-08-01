import React, { useRef } from "react";
import Card from "../Card/Card";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function HorizontalScrollableGridView({ perfumeList }) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between">
        <button className="z-10" onClick={scrollLeft}>
          <ArrowBackIosOutlinedIcon />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex w-[92vw] overflow-x-auto space-x-2 no-scrollbar"
        >
          {perfumeList.map((item, key) => (
            <div key={key} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4">
              <Card item={item} isLarge={true} isShowPrice={false} />
            </div>
          ))}
        </div>
        <button className="z-10" onClick={scrollRight}>
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default HorizontalScrollableGridView;
