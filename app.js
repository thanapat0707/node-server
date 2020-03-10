const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

const cors = require('cors');
const corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200,
	timeout: 10000
};
app.use(cors(corsOptions));

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
	message: 'Page Not Found or wrong URL',
}));

module.exports = app;
