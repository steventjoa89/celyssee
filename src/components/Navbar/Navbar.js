import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LeftSidebar from "../Sidebar/LeftSidebar";
import MenuSidebar from "../Sidebar/Menu/MenuSidebar";
import { COMPANY_INFO } from "../../data/settings";
import RightSidebar from "../Sidebar/RightSidebar";
import ContactUsSidebar from "../Sidebar/Menu/ContactUsSidebar";
import TopSidebar from "../Sidebar/TopSidebar";
import SearchTopbar from "../Sidebar/Menu/SearchTopbar";

function NavbarMenuIcon({ menu, onClick }) {
  const { icon, name } = menu;

  return (
    <li className="flex items-center cursor-pointer" onClick={onClick}>
      <div className="mr-1 md:mr-2 text-gray-500">{icon}</div>
      <span className="hidden md:block text-sm text-gray-700">{name}</span>
    </li>
  );
}

function Navbar() {
  // Collapsible Sidebar
  const [isMenuSideBarOpen, setIsMenuSideBarOpen] = useState(false);
  const [isSearchSideBarOpen, setIsSearchSideBarOpen] = useState(false);
  const [isContactUsSideBarOpen, setIsContactUsSideBarOpen] = useState(false);

  const toggleMenuSidebar = () => {
    setIsMenuSideBarOpen(!isMenuSideBarOpen);
  };

  const toggleSearchSidebar = () => {
    setIsSearchSideBarOpen(!isSearchSideBarOpen);
  };

  const toggleContactUsSidebar = () => {
    setIsContactUsSideBarOpen(!isContactUsSideBarOpen);
  };

  // Menus
  const leftNavbarMenu = [
    { icon: <MenuOutlinedIcon />, name: "Menu", action: toggleMenuSidebar },
  ];

  const rightNavbarMenu = [
    {
      icon: <SearchOutlinedIcon />,
      name: "Search",
      action: toggleSearchSidebar,
    },
    {
      icon: <PhoneOutlinedIcon />,
      name: "Contact Us",
      action: toggleContactUsSidebar,
    },
  ];

  return (
    <>
      {/* Menu Sidebar */}
      <LeftSidebar isOpen={isMenuSideBarOpen} toggleSidebar={toggleMenuSidebar}>
        <MenuSidebar toggleSidebar={toggleMenuSidebar} />
      </LeftSidebar>

      <TopSidebar
        isOpen={isSearchSideBarOpen}
        toggleSidebar={toggleSearchSidebar}
      >
        <SearchTopbar toggleSidebar={toggleSearchSidebar} />
      </TopSidebar>

      <RightSidebar
        isOpen={isContactUsSideBarOpen}
        toggleSidebar={toggleContactUsSidebar}
      >
        <ContactUsSidebar toggleSidebar={toggleContactUsSidebar} />
      </RightSidebar>

      {/* <nav
        className={`sticky top-0 z-30 transition-all duration-300 ease-in-out ${
          isScrolled || !isHomepage
            ? "bg-white backdrop-filter backdrop-blur-lg border-b border-gray-200"
            : "bg-transparent border-none"
        }`}
      > */}
      <nav className="sticky top-0 z-30 bg-white backdrop-filter backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex items-center h-20 relative">
            {/* Left - Menu Icon */}
            <div className="absolute left-0 flex-shrink-0">
              <ul className="flex flex-row space-x-3">
                {leftNavbarMenu.map((item, index) => (
                  <NavbarMenuIcon
                    key={index}
                    menu={item}
                    onClick={() => item.action()}
                  />
                ))}
              </ul>
            </div>

            {/* Middle - Logo */}
            <div className="flex-grow flex justify-center">
              <Link to={ROUTES.HOME}>
                <span className="font-title font-black text-2xl md:text-3xl tracking-[.25em]">
                  {COMPANY_INFO.COMPANY_NAME}
                </span>
              </Link>
            </div>

            {/* Right - Search & Contact Us Icon */}
            <div className="absolute right-0 flex-shrink-0">
              <ul className="flex flex-row space-x-3 md:space-x-5">
                {rightNavbarMenu.map((item, index) => (
                  <NavbarMenuIcon
                    key={index}
                    menu={item}
                    onClick={() => item.action()}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
