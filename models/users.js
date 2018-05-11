// firstName, lastName, email, userName, bio, password
// createUser, loginUser, profileUser

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  bio: String,
  password: String
}, {
  timestamps: true
});

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
