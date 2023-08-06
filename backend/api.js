const axios = require('axios');
const express = require('express');

const client = require('./connection.js')
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


