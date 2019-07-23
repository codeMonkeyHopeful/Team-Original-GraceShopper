<<<<<<< HEAD
<<<<<<< HEAD
//make a model

const User = db.define('Profile');
=======
=======
>>>>>>> 5012050e46ed33af551193440e3117274bb664d4
const Sequelize = require('sequelize');
const db = require('./../db');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

// add password hashing hook
<<<<<<< HEAD
>>>>>>> basic user model
=======
>>>>>>> 5012050e46ed33af551193440e3117274bb664d4
