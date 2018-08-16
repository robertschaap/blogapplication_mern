const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:category(\\D+)" , (req, res) => {
  // TODO matches possible categories ? query db : next
  const { category } = req.params;

  db.Posts.allPosts(category).then(posts => {
    res.json(posts);
  });
});

router.get("/:id(\\d+)" , (req, res) => {
  const post = {
    post: {
      postAuthor: {
        firstName: "Robert",
        lastName: "Schaap",
        bio: "Lalala"
      },
      postBody: {
        title: "A Post",
        body: "Lorum ipsum dolor sit amet"
      }
    },
    comments: []
  };

  res.json(post);
});

router.get("/" , (req, res) => {
  db.Posts.allPosts().then(posts => {
    res.json(posts);
  });
});

router.post("/new", (req, res) => {
  console.log(req.body);
  res.send("blaat");
});

module.exports = router;
