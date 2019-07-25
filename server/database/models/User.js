const Sequelize = require('sequelize');
const db = require('./../db');

const { hashPw, comparePw } = require('./../utils/bcrypt');

const User = db.define('user', {
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

User.beforeCreate(async user => {
  try {
    user.password = await hashPw(user.password);
  } catch (e) {
    console.error('Error creating pw hash', e);
  }
});

User.beforeUpdate(async user => {
  const incomingPw = user.dataValues.password;
  const currentPw = user._previousDataValues.password;

  try {
    if (incomingPw !== currentPw) {
      user.password = await hashPw(incomingPw);
    }
  } catch (e) {
    console.error('Error updating password', e);
  }
});

module.exports = User;
// add password hashing hook
