const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
  const comment = {
    body: req.body.comment,
    userId: req.body.userId,
    postId: req.body.postId,
  };

  db.Comments.new(comment).then(comment => {
    res.json({ data: comment });
  });

});

module.exports = router;
