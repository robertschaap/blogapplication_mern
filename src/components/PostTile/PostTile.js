import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostTile.scss";
import cx from "classnames";

const PostTile = ({ large, small, title, author }) => {

  let hasImage = (large || small);

  return (
    <article 
      className={cx(styles.component, {
        [styles.large]: large,
        [styles.small]: small,
        [styles.textOnly]: !hasImage
      })}>
      <Link to="/posts/1">
        {hasImage && (
          <div className={styles.image} />
        )}
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </Link>
    </article>
  );
};

export default PostTile;
