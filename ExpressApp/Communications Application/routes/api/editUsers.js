var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  if (req.query.email == "" || req.query.email === undefined) {
    const data = {
      error: "email not found",
    };

    res.status(403);
    res.end(JSON.stringify(data));
  } else {
    const email = req.query.email;

    localStorage.getItem("project_token");
    localStorage.getItem("project_email");
  }
});

module.exports = router;
