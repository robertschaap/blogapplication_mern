// @flow
import React from "react";
import styles from "./UserMenu.scss";
import { Link } from "react-router-dom";

const UserMenu = () => (
  <div className={styles.component}>
    <Link to="/posts/new/">+</Link>
    <Link to="/users/logout/">Log Out</Link>
  </div>
);

export default UserMenu;
