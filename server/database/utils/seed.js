// seed shit here
const { db, Profile, Product, Review, User } = require('../index.js');

const usersSeed = require('./seed/data/users');
const userCreator = require('./seed/creators/userCreator');

const product = [
  {
    sku: 'longtext',
    name: 'AA Batteries',
    category: 'Accessories',
    description: 'Give your electronics some juice, bro',
    price: 3.99,
  },
];

const seed = async () => {
  try {
    console.log('syncing db');
    await db.sync({ force: true });

    console.log('seeding users');
    // seed from an array of entries
    await Promise.all(usersSeed.map(user => userCreator(user)));
    // create n random entries
    const usersSeedArr = Array(10).fill();
    await Promise.all(usersSeedArr.map(() => userCreator()));

    console.log('quitting seed');
    await db.close();
  } catch (e) {
    console.error('seeding error', e);
  }
};

seed();
