import React from "react";
import styles from "./Post.scss";
import Comments from "../Comments";
import CommentForm from "../CommentForm";

const Post = () => [
  <section className={styles.background} key={0} />,
  <section className={styles.component} key={1}>
    <div>
      <article>
        <div className={styles.postHeader}>
          <div className={styles.postTop}>
            <h2>Post Body Title</h2>
            <p>Author FirstName LastName</p>
            <p>Author Bio</p>
          </div>
          <div className={styles.postBottom}>
            <img />
          </div>
        </div>
        <p>Post Body</p>
      </article>

      <Comments />
      <CommentForm />

    </div>
  </section>
];

export default Post;
