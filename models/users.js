// firstName, lastName, email, userName, bio, password
// createUser, loginUser, profileUser

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  userName: String,
  bio: String,
  password: String
}, {
  timestamps: true
});

UserSchema.statics.new = (user) => {
  let record = new Users({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    userName: user.userName,
    bio: user.bio,
    password: user.password
  });

  record.save(err => err ? err : console.log("done"));
};

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
