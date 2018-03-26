import React from "react";
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
      <a href="#">
        {hasImage && (
          <div className={styles.image} />
        )}
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </a>
    </article>
  );
};

export default PostTile;
