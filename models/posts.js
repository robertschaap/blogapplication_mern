const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: String,
  body: String,
  category: String,
  userId: String,
}, {
  timestamps: true
});

// allPosts all posts with data of who posted it
PostSchema.statics.allPosts = (category) => {
  return Posts.find(category ? { category } : {});
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

  return record.save().then(result => {
    console.log("created new post");
    return result;
  });
};

const Posts = mongoose.model("Post", PostSchema);
module.exports = Posts;
