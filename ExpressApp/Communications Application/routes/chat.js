var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("group-chat", { title: "Dashboard" });
});

module.exports = router;
