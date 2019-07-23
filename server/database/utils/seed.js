// seed shit here
const { db, Profile, Product, Review, User } = require('../index.js');

const users = [
  {
    email: 'benson@fsaogs.com',
    password: 'fsanyc',
    isAdmin: true,
  },
  {
    email: 'mark@fsaogs.com',
    password: 'fsanyc',
    isAdmin: true,
  },
  {
    email: 'ryan@fsaogs.com',
    password: 'fsanyc',
    isAdmin: true,
  },
  {
    email: 'russell@fsa.com',
    password: 'fsata',
    isAdmin: false,
  },
];

const product = [
  {
    sku: 'longtext',
    name: 'AA Batteries',
    category: 'Accessories',
    description: 'Give your electronics some juice, bro',
    price: 3.99,
  },
];
