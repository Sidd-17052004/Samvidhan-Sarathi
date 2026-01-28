const mongoose = require('mongoose');
const Topic = require('./models/Topic');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/samvidhan_sarthi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Topic.find();
  })
  .then(topics => {
    console.log('Topics:', topics);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.disconnect();
  });
