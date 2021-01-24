require('dotenv').config();

var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./routes.routes");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

var MONGODB_URI = process.env.MONGODB_URI || ""