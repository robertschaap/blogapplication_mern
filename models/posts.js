const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = require("./users");

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

  const mapUsersToObject = array => array.reduce((accumulator, user) => {
    accumulator[user._id] = `${user.firstName} ${user.lastName}`;
    return accumulator;
  }, {});

  const mapUsersToPosts = ([posts, users]) => (
    posts.map(post => ({
      ...post._doc, author: users[post.userId]
    }))
  );

  return Promise.all([
    Posts.find(category ? { category } : {}).select("title userId"),
    Users.find().select("_id firstName lastName").then(mapUsersToObject)
  ]).then(mapUsersToPosts);
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
