import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { getPaginatedItems } from "../../utils/mathUtil";
import { Pagination } from "@mui/material";

function NoData() {
  return (
    <div className="flex items-center justify-center min-h-[58vh] text-center">
      <div className="p-8">
        <h3 className="font-title text-base md:text-xl font-bold mb-4">
          No results were found
        </h3>
        <p className="text-sm md:text-base lg:text-xl text-gray-500">
          Enhance your results by carefully reviewing your spelling or consider
          using broader keywords.
        </p>
      </div>
    </div>
  );
}

function GridView({ title, data, isShowPrice = false }) {
  const gridRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);

  const totalItemsPerPage = 12;
  const countPages = Math.ceil(data.length / totalItemsPerPage);

  const handleChangePage = (_, value) => {
    if (gridRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setPage(value);
    // Extract search query from URL
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    // Update URL with search query and new page number
    navigate(`?search=${searchQuery}&page=${value}`);
  };

  useEffect(() => {
    // Extract search query and page number from URL
    const queryParams = new URLSearchParams(location.search);
    // const searchQuery = queryParams.get("search");
    const pageParam = parseInt(queryParams.get("page"), 10);

    if (!isNaN(pageParam)) {
      setPage(pageParam);
    }

    // Fetch data based on the current page
    setProductList(getPaginatedItems(data, page, totalItemsPerPage));
  }, [data, page, location.search]);

  if (data.length === 0) {
    return <NoData />;
  }

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      {/* Title */}
      {title && (
        <h1 className="relative font-title text-2xl mt-8 mb-5">
          {title}
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
        </h1>
      )}

      {/* GridView */}
      <div
        ref={gridRef}
        className={`${
          !title && "mt-4"
        } mx-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8`}
      >
        {productList.map((item, index) => (
          <Card
            key={index}
            item={item}
            isLarge={true}
            isShowPrice={isShowPrice}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mb-8">
        {countPages > 1 && (
          <div className="mt-4">
            <Pagination
              count={countPages}
              shape="rounded"
              page={page}
              onChange={handleChangePage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GridView;
