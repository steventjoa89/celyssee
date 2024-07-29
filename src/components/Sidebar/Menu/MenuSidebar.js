import React from "react";
import { Link } from "react-router-dom";
import { TOP_MENU_SIDEBAR, FOOTER_MENU } from "../../../data/settings";

function MenuSidebarItem({ menu, toggleSidebar, isTopMenu = true }) {
  return (
    <div className="flex flex-col justify-start text-left px-7">
      <ul className="space-y-3">
        {menu.map((item, index) => (
          <li key={index} className="group">
            <Link to={item.link} onClick={toggleSidebar}>
              <div className="flex items-center justify-start">
                <div
                  className={`${
                    isTopMenu
                      ? "text-lg group-hover:opacity-100 relative"
                      : "text-gray-700"
                  }  font-bold opacity-80`}
                >
                  <span className="relative font-title">
                    {item.name}
                    {isTopMenu && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300"></span>
                    )}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuSidebar({ toggleSidebar }) {
  // Get the bottom submenu
  const helpMenu = FOOTER_MENU.find((menu) => menu.title === "Help");
  const privacyTermsMenu = FOOTER_MENU.find(
    (menu) => menu.title === "Privacy & Terms"
  );

  // Extract submenus and combine them into one array
  const bottomSubmenu = [
    ...(helpMenu ? helpMenu.submenus : []),
    ...(privacyTermsMenu ? privacyTermsMenu.submenus : []),
  ];

  return (
    <div className="p-4 pt-10">
      <MenuSidebarItem menu={TOP_MENU_SIDEBAR} toggleSidebar={toggleSidebar} />

      <div className="mt-6 pt-6 border-t border-gray-200"></div>
      <MenuSidebarItem
        menu={bottomSubmenu}
        toggleSidebar={toggleSidebar}
        isTopMenu={false}
      />
    </div>
  );
}

export default MenuSidebar;
