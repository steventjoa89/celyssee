import React from "react";
import Card from "../Card/Card";

function HorizontalScrollableGridView({ perfumeList, fadeDirection = "left" }) {
  return (
    <div
      data-aos={`fade-${fadeDirection}`}
      className="w-full overflow-x-auto whitespace-nowrap no-scrollbar"
    >
      <div className="flex items-center">
        {perfumeList.map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-2 md:mx-3 xl:mx-4">
            <Card item={item} isLarge={true} isShowPrice={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalScrollableGridView;
