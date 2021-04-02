var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

/* GET users listing. */
router.get("/", function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("project");
    dbo
      .collection("groupChat")
      .find({}, {})
      .toArray(function (err, result) {
        if (err) throw err;

        if (result.length > 0) {
          const data = {
            status: "success",
            data: result,
          };

          res.status(200);

          res.end(JSON.stringify(data));
        } else {
        }

        db.close();
      });
  });
});

router.post("/", function (req, res, next) {
  res.end("use get");
});

module.exports = router;
