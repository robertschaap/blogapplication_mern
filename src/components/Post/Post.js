import React, { Fragment } from "react";
import styles from "./Post.scss";
import Comments from "../Comments";
import CommentForm from "../CommentForm";

const Post = ({ post, comments, loggedIn }) => {
  const { postAuthor, postBody } = post;

  return (
    <Fragment>
      <section className={styles.background} />
      <section className={styles.component}>
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
          {loggedIn && <CommentForm />}

        </div>
      </section>
    </Fragment>
  );
};

export default Post;
