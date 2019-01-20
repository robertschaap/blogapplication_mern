// @flow
import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../ducks/auth";

type LayoutContainerPropsType = {
  children: React.Node,
  loggedIn: boolean,
};

const LayoutContainer = ({ children, loggedIn }: LayoutContainerPropsType) => (
  <div>
    <Header loggedIn={loggedIn} />
      {children}
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  loggedIn: getAuth(state)
});

export default withRouter(connect(
  mapStateToProps
)(LayoutContainer));
