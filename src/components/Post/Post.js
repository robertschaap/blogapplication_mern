import React from "react";
import styles from "./Post.scss";
import Comments from "../Comments";
import CommentForm from "../CommentForm";

const Post = ({ post, comments }) => {
  const { postAuthor, postBody } = post;

  return (
    <section className={styles.background} key={0} />,
    <section className={styles.component} key={1}>
      <div>
        <article>
          <div className={styles.postHeader}>
            <div className={styles.postTop}>
              <h2>{postBody.title}</h2>
              <p>{postAuthor.firstName} {postAuthor.lastName}</p>
              <p>{postAuthor.bio}</p>
            </div>
            <div className={styles.postBottom}>
              <img />
            </div>
          </div>
          <p>{postBody.body}</p>
        </article>

        <Comments comments={comments} />
        <CommentForm />

      </div>
    </section>
  );
};

export default Post;
