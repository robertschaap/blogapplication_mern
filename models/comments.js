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

CommentSchema.statics.new = (comment) => {
  let record = new Comments({
    body: comment.body,
    userId: comment.userId,
    postId: comment.postId
  });

  record.save(err => err ? err : console.log("done"));
};

const Comments = mongoose.model("Comment", CommentSchema);
module.exports = Comments;
