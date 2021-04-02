const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

/* GET users listing. */
router.post("/", function (req, res, next) {
  if (
    req.body.email == "" ||
    req.body.email === undefined ||
    req.body.token == "" ||
    req.body.token === undefined ||
    req.body.date == "" ||
    req.body.date === undefined ||
    req.body.message == "" ||
    req.body.message === undefined ||
    req.body.name == "" ||
    req.body.name === undefined
  ) {
    const data = {
      error: "missing parameters",
    };

    res.status(403);
    res.end(JSON.stringify(data));
  } else {
    const email = req.body.email;
    const token = req.body.token;
    const name = req.body.name;
    const date = req.body.date;
    const message = req.body.message;

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      const dbo = db.db("project");
      // match email & token against database
      dbo
        .collection("users")
        .find({ email: email }, {})
        .toArray(function (err, result) {
          if (err) throw err;

          if (result.length > 0) {
            MongoClient.connect(url, function (err, db) {
              if (err) throw err;
              const dbo = db.db("project");
              const data = {
                date: date,
                userFullName: name,
                message: message,
              };
              dbo
                .collection("groupChat")
                .insertOne(data, function (err, result) {
                  if (err) throw err;
                  const data = {
                    status: "success",
                    message: "message received",
                  };

                  res.status(200);

                  res.end(JSON.stringify(data));
                  db.close();
                });
            });
          } else {
            const data = {
              status: "error",
              message: "User unauthenticated",
            };

            res.status(401);

            res.end(JSON.stringify(data));
          }

          db.close();
        });
    });
  }
});

router.get("/", function (req, res, next) {
  res.send("try post");
});

module.exports = router;
