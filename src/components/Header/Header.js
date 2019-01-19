// @flow
import React from "react";
import styles from "./Header.scss";
import LoginMenu from "../LoginMenu";
import UserMenu from "../UserMenu";
import Navigation from "../Navigation";

type HeaderPropsType = {
  loggedIn: boolean,
};

const Header = ({ loggedIn }: HeaderPropsType) => (
  <header
    className={styles.component}
    role="heading">
    <nav
      className={styles.main}
      role="navigation">
      <h1>.Dotted Pixels</h1>

      {loggedIn ? <UserMenu /> : <LoginMenu /> }
    </nav>

    <Navigation />
  </header>
);

export default Header;
