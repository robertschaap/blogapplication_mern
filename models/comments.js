// body, userId, postId

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  body: String,
  userId: String,
  postId: String
}, {
  timestamps: true
});

const Comments = mongoose.model("Comment", CommentSchema);
module.exports = Comments;
