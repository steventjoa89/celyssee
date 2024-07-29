import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LeftSidebar from "../Sidebar/LeftSidebar";
import MenuSidebar from "../Sidebar/Menu/MenuSidebar";

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
  const [isScrolled, setIsScrolled] = useState(false);

  // Collapsible Sidebar
  const [isMenuSideBarOpen, setIsMenuSideBarOpen] = useState(false);
  const [isSearchSideBarOpen, setIsSearchSideBarOpen] = useState(false);

  const toggleMenuSidebar = () => {
    setIsMenuSideBarOpen(!isMenuSideBarOpen);
  };

  const toggleSearchSidebar = () => {
    setIsSearchSideBarOpen(!isSearchSideBarOpen);
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on component unmount
    };
  }, []);

  return (
    <>
      {/* Menu Sidebar */}
      <LeftSidebar isOpen={isMenuSideBarOpen} toggleSidebar={toggleMenuSidebar}>
        <MenuSidebar toggleSidebar={toggleMenuSidebar} />
      </LeftSidebar>

      <nav
        className={`sticky top-0 z-30 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white backdrop-filter backdrop-blur-lg border-b border-gray-200"
            : "bg-transparent border-none"
        }`}
      >
        <div className="max-w-full mx-auto px-8 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left - Menu Icon */}
            <ul className="flex flex-row space-x-3">
              {leftNavbarMenu.map((item, index) => (
                <NavbarMenuIcon
                  key={index}
                  menu={item}
                  onClick={() => item.action()}
                />
              ))}
            </ul>

            {/* Middle - Logo */}
            <Link to={ROUTES.HOME}>
              <span className="font-title font-black text-2xl md:text-3xl tracking-[.25em]">
                CELYSSEE
              </span>
            </Link>

            {/* Right - Search & Contact Us Icon*/}
            <ul className="flex flex-row space-x-3">
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
      </nav>
    </>
  );
}

export default Navbar;
