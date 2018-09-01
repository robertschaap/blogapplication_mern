import React from "react";
import styles from "./LoginMenu.scss";
import { Link } from "react-router-dom";

const LoginMenu = () => (
  <div className={styles.component}>
    <Link to="/users/login/">Sign In</Link>
    <Link to="/users/new/">Sign Up</Link>
  </div>
);

export default LoginMenu;
