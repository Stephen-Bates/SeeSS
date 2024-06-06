const mongoose = require('mongoose');
require('dotenv').config();

console.log(`attempting to connect db at ${process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/seess'}`);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/seess');

module.exports = mongoose.connection;
