// @flow
import React, { Fragment } from "react";
import styles from "./Post.scss";
import Comments from "../Comments";
import CommentFormContainer from "../../containers/CommentFormContainer";

type PostPropsType = {
  comments: Array<Object>,
  loggedIn: boolean,
  loggedInUser: Object,
  post: Object,
};

const Post = ({ comments, loggedIn, loggedInUser, post }: PostPropsType) => {
  const { postAuthor, postBody } = post;

  const random = Math.floor(Math.random()* 6) + 1;

  return (
    <Fragment>
      <section
        className={styles.background}
        style={{ backgroundImage: `url(/images/banners/${random}.jpg)` }} />
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
          {loggedIn && (
            <CommentFormContainer
              postId={postBody._id}
              userId={loggedInUser.id} />
          )}

        </div>
      </section>
    </Fragment>
  );
};

export default Post;
