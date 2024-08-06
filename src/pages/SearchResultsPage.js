import React, { useCallback, useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useSearchParams } from "react-router-dom";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [searchQuery, setSearchQuery] = useState(search);
  const [data, setData] = useState([]);

  const getResults = useCallback(() => {
    setData(PERFUME_CATALOG);
  }, [searchQuery]);

  useEffect(() => {
    getResults();
    // getResults();
  }, []);

  return (
    <div>
      <Breadcrumb title="Search Results" isShowFilter={true} />

      {/* Grid View: Content Area */}
      <GridView data={data} />
    </div>
  );
}

export default SearchResultsPage;
