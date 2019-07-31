const Sequelize = require('sequelize');
const router = require('express').Router();
const axios = require('axios');
const { ProductCategory } = require('../database/index.js');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

router.get('/level1', (req, res, next) => {
  return db
    .query('SELECT DISTINCT pcid1, name1 from product_categories')
    .then(categories => res.status(201).json(categories[0]))
    .catch(next);
});

router.get('/level2', (req, res, next) => {
  return db
    .query('SELECT DISTINCT pcid2, name2 from product_categories')
    .then(categories => res.status(201).json(categories[0]))
    .catch(next);
});

module.exports = router;
