import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../ducks/auth";

class LogoutContainer extends Component {
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
  clearAuth
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutContainer);
