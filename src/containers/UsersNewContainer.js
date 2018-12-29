import React, { Component } from "react";
import { connect } from "react-redux";
import { submitNewUser } from "../ducks/form";
import SignupForm from "../components/SignupForm";
import PageTitle from "../components/PageTitle";

class UsersNewContainer extends Component {
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
    this.props.submitNewUser(this.state.formData);
  }

  render() {
    return (
      <main>
        <PageTitle title="Join Us!" />
        <SignupForm
          value={this.state.formData}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

const mapDispatchToProps = {
  submitNewUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(UsersNewContainer);
