import React, { Component } from "react";
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
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <main>
        <LoginForm
          value={this.state.formData} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

export default Login;
