// @flow
import React from "react";
import styles from "./SignupForm.scss";

type SignupFormPropsType = {
  onChange: Function,
  onSubmit: Function,
  value: {
    bio: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirm: string,
    userName: string,
  }
}

const SignupForm = ({ onChange, onSubmit, value }: SignupFormPropsType) => {
  const {
    bio,
    email,
    firstName,
    lastName,
    password,
    passwordConfirm,
    userName,
  } = value;

  return (
    <section className={styles.component}>
      <h2>Join us!</h2>
      <p>Please check your input</p>
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange} />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange} />

        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChange} />

        <label>User Name</label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onChange} />

        <label>Bio</label>
        <textarea
          name="bio"
          value={bio}
          onChange={onChange} />

        <label>Password (Minimum 8 Characters)</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange} />

        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange} />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignupForm;
