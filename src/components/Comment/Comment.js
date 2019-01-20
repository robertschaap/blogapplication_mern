// @flow
import React from "react";
import styles from "./Comment.scss";

type CommentPropsType = {
  comment: {
    author: {
      firstName: string,
      lastName: string,
    },
    body: string,
  },
};

const Comment = ({ comment }: CommentPropsType) => {

  const { author, body } = comment;

  return (
    <div className={styles.component}>
      <div>
        <img className={styles.image} src={"/images/avatars/1.jpg"} />
      </div>
      <div className={styles.bottom}>
        <div>
          <p className={styles.author}>{author.firstName} {author.lastName}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
