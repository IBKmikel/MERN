const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_VERSION } = require('./constants');

const app = express();

//imports routing
const authRoutes = require('./router/auth');


//configure body parse
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

//configure static folder
app.use(express.static('uploads'));

//configure header http - cors
app.use(cors());

//configure routings
app.use(`/api/${API_VERSION}`, authRoutes);

module.exports = app;
