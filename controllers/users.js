const express = require("express");
const router = express.Router();

router.post("/new" , (req, res) => {
  console.log(req.body);
  res.json("done");
});

router.get("/login", (req, res) => {
  console.log(req.body);
  res.json("done");
});

router.get("/logout", (req, res) => {
  console.log(req.body);
  res.json("done");
});

module.exports = router;
