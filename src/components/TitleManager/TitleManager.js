import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getTitleForRoute } from "../../utils/routeTitles";

function TitleManager() {
  const location = useLocation();
  const params = useParams();
  const title = getTitleForRoute(location.pathname, params);

  useEffect(() => {
    document.title = title; // Optionally set the title directly
  }, [title]);

  return <Helmet title={title} />;
}

export default TitleManager;
