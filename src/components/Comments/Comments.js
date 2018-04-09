import React from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";

const Comments = ({ comments }) => {
  const renderedComments = comments.map((comment, index) => {
    return <Comment key={index} comment={comment} />;
  });

  return (
    <section className={styles.component}>
      <h3>Comments</h3>
      {renderedComments ? renderedComments : <p>No comments yet, be the first!</p>}
    </section>
  );
};

export default Comments;
