
const mongoose = require("mongoose");

function run(dbPort, cliInput) {
  switch (cliInput) {
  case "populateDB":
    populateDB();
    break;

  case "dropDB":
    dropDB();
    break;

  default:
    initialiseDB(dbPort);
    break;
  }
}

function initialiseDB(dbPort) {
  mongoose.connect(`mongodb://localhost:${dbPort}/blogapplication`);
  mongoose.connection.on("error", console.error.bind(console), "MDB Connect Err");
  mongoose.Promise = global.Promise;
}

function dropDB() {
  console.log("dropping database");
  mongoose.connection.dropDatabase();
  process.exit();
}

function populateDB() {
  Populate();
  process.exit();
}

const Comments = require("./comments");
const Posts = require("./posts");
const Users = require("./users");
const Populate = require("./populate");

exports.Comment = Comments;
exports.Posts = Posts;
exports.Users = Users;
exports.run = run;
