import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  const pageTitle = `Dotted Pixels - ${title}`;
  
  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
