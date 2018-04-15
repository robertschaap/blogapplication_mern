import React from "react";
import CategoryHeader from "../components/CategoryHeader";
import PostTiles from "../components/PostTiles";

let posts =  [
  { id: 1, title: "Title", author: "Author" },
  { id: 2, title: "Title", author: "Author" },
  { id: 3, title: "Title", author: "Author" },
  { id: 4, title: "Title", author: "Author" },
  { id: 5, title: "Title", author: "Author" },
  { id: 6, title: "Title", author: "Author" }
];

const PostsAll = () => (
  <main>
    <CategoryHeader category={"Robert"} />
    <PostTiles posts={posts} />
  </main>
);

export default PostsAll;
