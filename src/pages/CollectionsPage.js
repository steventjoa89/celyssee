import React, { useEffect, useState } from "react";
import NavbarFooterMenu from "../components/Navbar/NavbarFooterMenu";
import GridView from "../components/GridView/GridView";
import PageNotFoundPage from "./PageNotFoundPage";
import { SortOptions } from "../enums/sortOptionsEnum";
import { useParams } from "react-router-dom";
import { toTitleCase } from "../utils/stringUtil";
import { Gender } from "../enums/genderEnum";
import { PERFUME_CATALOG } from "../data/data";
import { sortPerfumes } from "../utils/sortingUtil";

function CollectionsPage() {
  const { collection } = useParams();
  const [isCollectionValid, setIsCollectionValid] = useState(true);

  const [page, setPage] = useState(1);
  const [sortedBy, setSortedBy] = useState(SortOptions.DEFAULT);
  const [sortedData, setSortedData] = useState([]);

  // Function to check if collection is valid
  const isValidCollection = (collection) => {
    const normalizedCollection = collection.toLowerCase();
    return Object.values(Gender).some(
      (value) => normalizedCollection === value.toLowerCase()
    );
  };

  const getEnumCollection = (collection) => {
    const normalizedCollection = collection.toLowerCase();
    const entry = Object.entries(Gender).find(
      ([key, value]) => normalizedCollection === value.toLowerCase()
    );
    return entry ? entry[1] : null; // Return the key or null if no match
  };

  // Reset page & sortedBy when collection changes
  useEffect(() => {
    setPage(1);
    setSortedBy(SortOptions.DEFAULT);
  }, [collection]);

  useEffect(() => {
    // Check if collection is valid
    setIsCollectionValid(isValidCollection(collection));

    if (isCollectionValid) {
      const filteredData = PERFUME_CATALOG.filter(
        (perfume) => perfume.gender === getEnumCollection(collection)
      );

      // Sort data based on the selected sorting option
      let sorted = [...filteredData]; // Create a copy to avoid mutating the original data
      sorted = sortPerfumes(sortedBy, sorted);

      // Set the sorted data
      setSortedData(sorted);
    }
  }, [collection, isCollectionValid, sortedBy]);

  if (!isCollectionValid) {
    return <PageNotFoundPage />;
  }

  // TODO: No Product Founc

  return (
    <div>
      {/* Navbar Footer */}
      <NavbarFooterMenu
        title={toTitleCase(collection)}
        defaultSortOptionName="Most Popular"
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />

      {/* Grid View: Content Area */}
      <GridView
        title={`Our Signature ${toTitleCase(collection)} Scents`}
        page={page}
        setPage={setPage}
        data={sortedData}
      />
    </div>
  );
}

export default CollectionsPage;
