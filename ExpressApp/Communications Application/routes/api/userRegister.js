const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

/* GET users listing. */
router.post("/", function (req, res, next) {
  if (
    req.body.username == "" ||
    req.body.password == "" ||
    req.body.fullName == "" ||
    req.body.username === undefined ||
    req.body.password === undefined ||
    req.body.fullName === undefined
  ) {
    const data = {
      error: "please provide email, password & full name",
    };

    res.status(403);
    res.end(JSON.stringify(data));
  } else {
    const fullName = req.body.fullName;
    const username = req.body.username;
    const password = req.body.password;

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      const dbo = db.db("project");
      dbo
        .collection("users")
        .find({ email: username }, {})
        .toArray(function (err, result) {
          if (err) throw err;

          if (result.length > 0) {
            const data = {
              error: "User Already Exist",
            };

            res.status(401);

            res.end(JSON.stringify(data));
          } else {
            MongoClient.connect(url, function (err, db) {
              if (err) throw err;
              const dbo = db.db("project");
              const data = {
                name: fullName,
                email: username,
                password: password,
              };
              dbo.collection("users").insertOne(data, function (err, result) {
                if (err) throw err;

                res.end("Registration Success");
                db.close();
              });
            });
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
