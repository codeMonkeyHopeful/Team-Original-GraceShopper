const Sequelize = require('sequelize');
const db = require('../db');
const chalk = require('chalk');

const Session = db.define('session', {
  SID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  visit_count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

Session.beforeUpdate(session => {
  session.visit_count++;
  console.log(chalk.bgGreen('Successfully updated visit count.'));
});

module.exports = Session;
