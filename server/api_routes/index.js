// all routes come through here
const router = require('express').Router();
const usersRoutes = require('./users');
const productRoutes = require('./products');
const categoriesRoutes = require('./categories');
const cartRoutes = require('./carts');

router.use('/users', usersRoutes);

router.use('/products', productRoutes);

router.use('/categories', categoriesRoutes);

router.use('/carts', cartRoutes);

module.exports = router;
