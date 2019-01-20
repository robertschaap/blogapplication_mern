// @flow
import React from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../ducks/auth";

type ProtectedRouteContainerPropsType = {
  loggedIn: boolean,
  props: *,
};

const ProtectedRouteContainer = ({ loggedIn, ...props }: ProtectedRouteContainerPropsType) => (
  loggedIn ? <Route {...props} /> : <Redirect to="/" />
);

const mapStateToProps = state => ({
  loggedIn: getAuth(state)
});

export default connect(
  mapStateToProps
)(ProtectedRouteContainer);
