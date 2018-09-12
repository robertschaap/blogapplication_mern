import React, { Component } from "react";
import SignupForm from "../components/SignupForm";

class UsersNew extends Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      bio: "",
      password: "",
    },
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/users/new", {
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
        <SignupForm
          value={this.state.formData}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

export default UsersNew;
