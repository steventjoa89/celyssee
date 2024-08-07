import React from "react";
import Card from "../Card/Card";

function HorizontalScrollableGridView({ perfumeList }) {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap no-scrollbar">
      <div className="flex items-center">
        {perfumeList.map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-2">
            <Card item={item} isLarge={true} isShowPrice={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalScrollableGridView;
