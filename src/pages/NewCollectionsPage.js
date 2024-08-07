import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import GridView from "../components/GridView/GridView";
import { PERFUME_CATALOG } from "../data/data";
import TitleManager from "../components/TitleManager/TitleManager";

function NewCollectionsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      PERFUME_CATALOG.sort(
        (a, b) => new Date(b.releaseAt) - new Date(a.releaseAt)
      ).slice(0, 4)
    );
  }, []);

  return (
    <>
      <TitleManager title="New Collection" />

      <div>
        <Breadcrumb title="New Collections" isShowFilter={false} />

        {/* Grid View: Content Area */}
        <GridView
          title="Our Exclusive New Collections"
          data={data}
          isShowPrice={false}
        />
      </div>
    </>
  );
}

export default NewCollectionsPage;
