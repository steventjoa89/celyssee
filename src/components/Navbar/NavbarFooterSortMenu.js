import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SortOptions } from "../../enums/sortOptionsEnum";

function NavbarFooterSortMenu({
  sortedBy,
  setSortedBy,
  defaultSortOptionName = "",
  isNewCollections = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const sortOptionsArray = !isNewCollections
    ? Object.entries(SortOptions)
    : Object.entries(SortOptions).filter(
        ([key]) =>
          ![SortOptions.DATE_AZ, SortOptions.DATE_ZA].includes(SortOptions[key])
      );

  const handleItemClick = (key) => {
    toggleDropdown();
    setSortedBy(key);
  };

  const renameDefaultSortOptionName = (value) => {
    return value === SortOptions.FEATURED ? defaultSortOptionName : value;
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Close the dropdown if the click is outside
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="sticky top-20 z-20 border-b border-gray-200 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex items-center h-16">
          <div className="relative flex w-full justify-center md:justify-end">
            <button
              onClick={toggleDropdown}
              className="text-center flex items-center"
            >
              Sort:
              <span className="hidden md:block ml-2">
                <i>{renameDefaultSortOptionName(sortedBy)}</i>
              </span>
              <KeyboardArrowDownIcon className="ml-2" />
            </button>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full right-0 mt-2 text-center md:text-right w-full md:w-auto bg-white border border-gray-200 rounded shadow-lg z-30"
              >
                <ul className="p-2">
                  {sortOptionsArray.map(([key, value]) => (
                    <li
                      key={key}
                      className={`hover:bg-gray-100 px-4 py-2 ${
                        sortedBy === value ? "font-bold" : ""
                      } cursor-pointer`}
                      onClick={() => handleItemClick(value)}
                    >
                      {renameDefaultSortOptionName(value)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarFooterSortMenu;
