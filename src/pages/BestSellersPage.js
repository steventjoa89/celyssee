import React, { useEffect, useState } from "react";
import NavbarFooterMenu from "../components/Navbar/NavbarFooterMenu";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import { BEST_SELLER_PERFUMES_IDS } from "../data/settings";
import { SortOptions } from "../enums/sortOptionsEnum";
import { sortPerfumes } from "../utils/sortingUtil";

function BestSellersPage() {
  const [sortedBy, setSortedBy] = useState(SortOptions.DEFAULT);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Filter and sort data based on the selected sort option
    const filteredData = PERFUME_CATALOG.filter((perfumeObj) =>
      BEST_SELLER_PERFUMES_IDS.includes(perfumeObj.id)
    );

    // Sort data based on the selected sorting option
    let sorted = [...filteredData]; // Create a copy to avoid mutating the original data
    sorted = sortPerfumes(sortedBy, sorted, BEST_SELLER_PERFUMES_IDS);

    // Set the sorted data
    setSortedData(sorted);
  }, [sortedBy]);

  return (
    <div>
      {/* Navbar Footer */}
      <NavbarFooterMenu
        title="Best Sellers"
        defaultSortOptionName="Most Popular"
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />

      {/* Grid View: Content Area */}
      <GridView
        title="Our Timeless Best Sellers"
        data={sortedData}
        isShowPrice={false}
      />
    </div>
  );
}

export default BestSellersPage;
