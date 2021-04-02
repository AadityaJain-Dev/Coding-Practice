var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  res.send("data saved");
});

router.post("/", function (req, res, next) {
  res.send("try get");
});

module.exports = router;
