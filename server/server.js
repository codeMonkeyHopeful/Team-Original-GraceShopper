const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const apiRoutes = require('./api_routes');
const chalk = require('chalk');

const app = express();
const publicPath = path.join(__dirname, './public');

app.use(cookieParser());
app.use(express.json());
const morganMode = process.env.NODE_ENV === 'production' ? 'tiny' : 'dev';
app.use(morgan(morganMode));

app.use(express.static(publicPath));

// api routes here

app.use('/api', apiRoutes);

app.use('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

//error middleware
app.use((err, req, res, next) => {
  console.log(chalk.black.bgRed('Error: '), err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

module.exports = app;
