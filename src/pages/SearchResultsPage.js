import React, { useCallback, useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useSearchParams } from "react-router-dom";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import { Gender } from "../enums/genderEnum";
import NProgress from "nprogress";

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  // const [searchQuery, setSearchQuery] = useState(search);
  const [data, setData] = useState([]);

  // Search Results
  const getResults = useCallback(
    (selectedGender, selectedVolume) => {
      NProgress.start(); // Start the NProgressbar
      const lowerCaseSearchTerm = search.trim().toLowerCase();
      const filteredPerfumes = PERFUME_CATALOG.filter(
        (perfume) =>
          (perfume.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            perfume.description.toLowerCase().includes(lowerCaseSearchTerm) ||
            (perfume.notes &&
              perfume.notes.some((note) =>
                note.toLowerCase().includes(lowerCaseSearchTerm)
              ))) &&
          (selectedGender === undefined ||
            selectedGender.length === 0 ||
            selectedGender.includes(perfume.gender)) &&
          (selectedVolume === undefined ||
            selectedVolume.length === 0 ||
            perfume.sizes.some((size) => selectedVolume.includes(size.volume)))
      ).sort((a, b) => a.id - b.id);
      NProgress.done(); // Stop the NProgressbar
      setData(filteredPerfumes);
    },
    [search]
  );

  useEffect(() => {
    getResults();
  }, [getResults]);

  // Filters Sidebar Configurations
  const genderFilter = Object.values(Gender);
  const volumeFilter = [30, 50, 100];

  const [isGenderFilterChecked, setIsGenderFilterChecked] = useState(
    new Array(genderFilter.length).fill(false)
  );

  const [isVolumeFilterChecked, setIsVolumeFilterChecked] = useState(
    new Array(volumeFilter.length).fill(false)
  );

  const clearAllFilters = () => {
    // Gender
    setIsGenderFilterChecked(new Array(genderFilter.length).fill(false));
    // Volumes
    setIsVolumeFilterChecked(new Array(volumeFilter.length).fill(false));
  };

  const handleShowResult = () => {
    const selectedGender = genderFilter.filter(
      (_, index) => isGenderFilterChecked[index] === true
    );

    const selectedVolume = volumeFilter.filter(
      (_, index) => isVolumeFilterChecked[index] === true
    );

    getResults(selectedGender, selectedVolume);
  };
  // End of Filter Sidebar Configurations

  return (
    <div>
      <Breadcrumb
        title={`Search Result (${data.length})`}
        isShowFilter={true}
        genderFilter={genderFilter}
        volumeFilter={volumeFilter}
        isGenderFilterChecked={isGenderFilterChecked}
        setIsGenderFilterChecked={setIsGenderFilterChecked}
        isVolumeFilterChecked={isVolumeFilterChecked}
        setIsVolumeFilterChecked={setIsVolumeFilterChecked}
        handleShowResult={handleShowResult}
        clearAllFilters={clearAllFilters}
      />

      {/* Grid View: Content Area */}
      <GridView data={data} isShowPrice={true} />
    </div>
  );
}

export default SearchResultsPage;
