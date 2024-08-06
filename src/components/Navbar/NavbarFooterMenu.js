import React, { useEffect, useRef, useState } from "react";
import { toTitleCase } from "../../utils/stringUtil";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SortOptions } from "../../enums/sortOptionsEnum";

function NavbarFooterMenu({
  title = "",
  defaultSortOptionName = "",
  sortedBy,
  setSortedBy,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Content */}
      <div className="sticky top-20 z-20 border-b border-gray-200 bg-white">
        <div className="max-w-full mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Left: Title */}
            <span className="text-sm text-gray-600">
              {toTitleCase(title.toString())}
            </span>

            {/* Right: Sort By Dropdown List */}
            <div className="relative inline-block text-left">
              <div
                className="text-xs text-gray-600 cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                {sortedBy === SortOptions.DEFAULT
                  ? defaultSortOptionName
                  : sortedBy}
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "grey",
                    paddingLeft: "0.5rem",
                  }}
                />
              </div>

              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                >
                  <ul className="py-1">
                    {Object.entries(SortOptions).map(([key, value]) => (
                      <li
                        key={key}
                        className={`px-4 py-2 text-sm ${
                          value === sortedBy && "font-bold"
                        } text-gray-700 hover:bg-gray-100 cursor-pointer truncate`}
                        onClick={() => {
                          setSortedBy(value);
                          toggleDropdown();
                        }}
                      >
                        {value.length === 0 ? defaultSortOptionName : value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarFooterMenu;
