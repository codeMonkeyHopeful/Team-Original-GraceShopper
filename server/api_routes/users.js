const router = require('express').Router();
const { User } = require('../database/index.js');
const chalk = require('chalk');

// GET to api/users/
// Access: private, admin only
router.get('/', (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    return User.findAll()
      .then(users => res.json(users))
      .catch(next);
  } else {
    res.sendStatus(401);
  }
});

// Route: POST to api/users/login
// Access: public
router.post('/login', (req, res, next) => {
  console.log('api login');
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send({ error: 'Invalid login credentials' });
  }

  User.authenticate(email, password)
    .then(user => {
      console.log('user authenticated');
      req.session.user = user;
      req.session.isAdmin = user.isAdmin;
      req.session.save(() => {
        res.status(201).json(user);
      });
    })
    .catch(next);
});

// Route: POST to api/users/logout
// Access: public
router.post('/logout', (req, res, next) => {
  // save cart to db
  req.session.destroy(() => {
    res.send('user logged out');
  });
});

router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.send;
});

// GET to api/users/:id
// Access: private, admin only
router.get('/:id', (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    const { id } = req.params;
    return User.findByPk(id)
      .then(user => res.json(user))
      .catch(e => {
        console.log(chalk.redBright('Unable to find user in database!'));
        next(e);
      });
  }
  res.sendStatus(401);
});

// POST to api/users/
// Access: private, admin only
// Note: this is not the signup route
router.post('/', (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    const { body } = req;
    return User.create(body)
      .then(newUser => res.json(newUser))
      .catch(e => {
        console.log(chalk.redBright('Error creating/adding new user!'));
        next(e);
      });
  }
  res.sendStatus(401);
});

// PUT to api/users/:id
// Access; private
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  if (
    (req.session && req.session.isAdmin) ||
    req.session.user.user_id === parseInt(id)
  ) {
    if (!id || !Object.keys(req.body).length) {
      return res.sendStatus(204);
    }
    // normal users can't change their admin status
    if (!req.session.isAdmin) {
      req.body.isAdmin = false;
    }

    return User.findByPk(id)
      .then(user => {
        return user.update(req.body);
      })
      .then(updatedUser =>
        res.status(201).json({
          message: 'User has been successfully updated!',
          user: updatedUser,
        })
      )
      .catch(e => {
        console.log(chalk.redBright('Error updating user: '));
        next(e);
      });
  }
  res.sendStatus(401);
});

// DELETE to api/users/:id
// Access; private
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  if (
    (req.session && req.session.isAdmin) ||
    req.session.user.user_id === parseInt(id)
  ) {
    return User.destroy({ where: { id } })
      .then(() =>
        res.status(200).json({ message: 'User has been successfully deleted!' })
      )
      .catch(e => {
        console.log(chalk.redBright('Error deleting user from database!'));
        next(e);
      });
  }
  res.sendStatus(401);
});

module.exports = router;
