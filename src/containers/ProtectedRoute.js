import React from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../redux";

const ProtectedRoute = ({ loggedIn, ...props }) => (
  loggedIn ? <Route {...props} /> : <Redirect to="/" />
);

const mapStateToProps = state => ({
  loggedIn: getAuth(state)
});

export default connect(
  mapStateToProps
)(ProtectedRoute);
