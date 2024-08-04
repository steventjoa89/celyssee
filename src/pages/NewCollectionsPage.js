import React, { useEffect, useState } from "react";
import NavbarFooterSortMenu from "../components/Navbar/NavbarFooterSortMenu";
import GridView from "../components/GridView/GridView";
import { SortOptions } from "../enums/sortOptions";
import { PERFUME_CATALOG } from "../data/data";
import { sortPerfumes } from "../utils/sortingUtil";

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
    sorted = sortPerfumes(sortedBy, sorted);

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
