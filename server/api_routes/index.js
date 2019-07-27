// all routes come through here
const router = require('express').Router();
const usersRoutes = require('./users');
const productRoutes = require('./products');

router.use('/users', usersRoutes);

router.use('/products', productRoutes);

module.exports = router;
