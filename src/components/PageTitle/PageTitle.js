// @flow
import React from "react";
import { Helmet } from "react-helmet";

type PageTitlePropsType = {
  title?: string,
}

class PageTitle extends React.PureComponent<PageTitlePropsType>  {
  render() {
    const { title } = this.props;

    const pageTitle = title ? `Dotted Pixels: ${title}` : "Dotted Pixels";

    return (
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
    );
  }
}

export default PageTitle;
