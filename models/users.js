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

  return record.save().then(result => {
    console.log("created new user");
    return result;
  });
};

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
