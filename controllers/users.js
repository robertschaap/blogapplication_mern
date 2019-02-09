const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

router.post("/new" , (req, res) => {
  const user = req.body;

  db.Users.new(user).then(user => {
    res.json({ data: user });
  });
});

// TODO: proper API status codes and pw enc/decr
router.post("/login", (req, res) => {
  const { userName, password } = req.body;

  db.Users.findOne({ userName })
    .then(user => {
      if (user && user.password === password) {
        const response = {
          user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          token: jwt.sign(
            { id: user._id },
            "thesecret",
            { expiresIn: 86400 }
          )
        };

        res.json({ data: response });
      } else {
        res.json({ message: "access denied" });
      }
    });
});

router.get("/logout", (req, res) => {
  console.log(req.body);
  res.json({ message: "succesfully logged out" });
});

module.exports = router;
