// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth, setAuth } from "../ducks/auth";
import { setUser } from "../ducks/user";
import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";

type LoginContainerPropsType = {
  loggedIn: boolean,
  onHandleSubmit: Function,
};

type LoginContainerStateType = {
  formData: {
    userName: string,
    password: string,
    remember: false,
  }
};

class LoginContainer extends React.Component<LoginContainerPropsType, LoginContainerStateType> {
  state = {
    formData: {
      userName: "",
      password: "",
      remember: false,
    },
  }

  handleChange = (event: Event) => {
    const { target } = event;

    if (target instanceof HTMLInputElement) {
      const name = target.name;
      const value = target.type === "checkbox" ? target.checked : target.value;

      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value
        }
      });
    }
  }

  handleSubmit = (event: Event) => {
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
      if (res.data.token) {
        this.props.onHandleSubmit(res);
      }
    });
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <main>
        <PageTitle title="Sign In" />
        <LoginForm
          value={this.state.formData}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: getAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  onHandleSubmit: (login) => {
    dispatch(setAuth(login.data.token));
    dispatch(setUser(login.data.user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
