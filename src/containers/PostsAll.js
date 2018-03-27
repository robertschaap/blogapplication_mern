import React from "react";
import Layout from "./Layout";
import CategoryHeader from "../components/CategoryHeader";
import PostTiles from "../components/PostTiles";

const PostsAll = () => (
  <Layout>
    <CategoryHeader category={"Robert"} />
    <PostTiles />
  </Layout>
);

export default PostsAll;
