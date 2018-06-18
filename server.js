const express = require('express');
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const request = require('request');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;

// Require all models
var db = require("./models");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlinesReact";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./controllers/articlesController')(app, db);
require('./controllers/notesController')(app, db);
require('./controllers/scraperController')(app, cheerio, request)

app.listen(port, () => console.log(`Listening on port ${port}`));