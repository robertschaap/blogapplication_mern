import React from "react";
import styles from "./PostForm.scss";

const PostForm = () => (
  <section className={styles.component}>
    <h2>Create Something new</h2>
    <form action="">
      <label>Title</label>
      <input type="text" name="title" />
      <label>Body</label>
      <input type="text" name="body" />
      <label>Image (JPEG Only)</label>
      <input type="file" accept=".jpg" name="banner" />
      <label>Category</label>
      <select name="category">
        <option value="Technology">Technology</option>
        <option value="Design">Design</option>
        <option value="Entrepreneur">Entrepreneur</option>
        <option value="Anything">Anything</option>
      </select>
      <button type="submit">Post</button>
    </form>
  </section>
);

export default PostForm;
