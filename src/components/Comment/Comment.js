import React from "react";
import styles from "./Comment.scss";

const Comment = () => (
  <div className={styles.component}>
    <div className={styles.top}>
      <img />
    </div>
    <div className={styles.bottom}>
      <div>
        <p className={styles.author}>Author</p>
        <p>Body</p>
      </div>
    </div>
  </div>
);

export default Comment;
