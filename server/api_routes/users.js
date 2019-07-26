const router = require('express').Router();
const { User } = require('../database/index.js');
const chalk = require('chalk');

// Get all users from database
router.get('/', (req, res, next) => {
  return User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

// Get user by ID route from database
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  return User.findByPk(id)
    .then(user => res.json(user))
    .catch(e => {
      console.log(chalk.redBright('Unable to find user in database!'));
      next(e);
    });
});

// Posting / Adding new user to database
router.post('/', (req, res, next) => {
  const { body } = req;
  return User.create(body)
    .then(newUser => res.json(newUser))
    .catch(e => {
      console.log(chalk.redBright('Error creating/adding new user!'));
      next(e);
    });
});

// Update selected user data to database -- needs fixing **
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  return User.update({ returning: true, where: { id } })
    .then(updatedUser =>
      res.status(204).json({ message: 'User has been successfully updated!' })
    )
    .catch(e => {
      console.log(chalk.redBright('Error updating user: '));
      next(e);
    });
});

// Delete selected user from database
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  return User.destroy({ where: { id } })
    .then(() =>
      res.status(200).json({ message: 'User has been successfully deleted!' })
    )
    .catch(e => {
      console.log(chalk.redBright('Error deleting user from database!'));
      next(e);
    });
});

module.exports = router;
