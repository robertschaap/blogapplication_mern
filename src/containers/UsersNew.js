import React, { Component } from "react";
import SignupForm from "../components/SignupForm";

class UsersNew extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    bio: "",
    avatar: "",
    password: ""
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState=({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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
