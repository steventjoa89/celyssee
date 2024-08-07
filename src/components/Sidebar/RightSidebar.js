import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

function RightSidebar({ isOpen, toggleSidebar, children }) {
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
        className={`fixed inset-y-0 right-0 z-50 bg-white shadow-xl overflow-y-auto transition-transform transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-[40vw] lg:w-[30vw]`}
      >
        {/* Header */}
        <div className="flex items-center justify-end px-10 pt-10">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none"
          >
            <CloseIcon style={{ fontSize: "1.2rem" }} />
            <span className="ml-1 text-sm">Close</span>
          </button>
        </div>
        {/* Body */}
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

export default RightSidebar;
