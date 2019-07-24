const router = require('express').Router();
const { User } = require('../database/index.js');

router.get('/', (req, res, next) => {
  return User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

module.exports = router;
