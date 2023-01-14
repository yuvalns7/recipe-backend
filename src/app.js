"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var recipesScraping_1 = require("./scraping/recipesScraping");
var app = express();
var PORT = 8080;
dotenv.config();
mongoose.connect("mongodb+srv://recipeAdmin:Aa123456@recipe.mkfhw2d.mongodb.net/recipesDB?retryWrites=true&w=majority");
var db = mongoose.connection;
db.on("error", function (err) {
    console.error(err);
});
db.once("open", function (err) {
    console.log("connected to DB");
});
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
app.listen(PORT, function () { return console.log("app running on port ".concat(PORT)); });
(0, recipesScraping_1.scrapingRecipes)();
