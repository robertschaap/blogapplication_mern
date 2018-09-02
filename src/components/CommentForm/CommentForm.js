import React from "react";
import styles from "./CommentForm.scss";

const CommentForm = () => (
  <section className={styles.component}>
    <h3>Add Comment</h3>
    <form>
      <input type="text" name="comment" required />
      <button>Submit</button>
    </form>
  </section>
);

export default CommentForm;
