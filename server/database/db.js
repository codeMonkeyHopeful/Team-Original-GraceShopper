if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URI || 'postgres://localhost:5432/grace_shopper',
  { logging: false }
);

module.exports = db;
