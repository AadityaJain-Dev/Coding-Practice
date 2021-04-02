const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

/* GET users listing. */
router.post("/", function (req, res, next) {
  if (
    req.body.username == "" ||
    req.body.password == "" ||
    req.body.username === undefined ||
    req.body.password === undefined
  ) {
    const data = {
      error: "please provide username & password",
    };

    res.status(403);
    res.end(JSON.stringify(data));
  } else {
    const username = req.body.username;
    const password = req.body.password;
    // TODO: replace find with fineOne function
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      const dbo = db.db("project");
      dbo
        .collection("users")
        .find(
          { email: username, password: password },
          { projection: { password: 0 } }
        )
        .toArray(function (err, result) {
          if (err) throw err;

          if (result <= 0) {
            const data = {
              error: "no user found",
            };
            res.status(401);
            res.end(JSON.stringify(data));
          } else {
            res.status(200);
            res.end(
              '{"status":"Login Success","data": ' +
                JSON.stringify(result[0]) +
                "}"
            );
          }

          db.close();
        });
    });
  }
});

router.get("/", function (req, res, next) {
  res.end("try POST request");
});

module.exports = router;
