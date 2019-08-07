const Sequelize = require('sequelize');
const router = require('express').Router();
const { Cart } = require('../database/index.js');
const { db } = require('./../database/index');

router.get('/', (req, res, next) => {
  console.log('user:', req.session.user.user_id);
  if (req.session.user.user_id) {
    return Cart.findAll({
      where: { purchased: true, userId: req.session.user.user_id },
    })
      .then(purchases => {
        res.json(purchases);
      })
      .catch(next());
  } else {
    console.log('not signed in');
  }
});

module.exports = router;
