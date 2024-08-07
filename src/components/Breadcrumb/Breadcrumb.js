import React, { useState } from "react";
import { TuneOutlined } from "@mui/icons-material";
import RightSidebar from "../Sidebar/RightSidebar";
import FilterSidebar from "../Sidebar/Menu/FilterSidebar";

function Breadcrumb({
  title = "",
  isShowFilter = false,
  genderFilter,
  volumeFilter,
  isGenderFilterChecked,
  setIsGenderFilterChecked,
  isVolumeFilterChecked,
  setIsVolumeFilterChecked,
  handleShowResult,
  clearAllFilters,
}) {
  const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState(false);

  const toggleFilterSidebar = () => {
    setIsFilterSideBarOpen(!isFilterSideBarOpen);
  };

  const handleApplyFilter = () => {
    if (isFilterSideBarOpen) {
      toggleFilterSidebar();
    }
    handleShowResult();
  };

  return (
    <>
      {/* Filter Sidebar */}
      {isShowFilter && (
        <RightSidebar
          isOpen={isFilterSideBarOpen}
          toggleSidebar={toggleFilterSidebar}
        >
          <FilterSidebar
            genderFilter={genderFilter}
            isGenderFilterChecked={isGenderFilterChecked}
            setIsGenderFilterChecked={setIsGenderFilterChecked}
            volumeFilter={volumeFilter}
            isVolumeFilterChecked={isVolumeFilterChecked}
            setIsVolumeFilterChecked={setIsVolumeFilterChecked}
            handleApplyFilter={handleApplyFilter}
            clearAllFilters={clearAllFilters}
          />
        </RightSidebar>
      )}

      <div className="sticky top-20 z-20 bg-white shadow-sm">
        <div className="max-w-full mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Left Panel */}
            <div className="text-xs md:text-sm text-gray-600">{title}</div>

            {/* Right Panel */}
            {isShowFilter && (
              <div
                className="text-xs px-4 py-2 border border-gray-500 rounded-full flex items-center justify-center cursor-pointer"
                onClick={toggleFilterSidebar}
              >
                <div className="hidden sm:inline">Filters</div>
                <div className="ml-0 sm:ml-1">
                  <TuneOutlined style={{ fontSize: 18 }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
