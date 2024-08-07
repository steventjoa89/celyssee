import React from "react";
import { Helmet } from "react-helmet";
import { ROUTES_TITLE } from "../../routesTitle";
import { formatTitle } from "../../utils/formatTitle";

// function TitleManager({ title }) {
//   const companyName = COMPANY_INFO.COMPANY_NAME;
//   const htmlTitle = title
//     ? `${title} | ${companyName}`
//     : `${companyName} Official Website`;

//   return (
//     <Helmet>
//       <title>{htmlTitle}</title>
//     </Helmet>
//   );
// }

const TitleManager = ({ templateKey, values = {} }) => {
  const template = ROUTES_TITLE[templateKey];
  const title = formatTitle(template, values);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default TitleManager;
