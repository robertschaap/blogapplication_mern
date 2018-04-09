import React from "react";
import styles from "./Comment.scss";

const Comment = ({ comment }) => {

  const { user, body } = comment;

  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <img />
      </div>
      <div className={styles.bottom}>
        <div>
          <p className={styles.author}>{user.firstName} {user.lastName}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
