// @flow
import React from "react";
import styles from "./PostForm.scss";

type PostFormPropsType = {
  onChange: Function,
  onSubmit: Function,
  value: {
    body: string,
    category: string,
    title: string,
  },
};

const PostForm = ({ onChange, onSubmit, value }: PostFormPropsType) => {

  const { title, body, category } = value;

  return (
    <section className={styles.component}>
      <h2>Create Something New</h2>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange} />

        <label>Body</label>
        <textarea
          type="text"
          name="body"
          value={body}
          onChange={onChange} />

        <label>Image (JPEG Only)</label>
        <input
          type="file"
          accept=".jpg"
          name="banner" />

        <label>Category</label>
        <select name="category" value={category} onChange={onChange}>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Entrepreneur">Entrepreneur</option>
          <option value="Anything">Anything</option>
        </select>

        <button type="submit">Post</button>
      </form>
    </section>
  );
};

export default PostForm;
