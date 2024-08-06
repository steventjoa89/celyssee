import React, { useEffect } from "react";

function TopSidebar({ isOpen, toggleSidebar, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleSidebar();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div className="relative">
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-white overflow-y-auto transition-transform transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } w-full h-[85px]`}
      >
        {/* Header & Body */}
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default TopSidebar;
