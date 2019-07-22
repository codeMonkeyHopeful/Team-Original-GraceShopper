const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URI);

module.exports = db;
