const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, './public');

const { PORT } = process.env;

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(publicPath));

// api routes here

app.use('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

//error middleware

module.exports = app;
