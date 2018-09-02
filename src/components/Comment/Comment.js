import React from "react";
import styles from "./Comment.scss";

const Comment = ({ comment }) => {

  const { author, body } = comment;

  return (
    <div className={styles.component}>
      <div>
        <img className={styles.image} />
      </div>
      <div className={styles.bottom}>
        <div>
          <p className={styles.author}>{author.firstName} {author.lastName}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
