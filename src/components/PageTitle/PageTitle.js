import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = React.memo(({ title }) => {
  const pageTitle = title ? `Dotted Pixels: ${title}` : "Dotted Pixels";

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
});

export default PageTitle;
