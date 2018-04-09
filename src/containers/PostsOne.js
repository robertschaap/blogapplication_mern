import React from "react";
import Post from "../components/Post";

const post = {
  postAuthor: {
    firstName: "Robert",
    lastName: "Schaap",
    bio: "Lalala"
  },
  postBody: {
    title: "A Post",
    body: "Lorum ipsum dolor sit amet"
  }
};

const comments = [
  { user: { firstName: "Robert", lastName: "Schaap" }, body: "Hi" },
  { user: { firstName: "Robert", lastName: "Schaap" }, body: "Hi" },
  { user: { firstName: "Robert", lastName: "Schaap" }, body: "Hi" },
];

const PostsOne = () => (
  <main>
    <Post post={post} comments={comments} />
  </main>
);

export default PostsOne;
