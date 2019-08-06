const router = require('express').Router();
const { Cart, Product } = require('../database/index.js');

// GET to api/carts/
// Access: private, admin only
router.get('/', (req, res, next) => {
  let userId = null;
  if (req.session.user) {
    userId = req.session.user.user_id;
  }
  return Cart.findAll({ where: { userId }, include: [Product] })
    .then(cart => {
      res.json(cart);
    })
    .catch(next);
});

// GET to api/carts/:id
// Access: private, admin only
router.get('/:id', (req, res, next) => {
  const { user_id } = req.session.user;

  if (req.session && req.session.isAdmin) {
    console.log('get route cart', user_id);
    return Cart.findAll({ where: { userId: user_id }, include: [Product] })
      .then(cart => {
        console.log(cart);
        res.json(cart);
      })
      .catch(next);
  } else {
    res.sendStatus(401);
  }
});

// POST to api/carts
// Access: public
router.post('/', (req, res, next) => {
  const { body } = req;
  console.log('body', body);
  let userId = null;
  if (req.session.user) {
    userId = req.session.user.user_id;
  }
  const cart = req.body.cart;
  return Promise.all(
    cart.map(({ product, qty }) => {
      const productId = product.id;
      return Cart.findOrCreate({
        where: { userId, productId, purchased: false },
        defaults: { product, qty, price: product.price },
      });
    })
  )
    .then(returnedCart => {
      return Promise.all(
        returnedCart.map(([product, created], i) => {
          const reduxProduct = cart[i];
          if (!created && product.qty !== reduxProduct.qty) {
            return product.update({ qty: reduxProduct.qty });
          } else {
            return Promise.resolve();
          }
        })
      );
    })
    .then(() => res.sendStatus(200))
    .catch(next);
});

// PUT to api/carts/:id
// Access: public
router.put('/:id', (req, res, next) => {
  const { id } = req.params;

  return Cart.findByPk(id)
    .then(cart => {
      return cart.update(req.body, { where: { id } }).then(updatedCart => {
        res.status(201).json({
          message: 'Cart has been successfully updated!',
          cart: updatedCart,
        });
      });
    })
    .catch(e => {
      console.log(chalk.redBright('Error updating cart'));
      next(e);
    });
});

// DELETE to api/carts/:id
// Access: public
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  return Cart.destroy({ where: { id } })
    .then(() => {
      res.status(200).json({
        message: 'Cart has been successfully deleted!',
      });
    })
    .catch(e => {
      console.log(chalk.redBright('Error deleting cart from database!'));
      next(e);
    });
});

module.exports = router;
