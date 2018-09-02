const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

router.post("/new" , (req, res) => {
  console.log(req.body);
  res.json("done");
});

// TODO: proper API status codes and pw enc/decr
router.post("/login", (req, res) => {
  const { userName, password } = req.body;

  db.Users.findOne({ userName })
    .then(user => {
      if (user && user.password === password) {
        res.json({
          token: jwt.sign({ id: user._id }, "thesecret", { expiresIn: 86400 })
        });
      } else {
        res.json("denied");
      }
    });
});

router.get("/logout", (req, res) => {
  console.log(req.body);
  res.json("done");
});

module.exports = router;
