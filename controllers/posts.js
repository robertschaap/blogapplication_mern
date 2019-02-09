const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:category(\\D+)" , (req, res) => {
  const { category } = req.params;

  db.Posts.allPosts(category).then(posts => {
    res.json({ data: posts });
  });
});

router.get("/:id([0-9a-fA-F]{24})" , (req, res) => {
  const { id } = req.params;

  db.Posts.onePost(id).then(post => {
    res.json({ data: post });
  });
});

router.get("/" , (req, res) => {
  db.Posts.allPosts().then(posts => {
    res.json({ data: posts });
  });
});

router.post("/new", (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
    userId: req.body.userId,
  };

  db.Posts.new(post).then(post => {
    res.json({ data: post });
  });
});

module.exports = router;
