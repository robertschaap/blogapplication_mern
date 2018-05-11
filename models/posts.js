// title, body, category
// allPosts, onePost, createPost

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: String,
  body: String,
  category: String
}, {
  timestamps: true
});

const Posts = mongoose.model("Post", PostSchema);
module.exports = Posts;
