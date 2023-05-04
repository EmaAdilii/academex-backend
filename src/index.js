const express = require('express');
const app = express();
const router = require('./routes/index');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')

dotenv.config();

app.use(bodyParser.json());
app.use(router)

// PORT 
const port = process.env.APP_PORT || 3300;
app.listen(port, () => console.log(`Listening on port ${port}`));



