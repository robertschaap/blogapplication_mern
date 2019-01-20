// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../ducks/auth";

type LogoutContainerPropsType = {
  clearAuth: Function,
};

class LogoutContainer extends React.Component<LogoutContainerPropsType> {
  componentDidMount() {
    this.props.clearAuth();
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

const mapDispatchToProps = {
  clearAuth,
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutContainer);
