const express = require('express');
const morgan = require('morgan');
const path = require('path');
const chalk = require('chalk');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();

const publicPath = path.join(__dirname, './public');
const { db, Session } = require('./database');

const morganMode = process.env.NODE_ENV === 'production' ? 'tiny' : 'dev';
app.use(morgan(morganMode));

app.use(
  session({
    name: 'sid',
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || 'session_secret3000',
    rolling: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    store: new SequelizeStore({
      db,
      table: 'session',
    }),
  })
);
app.use(express.json());
app.use(express.static(publicPath));

const apiRoutes = require('./api_routes');
app.use('/api', apiRoutes);

app.use('/*', (req, res) => {
  console.log(chalk.red(req.session.id));
  console.log(req.cookie);
  res.sendFile(path.join(publicPath, 'index.html'));
});

//error middleware
app.use((err, req, res, next) => {
  console.log(chalk.black.bgRed('Error: '), err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

module.exports = app;
