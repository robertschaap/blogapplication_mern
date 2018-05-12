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

// allPosts all posts with data of who posted it
PostSchema.statics.allPosts = () => {
  Posts.find();
};

// onePost one post with user data and comments
PostSchema.statics.onePost = () => {
  Posts.find();
};

// createPost
PostSchema.statics.new = (post) => {
  let record = new Posts({
    title: post.title,
    body: post.body,
    category: post.category,
    userId: post.userId
  });

  record.save(err => err ? err : console.log("done"));
};

const Posts = mongoose.model("Post", PostSchema);
module.exports = Posts;
