const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const apiRoutes = require('./api_routes');
const chalk = require('chalk');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = require('./database/db');
const app = express();
const publicPath = path.join(__dirname, './public');

const morganMode = process.env.NODE_ENV === 'production' ? 'tiny' : 'dev';
app.use(morgan(morganMode));

app.use(cookieParser());

// Learning and trying to apply sessions (not working)
const extendDefaultFields = (defaults, session) => {
  console.log('defaults', defaults);
  console.log(chalk.blue('session', session));
  return { expires: defaults.expires };
};

app.use(
  session({
    secret: 'no secret',
    cookie: {
      expires: 600000,
    },
    name: 'SID',
    resave: false,
    store: new SequelizeStore({
      db,
      table: 'session',
      extendDefaultFields,
    }),
  })
);

app.use(express.json());
app.use(express.static(publicPath));

// api routes here

app.use('/api', apiRoutes);

app.use('/*', (req, res) => {
  // console.dir(req.session, { showHidden: true });
  // session.save();
  console.log(req.session);
  res.sendFile(path.join(publicPath, 'index.html'));
});

//error middleware
app.use((err, req, res, next) => {
  console.log(chalk.black.bgRed('Error: '), err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

module.exports = app;
