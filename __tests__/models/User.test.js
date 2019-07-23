<<<<<<< HEAD
=======
require('dotenv').config();

>>>>>>> brought in stash from another branch
const { db, User } = require('./../../server/database');
beforeAll(async () => {
  await db.sync({ force: true });
});
afterAll(async () => {
  await db.close();
});

describe('adding a user', async () => {
<<<<<<< HEAD
  const user = User.create({
    username: 'user123',
    email: 'user123@gmail.com',
    password: 'password',
  });
  test('it should create a user when all fields are valid', () => {
    expect(user.username).toEqual('user123');
=======
  test('it should create a user when all fields are valid', async () => {
    try {
      const user = await User.create({
        username: 'user123',
        email: 'james@gmail.com',
        password: 'password',
      });
      expect(user.username).toEqual('user123');
    } catch (e) {
      console.error('user test error', e);
    }
>>>>>>> brought in stash from another branch
  });
});
