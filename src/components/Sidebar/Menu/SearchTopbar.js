import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ROUTES } from "../../../routes";

function SearchTopbar({ toggleSidebar }) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (searchText !== "") {
      if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault();
        toggleSidebar();
        navigate(`${ROUTES.SEARCH}?search=${searchText}`);
        setSearchText("");
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-5 md:px-10">
      <div className="hidden md:block"></div>
      <div className="w-full mr-3 md:w-3/6 md:mr-0">
        {/* Search Textbox */}
        <div className="w-full flex items-center border border-black rounded-full px-[10px] py-[9px]">
          <SearchOutlinedIcon className="text-gray-800 mx-2" />
          <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            onKeyDown={handleKeyDown}
            placeholder='Search for "Enchanted"'
            className="w-full px-0 py-0 bg-transparent border-0 outline-none placeholder:italic placeholder:text-sm placeholder:tracking-wide"
          />
        </div>
      </div>
      {/* Close Icon */}
      <div>
        <button
          onClick={toggleSidebar}
          className="text-gray-500 focus:outline-none"
        >
          <CloseIcon style={{ fontSize: "1.2rem" }} />
        </button>
      </div>
    </div>
  );
}

export default SearchTopbar;
