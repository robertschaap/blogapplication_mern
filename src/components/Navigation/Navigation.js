// @flow
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.scss";

const Navigation = () => (
  <nav className={styles.component} role="navigation">
    <Link to="/">Home</Link>
    <Link to="/posts">All Posts</Link>
    <Link to="/posts/technology">Technology</Link>
    <Link to="/posts/design">Design</Link>
    <Link to="/posts/entrepreneur">Entrepreneur</Link>
    <Link to="/posts/anything">Anything</Link>
  </nav>
);

export default Navigation;
