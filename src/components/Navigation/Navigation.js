import React from "react";
import styles from "./Navigation.scss";

const Navigation = () => (
  <nav className={styles.component} role="navigation">
    <a href="#">Home</a>
    <a href="#">All Posts</a>
    <a href="#">Technology</a>
    <a href="#">Design</a>
    <a href="#">Entrepreneur</a>
    <a href="#">Anything</a>
  </nav>
);

export default Navigation;
