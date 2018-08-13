
const mongoose = require("mongoose");

function run(dbPort, cliInput) {
  initialiseDB(dbPort);

  switch (cliInput) {
  case "populateDB":
    populateDB();
    break;

  case "dropDB":
    dropDB();
    break;

  default:
    break;
  }
}

function initialiseDB(dbPort) {
  mongoose.connect(`mongodb://localhost:${dbPort}/blogapplication`);
  mongoose.connection.on("error", console.error.bind(console), "MDB Connect Err");
  mongoose.Promise = global.Promise;
}

function dropDB() {
  mongoose.connection.dropDatabase().then(err => {
    err ? console.log(err) : console.log("dropped database");
    process.exit();
  });
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
