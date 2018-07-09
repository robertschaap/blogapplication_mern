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
      avatar: "",
      password: "",
    },
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState=({
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
          value={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

export default UsersNew;
