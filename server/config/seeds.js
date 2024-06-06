const db = require('./connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.create({
    username: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    username: 'HoltTheLightning',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('*****************************');
  console.log('users seeded');
  console.log('*****************************');

  process.exit();
});
