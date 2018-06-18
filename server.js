const express = require('express');
const app = express();
const cheerio = require("cheerio");
const request = require('request');

const port = process.env.PORT || 5000;

require('./controllers/articlesController')(app);
require('./controllers/scraperController')(app, cheerio, request)

app.listen(port, () => console.log(`Listening on port ${port}`));