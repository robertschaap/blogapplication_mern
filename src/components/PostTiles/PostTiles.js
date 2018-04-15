import React from "react";
import styles from "./PostTiles.scss";
import PostTile from "../PostTile";

const PostTiles = ({ homepage, posts }) => {

  let tiles = posts.map((post, index) => {
    if (homepage && index <= 1) {
      return (
      <PostTile
        large
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author} />
      );

    } else if (homepage && index <= 3) {
      return (
        <PostTile
          small
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author} />
      );

    } else {
      return (
        <PostTile 
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author} />
      );
    }
  });

  return (
    <section className={styles.component}>
      {tiles}
    </section>
  );
};

export default PostTiles;
