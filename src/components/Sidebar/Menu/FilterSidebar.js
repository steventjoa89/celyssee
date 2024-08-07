import React from "react";
import Button from "../../Button/Button";
import Accordion from "../../Accordion/Accordion";

function FilterSidebar({
  genderFilter,
  isGenderFilterChecked,
  setIsGenderFilterChecked,
  volumeFilter,
  isVolumeFilterChecked,
  setIsVolumeFilterChecked,
  handleApplyFilter,
  clearAllFilters,
}) {
  const handleGenderCheckboxChange = (index) => {
    setIsGenderFilterChecked((prev) => {
      const newGenderFilter = [...prev];
      newGenderFilter[index] = !newGenderFilter[index];
      return newGenderFilter;
    });
  };
  const handleVolumeCheckboxChange = (index) => {
    setIsVolumeFilterChecked((prev) => {
      const newVolumeFilter = [...prev];
      newVolumeFilter[index] = !newVolumeFilter[index];
      return newVolumeFilter;
    });
  };

  return (
    <div className="mt-5 w-full px-10 flex flex-col items-start justify-start">
      <button
        onClick={clearAllFilters}
        className="w-full mb-2 flex items-center justify-end text-right text-xs uppercase text-gray-400"
      >
        Clear All Filters
      </button>

      {/* Sort */}

      {/* Gender Filters */}
      <Accordion title="Gender" isShowBottomBorder={true}>
        <div className="px-4 mb-4 text-left">
          <ul className="space-y-3">
            {genderFilter.map((item, index) => (
              <li key={index} className="flex items-center space-x-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-black"
                    checked={isGenderFilterChecked[index]}
                    onChange={() => handleGenderCheckboxChange(index)}
                  />
                  <span className="ml-2 text-sm">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Accordion>

      {/* Volume Filters */}
      <Accordion title="Volume" isShowBottomBorder={true}>
        <div className="px-4 mb-4 text-left">
          <ul className="space-y-3">
            {volumeFilter.map((item, index) => (
              <li key={index} className="flex items-center space-x-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-black"
                    checked={isVolumeFilterChecked[index]}
                    onChange={() => handleVolumeCheckboxChange(index)}
                  />
                  <span className="ml-2 text-sm">{item} Ml</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Accordion>

      {/* Apply Button */}
      <div className="mt-8 w-full flex items-center justify-center">
        <Button onClick={handleApplyFilter}>Apply</Button>
      </div>
    </div>
  );
}

export default FilterSidebar;
