//import models here
const db = require('./db');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Profile = require('./models/Profile');
const User = require('./models/User');
const ProductCategory = require('./models/ProductCategory');

// export models here

Product.belongsTo(ProductCategory);
ProductCategory.hasMany(Product);

Profile.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  db,
  Profile,
  Product,
  Review,
  User,
  ProductCategory,
};
