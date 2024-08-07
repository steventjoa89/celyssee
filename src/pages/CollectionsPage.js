import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNotFoundPage from "./PageNotFoundPage";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import GridView from "../components/GridView/GridView";
import { Gender, getGenderEnum } from "../enums/genderEnum";
import { toProperCase, toTitleCase } from "../utils/stringUtil";
import { PERFUME_CATALOG } from "../data/data";
import TitleManager from "../components/TitleManager/TitleManager";

function CollectionsPage() {
  const { collection } = useParams();
  const [data, setData] = useState([PERFUME_CATALOG[0]]);

  const checkValidCollection = (collection) => {
    const normalizedCollection = collection.toLowerCase();
    return Object.values(Gender).some(
      (value) => normalizedCollection === value.toLowerCase()
    );
  };

  const isValidCollection = checkValidCollection(collection);

  useEffect(() => {
    if (isValidCollection) {
      setData(
        PERFUME_CATALOG.filter(
          (perfume) => perfume.gender === getGenderEnum(collection)
        )
      );
    }
  }, [isValidCollection, collection]);

  if (!isValidCollection) {
    return <PageNotFoundPage />;
  }

  return (
    <>
      <TitleManager
        templateKey="COLLECTIONS"
        values={{ collection: toProperCase(collection) }}
      />
      <div>
        <Breadcrumb
          title={`${toTitleCase(collection)} Collections`}
          isShowFilter={false}
        />

        {/* Grid View: Content Area */}
        <GridView
          title={`Our Signature ${toTitleCase(collection)} Scents`}
          data={data}
          isShowPrice={false}
        />
      </div>
    </>
  );
}

export default CollectionsPage;
