// @flow
import React from "react";
import styles from "./LoginForm.scss";

type LoginFormPropsType = {
  onChange: Function,
  onSubmit: Function,
  value: Object,
};

const LoginForm = ({ onChange, onSubmit, value }: LoginFormPropsType) => {
  const {
    userName,
    password,
    remember,
  } = value;

  return (
    <section className={styles.component}>
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onChange} />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange} />

        <button type="submit">Sign In</button>

        <input
          className={styles.remember}
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={onChange} />
        <label className={styles.rememberLabel}>Remember me 24 hours</label>
      </form>
    </section>
  );
};

export default LoginForm;
