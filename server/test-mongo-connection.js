// Script to test MongoDB connection
require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/samvidhan_sarthi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Successfully connected to MongoDB');
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
  }
}

testConnection();
