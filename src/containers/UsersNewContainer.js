// @flow
import React from "react";
import { connect } from "react-redux";
import { submitNewUser } from "../ducks/form";
import SignupForm from "../components/SignupForm";
import PageTitle from "../components/PageTitle";

type UsersNewContainerPropsType = {
  submitNewUser: Function,
};

type UsersNewContainerStateType = {
  formData: {
    bio: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirm: string,
    userName: string,
  },
};

class UsersNewContainer extends React.Component<UsersNewContainerPropsType, UsersNewContainerStateType> {
  state = {
    formData: {
      bio: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      userName: "",
    },
  }

  handleChange = (event: Event) => {
    const { target } = event;

    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
      const { name, value } = target;

      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value
        }
      });
    }
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
