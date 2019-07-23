//import models here
const db = require('./db');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Profile = require('./models/Profile');

// export models here
module.exports = {
  db,
  Profile,
  Product,
  Review,
};
