import React, { useState } from "react";
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

  const data = PERFUME_CATALOG.filter((perfumeObj) =>
    BEST_SELLER_PERFUMES_IDS.includes(perfumeObj.id)
  ).sort((a, b) => a.id - b.id);

  return (
    <div>
      {/* Navbar Footer */}
      <NavbarFooterSortMenu
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        defaultSortOptionName="Best Seller"
      />

      {/* Content Area */}
      <GridView data={data} sortedBy={sortedBy} setIsSortedBy={setSortedBy} />
    </div>
  );
}

export default BestSellersPage;
