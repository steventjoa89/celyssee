import React from "react";
import { Helmet } from "react-helmet";
import { COMPANY_INFO } from "../../data/settings";

function TitleManager({ title }) {
  const companyName = COMPANY_INFO.COMPANY_NAME;
  const htmlTitle = title
    ? `${title} | ${companyName}`
    : `${companyName} Official Website`;

  return (
    <Helmet>
      <title>{htmlTitle}</title>
    </Helmet>
  );
}

export default TitleManager;
