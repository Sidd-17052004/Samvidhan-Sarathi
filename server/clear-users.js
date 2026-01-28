// Script to delete all users from the database
// Usage: node clear-users.js

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function clearUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/samvidhan_sarthi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const result = await User.deleteMany({});
    console.log(`Deleted ${result.deletedCount} users.`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Error clearing users:', err);
    process.exit(1);
  }
}

clearUsers();
