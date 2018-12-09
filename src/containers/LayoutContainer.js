import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../redux";

const LayoutContainer = ({ children, loggedIn }) => (
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
