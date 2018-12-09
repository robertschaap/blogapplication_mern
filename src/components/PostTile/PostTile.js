import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostTile.scss";
import cx from "classnames";

const PostTile = React.memo(({ large, medium, id, title, author }) => {

  let hasImage = (large || medium);
  const random = Math.floor(Math.random()* 6) + 1;

  return (
    <article
      className={cx(styles.component, {
        [styles.large]: large,
        [styles.medium]: medium,
        [styles.textOnly]: !hasImage
      })}>
      <Link to={`/posts/${id}`}>
        {hasImage && (
          <div
            className={styles.image}
            style={{ backgroundImage: `url(/images/banners/${random}.jpg)` }} />
        )}
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </Link>
    </article>
  );
});

export default PostTile;
