const express = require("express");
const router = express.Router();

router.post("/new", (req, res) => {
  console.log(req.body);
  res.json("done");
});

module.exports = router;
