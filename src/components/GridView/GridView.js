import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { getPaginatedItems } from "../../utils/mathUtil";
import { Pagination } from "@mui/material";
// import { TailSpin } from "react-loader-spinner";   // TODO: REMOVE UNNECESSARY CODE

function GridView({ title = "", data, isShowPrice = false }) {
  const gridRef = useRef(null);

  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const totalItemsPerPage = 12;
  const countPages = Math.ceil(data.length / totalItemsPerPage);

  const handleChangePage = (_, value) => {
    if (gridRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setPage(value);
    }
  };

  useEffect(() => {
    // setIsLoading(true);
    const fetchData = () => {
      setProductList(getPaginatedItems(data, page, totalItemsPerPage));
      // setIsLoading(false);
    };
    fetchData();
  }, [data, page]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      {/* {isLoading ? (
        <TailSpin color="black" width={50} />
      ) : (
        <> */}
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
        className="mx-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
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
      {/* </>
      )} */}
    </div>
  );
}

export default GridView;
