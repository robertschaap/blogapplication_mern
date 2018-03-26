import React from "react";
import styles from "./PostTiles.scss";
import PostTile from "../PostTile";

const PostTiles = () => (
  <section className={styles.component}>
    <PostTile large title={"Title"} author={"Author"} />
    <PostTile large title={"Title"} author={"Author"} />
    <PostTile small title={"Title"} author={"Author"} />
    <PostTile small title={"Title"} author={"Author"} />
    <PostTile title={"Title"} author={"Author"} />
    <PostTile title={"Title"} author={"Author"} />
  </section>
);

export default PostTiles;
