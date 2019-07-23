const { db, User } = require('./../../server/database');
beforeAll(async () => {
  await db.sync({ force: true });
});
afterAll(async () => {
  await db.close();
});

describe('adding a user', async () => {
  const user = User.create({
    username: 'user123',
    email: 'user123@gmail.com',
    password: 'password',
  });
  test('it should create a user when all fields are valid', () => {
    expect(user.username).toEqual('user123');
  });
});
