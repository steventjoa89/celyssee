import React, { useEffect, useState } from "react";
import NavbarFooterSortMenu from "../components/Navbar/NavbarFooterSortMenu";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import { BEST_SELLER_PERFUMES_IDS } from "../data/settings";
import { SortOptions } from "../enums/sortOptions";

function BestSellersPage() {
  /*
  0 - Featured - Best Seller
  1 - Alphabetically Asc
  2 - Alphabetically Desc
  3 - Price Asc
  4 - Price Desc
  */
  const [sortedBy, setSortedBy] = useState(SortOptions.FEATURED);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Filter and sort data based on the selected sort option
    const filteredData = PERFUME_CATALOG.filter((perfumeObj) =>
      BEST_SELLER_PERFUMES_IDS.includes(perfumeObj.id)
    );

    // Sort data based on the selected sorting option
    let sorted = [...filteredData]; // Create a copy to avoid mutating the original data

    switch (sortedBy) {
      case SortOptions.ALPHABETICALLY_AZ:
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SortOptions.ALPHABETICALLY_ZA:
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case SortOptions.PRICE_AZ:
        sorted.sort((a, b) => {
          // Assuming we want to sort by the lowest price of the available sizes
          const priceA = Math.min(
            ...a.sizes
              .filter((size) => size.isAvailable !== false)
              .map((size) => size.price)
          );
          const priceB = Math.min(
            ...b.sizes
              .filter((size) => size.isAvailable !== false)
              .map((size) => size.price)
          );
          return priceA - priceB;
        });
        break;
      case SortOptions.PRICE_ZA:
        sorted.sort((a, b) => {
          // Assuming we want to sort by the highest price of the available sizes
          const priceA = Math.max(
            ...a.sizes
              .filter((size) => size.isAvailable !== false)
              .map((size) => size.price)
          );
          const priceB = Math.max(
            ...b.sizes
              .filter((size) => size.isAvailable !== false)
              .map((size) => size.price)
          );
          return priceB - priceA;
        });
        break;
      case SortOptions.DATE_AZ:
        sorted.sort((a, b) => new Date(a.releaseAt) - new Date(b.releaseAt));
        break;
      case SortOptions.DATE_ZA:
        sorted.sort((a, b) => new Date(b.releaseAt) - new Date(a.releaseAt));
        break;
      default: // Featured
        const idOrderMap = new Map(
          BEST_SELLER_PERFUMES_IDS.map((id, index) => [id, index])
        );
        sorted.sort((a, b) => {
          const indexA = idOrderMap.get(a.id) ?? Infinity;
          const indexB = idOrderMap.get(b.id) ?? Infinity;
          return indexA - indexB;
        });
        break;
    }

    // Set the sorted data
    setSortedData(sorted);
  }, [sortedBy]);

  return (
    <div>
      {/* Navbar Footer */}
      <NavbarFooterSortMenu
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        defaultSortOptionName="Best Seller"
      />

      {/* Title */}
      <h1 className="relative font-title text-2xl mt-8 mb-5">
        Our Timeless Best Sellers
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
      </h1>
      {/* Grid View: Content Area */}
      <GridView data={sortedData} />
    </div>
  );
}

export default BestSellersPage;
