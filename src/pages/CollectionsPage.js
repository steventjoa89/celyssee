import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarFooterSortMenu from "../components/Navbar/NavbarFooterSortMenu";
import { toProperCase } from "../utils/stringUtil";
import { Collections } from "../enums/collectionsEnum";
import { Gender } from "../enums/genderEnum";
import PageNotFoundPage from "./PageNotFoundPage";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import { BEST_SELLER_PERFUMES_IDS } from "../data/settings";

function CollectionsPage() {
  const { collection } = useParams();
  const normalizedCollection = collection.toLowerCase();

  const [sortedBy, setSortedBy] = useState(null);
  const [sortedData, setSortedData] = useState([]);

  const GridViewTitle = {
    BestSellers: "Our Timeless Best Sellers",
    NewCollections: "Our Exclusive New Collections",
    Feminine: "Our Signature Feminine Scents",
    Masculine: "Our Signature Masculine Scents",
  };

  const collectionTitles = {
    [Collections.BEST_SELLERS.toLowerCase()]: GridViewTitle.BestSellers,
    [Collections.NEW_COLLECTIONS.toLowerCase()]: GridViewTitle.NewCollections,
    [Gender.FEMININE.toLowerCase()]: GridViewTitle.Feminine,
    [Gender.MASCULINE.toLowerCase()]: GridViewTitle.Masculine,
  };

  const gridViewTitle = collectionTitles[normalizedCollection] || "";

  useEffect(() => {
    let filteredData = [];

    // Filter and sort data based on the selected sort option
    switch (gridViewTitle) {
      case GridViewTitle.BestSellers:
        filteredData = PERFUME_CATALOG.filter((perfumeObj) =>
          BEST_SELLER_PERFUMES_IDS.includes(perfumeObj.id)
        );
        break;
      case GridViewTitle.NewCollections:
        filteredData = PERFUME_CATALOG.sort(
          (a, b) => new Date(b.releaseAt) - new Date(a.releaseAt)
        ).slice(0, 4);
        break;
      case GridViewTitle.Feminine:
        filteredData = PERFUME_CATALOG.filter(
          (perfume) => perfume.gender === Gender.FEMININE
        );
        break;
      case GridViewTitle.Masculine:
        filteredData = PERFUME_CATALOG.filter(
          (perfume) => perfume.gender === Gender.MASCULINE
        );
        break;
      default:
        break;
    }

    // Sort data based on the selected sorting option
    let sorted = [...filteredData]; // Create a copy to avoid mutating the original data
    // sorted = sortPerfumes(sortedBy, sorted, BEST_SELLER_PERFUMES_IDS);    // Sort the perfumes based on the navbar

    // Set the sorted data
    setSortedData(sorted);
  }, [
    GridViewTitle.BestSellers,
    GridViewTitle.NewCollections,
    GridViewTitle.Feminine,
    GridViewTitle.Masculine,
    gridViewTitle,
    sortedBy,
  ]);

  // Redirect to PageNotFound where the collection ID is not found
  if (!gridViewTitle) {
    return <PageNotFoundPage />;
  }

  return (
    <div>
      {/* Navbar Footer */}
      <NavbarFooterSortMenu
        title={toProperCase(collection)}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />

      {/* Grid View: Content Area */}
      <GridView title={gridViewTitle} data={sortedData} />
    </div>
  );
}

export default CollectionsPage;
