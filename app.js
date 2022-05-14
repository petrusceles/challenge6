var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const swaggerUi = require("swagger-ui-express");
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(require("./swagger.json"))
);

const router = require("./routes");
app.use("/api/v1", router);

module.exports = app;
