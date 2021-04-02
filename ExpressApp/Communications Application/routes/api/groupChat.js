var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("show data");
});

router.post("/", function (req, res, next) {
  res.send("use get");
});

module.exports = router;
