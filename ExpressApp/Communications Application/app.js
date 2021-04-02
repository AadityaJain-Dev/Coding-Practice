var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// HTML Routes
var indexRouter = require("./routes/index"); // welcome screen
var loginRouter = require("./routes/login"); // login page
var registerRouter = require("./routes/register"); // register page
var dashboardRouter = require("./routes/dashboard"); // login success
var registerSuccessRouter = require("./routes/register-success"); // register success
var manageUserRouter = require("./routes/manageUser"); // manage user
var manageDocsRouter = require("./routes/manageDocs"); // manage Documents
var editUserRouter = require("./routes/editUser"); // edit user
var logoutRouter = require("./routes/logout"); // edit user
var chatRouter = require("./routes/chat"); // edit user

// API Routes
var usersLoginRouter = require("./routes/api/userLogin");
var usersRegisterRouter = require("./routes/api/userRegister");
var allUsersRouter = require("./routes/api/allUsers");
var specificUserRouter = require("./routes/api/specificUser");
var editUsersRouter = require("./routes/api/editUsers");
var deleteUsersRouter = require("./routes/api/deleteUsers");
var groupChatRouter = require("./routes/api/groupChat");
var sendChatRouter = require("./routes/api/sendChat");
var allUploadsRouter = require("./routes/api/allUploads");
var allSharedUploadsRouter = require("./routes/api/allSharedUploads");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// HTML pages path
app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/dashboard", dashboardRouter);
app.use("/register-success", registerSuccessRouter);
app.use("/manage-user", manageUserRouter);
app.use("/manage-docs", manageDocsRouter);
app.use("/logout", indexRouter);
app.use("/edit-user", editUserRouter);
app.use("/chat", indexRouter);

// API paths
app.use("/api/userLogin", usersLoginRouter);
app.use("/api/userRegister", usersRegisterRouter);
app.use("/api/allusers", allUsersRouter);
app.use("/api/user", specificUserRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
