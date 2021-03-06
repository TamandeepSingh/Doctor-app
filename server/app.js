const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotEnv = require("dotenv");
const jwt = require('jsonwebtoken');

dotEnv.config({ path: './.env' });

const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

const { json, urlencoded } = express;

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});


db.connect( (error) => {
  if(error){
    console.log("DB not connet", error)
  }else{
    console.log("MySql connected")
  }
})


module.exports = app;
