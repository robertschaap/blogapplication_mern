const mongoose = require("mongoose");
mongoose.connect("mongodb:/localhost:27017/blogapplication");
mongoose.connection.on("error", console.error.bind(console), "MDB Connect Err");
mongoose.Promise = global.Promise;

const Comments = require("./comments");
const Posts = require("./posts");
const Users = require("./users");

exports.Comment = Comments;
exports.Posts = Posts;
exports.Users = Users;
