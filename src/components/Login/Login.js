import React from "react";
import styles from "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => (
  <div className={styles.component}>
    <Link to="/posts/new/">+</Link>
    <Link to="/users/logout/">Log Out</Link>
    <Link to="/users/login/">Sign In</Link>
    <Link to="/users/new/">Sign Up</Link>
  </div>
);

export default Login;
