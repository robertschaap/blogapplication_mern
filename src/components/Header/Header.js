import React from "react";
import styles from "./Header.scss";
import LoginMenu from "../LoginMenu";
import Navigation from "../Navigation";

const Header = () => (
  <header
    className={styles.component}
    role="heading">
    <nav
      className={styles.main}
      role="navigation">
      <h1>.Dotted Pixels</h1>

      <Login />
    </nav>

    <Navigation />
  </header>
);

export default Header;
