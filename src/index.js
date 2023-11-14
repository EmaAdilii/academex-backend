const express = require('express');
const app = express();
const router = require('./routes/index');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require("morgan");


// setting middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors());
app.use(router);

// Define your API routes in the router file (routes/index.js) and use them here.

// PORT
const port = process.env.APP_PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));
