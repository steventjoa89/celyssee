import React, { useEffect, useState } from "react";
import NavbarFooterMenu from "../components/Navbar/NavbarFooterMenu";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import { SortOptions } from "../enums/sortOptionsEnum";
import { sortPerfumes } from "../utils/sortingUtil";

function NewCollectionsPage() {
  const [sortedBy, setSortedBy] = useState(SortOptions.DEFAULT);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Filter and sort data based on the selected sort option
    const newCollections = PERFUME_CATALOG.sort(
      (a, b) => new Date(b.releaseAt) - new Date(a.releaseAt)
    ).slice(0, 4);

    // Sort data based on the selected sorting option
    let sorted = [...newCollections];
    sorted = sortPerfumes(sortedBy, sorted);

    // Set the sorted data
    setSortedData(sorted);
  }, [sortedBy]);

  return (
    <div>
      {/* Navbar Footer */}
      <NavbarFooterMenu
        title="New Collections"
        defaultSortOptionName="Most Popular"
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />

      {/* Grid View: Content Area */}
      <GridView
        title="Our Exclusive New Collections"
        data={sortedData}
        isShowPrice={false}
      />
    </div>
  );
}

export default NewCollectionsPage;
