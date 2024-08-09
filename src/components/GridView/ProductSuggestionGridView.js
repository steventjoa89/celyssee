import React from "react";
import Card from "../Card/Card";

function ProductSuggestionGridView({ perfumeList, isShowPrice = true }) {
  return (
    <div
      data-aos="fade-right"
      className="px-4 md:px-6 lg:px-8 xl:px-10 pt-6 pb-3 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-8"
    >
      {perfumeList.map((item, index) => (
        <Card key={index} item={item} isShowPrice={isShowPrice} />
      ))}
    </div>
  );
}

export default ProductSuggestionGridView;
