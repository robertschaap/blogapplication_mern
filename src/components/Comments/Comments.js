import React from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";

const Comments = () => (
  <section className={styles.component}>
    <h3>Comments</h3>
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <p>No comments yet, be the first!</p>
  </section>
);

export default Comments;
