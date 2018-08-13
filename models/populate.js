const Users = require("./users");
const Posts = require("./posts");

module.exports = function Populate() {
  console.log("populating database");

  Users.new({
    firstName: "Robert",
    lastName: "Schaap",
    email: "robert@robert.com",
    userName: "RobertSchaap",
    bio: "I code and stuff",
    password: "robertschaap"
  })
  .then(output => {
    console.log("outpuh", output._id);

    Posts.new({
      title: "Why CSS is not your worst nightmare",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est auctor dolor tincidunt bibendum eget a arcu. Mauris pellentesque vitae ligula hendrerit efficitur. Maecenas eget eleifend lorem, a ultricies ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam quis est metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam consequat dignissim nunc. Curabitur blandit quam nulla, quis fermentum metus pulvinar sit amet.",
      category: "Design",
      userId: output._id
    });

    Posts.new({
      title: "All about CSS Grid",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est auctor dolor tincidunt bibendum eget a arcu. Mauris pellentesque vitae ligula hendrerit efficitur. Maecenas eget eleifend lorem, a ultricies ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam quis est metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam consequat dignissim nunc. Curabitur blandit quam nulla, quis fermentum metus pulvinar sit amet.",
      category: "Technology",
      userId: output._id
    });

    Posts.new({
      title: "The strange property called Sticky",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est auctor dolor tincidunt bibendum eget a arcu. Mauris pellentesque vitae ligula hendrerit efficitur. Maecenas eget eleifend lorem, a ultricies ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam quis est metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam consequat dignissim nunc. Curabitur blandit quam nulla, quis fermentum metus pulvinar sit amet.",
      category: "Design",
      userId: output._id
    });

    Posts.new({
      title: "Align Middle is missing and it's a problem",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est auctor dolor tincidunt bibendum eget a arcu. Mauris pellentesque vitae ligula hendrerit efficitur. Maecenas eget eleifend lorem, a ultricies ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam quis est metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam consequat dignissim nunc. Curabitur blandit quam nulla, quis fermentum metus pulvinar sit amet.",
      category: "Entrepreneur",
      userId: output._id
    });
  });
};
