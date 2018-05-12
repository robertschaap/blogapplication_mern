const Users = require("./models/users");

module.exports = function Populate() {
  console.log("populating database");

  Users.new({
    firstName: "Robert",
    lastName: "Schaap",
    email: "robert@robert.com",
    userName: "RobertSchaap",
    bio: "I code and stuff",
    password: "robertschaap"
  });
};
