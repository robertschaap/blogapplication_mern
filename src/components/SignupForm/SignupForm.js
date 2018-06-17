import React from "react";
import styles from "./SignupForm.scss";

const SignupForm = () => (
  <section className={styles.component}>
    <h2>Join us!</h2>
    <p>Please check your input</p>
    <form action="">
      <label>First Name</label>
      <input type="text" name="firstName" />
      <label>Last Name</label>
      <input type="text" name="lastName" />
      <label>E-mail</label>
      <input type="text" name="email" />
      <label>User Name</label>
      <input type="text" name="userName" />
      <label>Bio</label>
      <textarea name="bio" />
      <label>Avatar (JPEG only)</label>
      <input type="file" accept=".jpg" name="avatar" />
      <label>Password (Minimum 8 Characters)</label>
      <input type="password" name="password" />
      <label>Confirm Password</label>
      <input type="password" />
      <button type="submit">Sign Up</button>
    </form>
  </section>
);

export default SignupForm;
