import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth, setAuth } from "../redux";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  state = {
    formData: {
      userName: "",
      password: "",
      remember: false,
    },
  }

  handleChange = (event) => {
    const { target } = event;

    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    })
    .then(res => res.json())
    .then(res => {
      if (res.token) {
        this.props.setAuth(res.token);
      }
    });
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <main>
        <LoginForm
          value={this.state.formData} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: getAuth(state),
});

const mapDispatchToProps = {
  setAuth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
