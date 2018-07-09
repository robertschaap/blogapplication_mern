const express = require("express");
const router = express.Router();

router.get("/" , (req, res) => {
  const posts =  [
    { id: 1, title: "Title", author: "Author" },
    { id: 2, title: "Title", author: "Author" },
    { id: 3, title: "Title", author: "Author" },
    { id: 4, title: "Title", author: "Author" },
    { id: 5, title: "Title", author: "Author" },
    { id: 6, title: "Title", author: "Author" }
  ];

  res.json(posts);
});

router.get("/:category(\\D+)" , (req, res) => {
  const posts =  [
    { id: 1, title: "Title", author: "Author" },
    { id: 2, title: "Title", author: "Author" },
    { id: 3, title: "Title", author: "Author" },
    { id: 4, title: "Title", author: "Author" },
    { id: 5, title: "Title", author: "Author" },
    { id: 6, title: "Title", author: "Author" }
  ];

  res.json(posts);
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

router.post("/new", (req, res) => {
  console.log(req.body);
  res.send("blaat");
});

module.exports = router;
