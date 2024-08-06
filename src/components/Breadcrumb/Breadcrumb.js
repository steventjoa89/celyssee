import React from "react";
import { TuneOutlined } from "@mui/icons-material";

function Breadcrumb({ title = "", isShowFilter = false }) {
  return (
    <div className="sticky top-20 z-20 bg-white shadow-sm">
      <div className="max-w-full mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Left Panel */}
          <div className="text-sm text-gray-600">{title}</div>

          {/* Right Panel */}
          {isShowFilter && (
            <div
              className="text-xs px-4 py-2 border border-gray-500 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => console.log("hello world")}
            >
              <div className="hidden sm:inline">Filters</div>
              <div className="ml-0 sm:ml-1">
                <TuneOutlined style={{ fontSize: 18 }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
