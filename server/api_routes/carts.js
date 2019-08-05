const router = require('express').Router();
const { Cart } = require('../database/index.js');

// GET to api/carts/
// Access: private, admin only
router.get('/', (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    console.log(req.session);
    return Cart.findAll()
      .then(carts => res.json(carts))
      .catch(next);
  } else {
    res.sendStatus(401);
  }
});

// GET to api/carts/:id
// Access: private, admin only
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  if (req.session && req.session.isAdmin) {
    console.log(req.session);
    return Cart.findByPk(id)
      .then(cart => res.json(cart))
      .catch(next);
  } else {
    res.sendStatus(401);
  }
});

// POST to api/carts
// Access: public
// router.post('/', (req, res, next) => {});

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
