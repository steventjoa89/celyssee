import React, { useEffect, useState } from "react";
import NavbarFooterSortMenu from "../components/Navbar/NavbarFooterSortMenu";
import GridView from "../components/GridView/GridView";
import { SortOptions } from "../enums/sortOptions";
import { PERFUME_CATALOG } from "../data/data";

function NewCollectionsPage() {
  const [sortedBy, setSortedBy] = useState(SortOptions.FEATURED);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Filter and sort data based on the selected sort option
    const newCollections = PERFUME_CATALOG.sort(
      (a, b) => new Date(b.releaseAt) - new Date(a.releaseAt)
    ).slice(0, 4);

    // Sort data based on the selected sorting option
    let sorted = [...newCollections];

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
      default: // Featured
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
        defaultSortOptionName="New Collections"
        isNewCollections={true}
      />

      {/* Grid View: Content Area */}
      <GridView title="Our Exclusive New Collections" data={sortedData} />
    </div>
  );
}

export default NewCollectionsPage;
