const mongoose = require('mongoose');
const Content = require('./models/Content');
const Topic = require('./models/Topic');

mongoose.connect('mongodb://localhost:27017/samvidhan_sarthi').then(async () => {
  const contentCount = await Content.countDocuments();
  const topicCount = await Topic.countDocuments();
  const byType = await Content.aggregate([{ $group: { _id: '$type', count: { $sum: 1 } } }]);
  
  console.log('\n=== DATABASE STATUS ===');
  console.log(`Total Topics: ${topicCount}`);
  console.log(`Total Content: ${contentCount}`);
  console.log('\nContent by Type:');
  byType.forEach(item => console.log(`  ${item._id}: ${item.count}`));
  
  process.exit(0);
}).catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
