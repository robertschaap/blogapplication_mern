import React from "react";
import styles from "./PostTiles.scss";
import PostTile from "../PostTile";

const PostTiles = ({ homepage }) => {

  let tiles = [];

  if (homepage) {
    tiles = [
      <PostTile key={0} large title={"Title"} author={"Author"} />,
      <PostTile key={1} large title={"Title"} author={"Author"} />,
      <PostTile key={2} small title={"Title"} author={"Author"} />,
      <PostTile key={3} small title={"Title"} author={"Author"} />,
      <PostTile key={4} title={"Title"} author={"Author"} />,
      <PostTile key={5} title={"Title"} author={"Author"} />,
    ];
  } else {
    tiles = [
      <PostTile key={0} title={"Title"} author={"Author"} />,
      <PostTile key={1} title={"Title"} author={"Author"} />,
      <PostTile key={2} title={"Title"} author={"Author"} />,
      <PostTile key={3} title={"Title"} author={"Author"} />,
      <PostTile key={4} title={"Title"} author={"Author"} />,
      <PostTile key={5} title={"Title"} author={"Author"} />,
    ];
  }

  return (
    <section className={styles.component}>
      {tiles}
    </section>
  );
};

export default PostTiles;
