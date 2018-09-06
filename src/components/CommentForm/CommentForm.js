import React from "react";
import styles from "./CommentForm.scss";

const CommentForm = ({ value, onChange, onSubmit }) => (
  <section className={styles.component}>
    <h3>Add Comment</h3>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="comment"
        value={value.comment}
        onChange={onChange} required />
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default CommentForm;
