import React from "react";
import styles from "./Header.scss";

const Header = () => (
  <header 
    className={styles.component}
    role="heading">
    <nav
      className={styles.main}
      role="navigation">
      <h1>.Dotted Pixels</h1>
      
      <div className={styles.signinup}>
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </div>
    </nav>

    <nav role="navigation">
      <a href="#">Home</a>
      <a href="#">All Posts</a>
      <a href="#">Technology</a>
      <a href="#">Design</a>
      <a href="#">Entrepreneur</a>
      <a href="#">Anything</a>
    </nav>
  </header>
);

export default Header;
