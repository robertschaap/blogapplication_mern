import React from "react";
import styles from "./PostTiles.scss";
import PostTile from "../PostTile";

const PostTiles = ({ homepage, posts }) => {

  let tiles = posts.map((post, index) => {

    let large = homepage && index <= 1;
    let medium = homepage && index >= 2 && index <= 3;

    return (
      <PostTile
        large={large}
        medium={medium}
        key={post._id}
        id={post._id}
        title={post.title}
        author={post.author} />
    );
  });

  return (
    <section className={styles.component}>
      {tiles}
    </section>
  );
};

export default PostTiles;
