import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../redux";

class Logout extends Component {
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
)(Logout);
