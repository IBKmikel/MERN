const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_VERSION } = require('./constants');

const app = express();

//imports routing


//configure body parse
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

//configure static folder
app.use(express.static('uploads'));

//configure header http - cors
app.use(cors());

//configure routings

module.exports = app;
