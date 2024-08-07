import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import { BEST_SELLER_PERFUMES_IDS } from "../data/settings";

function BestSellersPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      PERFUME_CATALOG.filter((perfumeObj) =>
        BEST_SELLER_PERFUMES_IDS.includes(perfumeObj.id)
      )
    );
  }, []);

  return (
    <div>
      <Breadcrumb title="Best Sellers" isShowFilter={false} />

      {/* Grid View: Content Area */}
      <GridView
        title="Our Timeless Best Sellers"
        data={data}
        isShowPrice={false}
      />
    </div>
  );
}

export default BestSellersPage;
