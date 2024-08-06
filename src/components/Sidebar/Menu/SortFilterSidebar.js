import React from "react";
import Button from "../../Button/Button";
import CheckIcon from "@mui/icons-material/Check";
import { SortOptions } from "../../../enums/sortOptionsEnum";
import { sortMenuLabel, toProperCase } from "../../../utils/stringUtil";

function SortFilterSidebar({ sortedBy, setSortedBy }) {
  return (
    <div className="mt-5 px-5">
      <div className="w-full px-3 flex flex-grow flex-col items-start justify-start">
        <div className="mb-5 w-full flex items-center justify-between">
          <label className="font-bold text-gray-900 text-sm md:text-base">
            SORT BY :
          </label>
          <Button
            className="px-3 py-2 items-center justify-center border border-gray-400 rounded-full text-xs md:text-sm"
            onClick={() => setSortedBy(null)}
          >
            Clear
          </Button>
        </div>
        <div className="w-full">
          <ul className="space-y-4 text-sm sm:text-base md:text-lg">
            {Object.values(SortOptions).map((sortOption, index) => (
              <li
                key={index}
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setSortedBy(sortOption)}
              >
                {sortOption}
                {sortedBy === sortOption && (
                  <CheckIcon style={{ fontSize: "1.2rem" }} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SortFilterSidebar;
