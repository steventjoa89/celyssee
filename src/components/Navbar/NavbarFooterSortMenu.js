import React, { useState } from "react";
import Button from "../Button/Button";
import TuneIcon from "@mui/icons-material/Tune";
import RightSidebar from "../Sidebar/RightSidebar";
import SortFilterSidebar from "../Sidebar/Menu/SortFilterSidebar";
import { toTitleCase } from "../../utils/stringUtil";

function NavbarFooterSortMenu({ title = "", sortedBy, setSortedBy }) {
  // Sort Sidebar
  const [isSortSidebarOpen, setIsSortSidebarOpen] = useState(false);

  const toggleSortSidebar = () => {
    setIsSortSidebarOpen(!isSortSidebarOpen);
  };

  return (
    <>
      {/* Sort Sidebar */}
      <RightSidebar
        isOpen={isSortSidebarOpen}
        toggleSidebar={toggleSortSidebar}
      >
        <SortFilterSidebar sortedBy={sortedBy} setSortedBy={setSortedBy} />
      </RightSidebar>

      {/* Content */}
      <div className="sticky top-20 z-20 border-b border-gray-200 bg-white">
        <div className="max-w-full mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Left: Title */}
            <div className="flex">
              <span className="text-sm text-gray-600">
                {toTitleCase(title.toString())}
              </span>
            </div>
            {/* Right: Sort By */}
            <div className="flex items-center justify-center">
              <Button
                className="px-3 py-2 items-center justify-center border border-black rounded-full text-xs"
                onClick={toggleSortSidebar}
              >
                <span className="hidden md:inline">Sort By</span>
                <div className="pl-0 md:pl-1 inline">
                  <TuneIcon
                    style={{
                      fontSize: "1.12rem",
                      color: "grey",
                    }}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarFooterSortMenu;
