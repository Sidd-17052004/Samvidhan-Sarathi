const mongoose = require('mongoose');
const Topic = require('./models/Topic');
const Content = require('./models/Content');
const User = require('./models/User');
const Badge = require('./models/Badge');
const Progress = require('./models/Progress');

mongoose.connect('mongodb://localhost:27017/samvidhan_sarthi').then(async () => {
  console.log('\n📊 DATABASE STORAGE STATUS\n');
  console.log('='.repeat(80));
  
  try {
    // Topics count
    const topicsCount = await Topic.countDocuments();
    const topics = await Topic.find().select('customId title difficulty');
    
    // Content count
    const contentCount = await Content.countDocuments();
    const contentByType = await Content.aggregate([
      { $group: { _id: '$type', count: { $sum: 1 } } }
    ]);
    
    // Users count
    const usersCount = await User.countDocuments();
    const users = await User.find().select('username email country').limit(5);
    
    // Badges count
    const badgesCount = await Badge.countDocuments();
    const badges = await Badge.find().select('name rarity');
    
    // Progress entries
    const progressCount = await Progress.countDocuments();
    const progressSummary = await Progress.find()
      .populate('userId', 'username')
      .select('userId topicsCompleted')
      .limit(5);
    
    console.log('\n📚 TOPICS: ' + topicsCount);
    console.log('   Topics stored:');
    topics.forEach(t => {
      console.log(`   • ${t.customId} - ${t.title} (${t.difficulty})`);
    });
    
    console.log('\n📝 CONTENT: ' + contentCount);
    console.log('   By type:');
    contentByType.forEach(c => {
      console.log(`   • ${c._id}: ${c.count} items`);
    });
    
    console.log('\n👥 USERS: ' + usersCount);
    if (users.length > 0) {
      console.log('   Sample users:');
      users.forEach(u => {
        console.log(`   • ${u.username} (${u.email}) - ${u.country}`);
      });
    } else {
      console.log('   No users found');
    }
    
    console.log('\n🏆 BADGES: ' + badgesCount);
    if (badges.length > 0) {
      console.log('   Badges available:');
      badges.forEach(b => {
        console.log(`   • ${b.name} (${b.rarity})`);
      });
    } else {
      console.log('   No badges found');
    }
    
    console.log('\n📊 PROGRESS ENTRIES: ' + progressCount);
    if (progressSummary.length > 0) {
      console.log('   Sample progress:');
      progressSummary.forEach(p => {
        console.log(`   • ${p.userId?.username || 'Unknown'}: ${p.topicsCompleted?.length || 0} topics completed`);
      });
    } else {
      console.log('   No progress recorded yet');
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('\n✅ DATABASE CONNECTION: SUCCESS');
    console.log(`📍 Database: samvidhan_sarthi (localhost:27017)`);
    console.log(`⏰ Checked at: ${new Date().toLocaleString()}\n`);
    
  } catch (error) {
    console.error('❌ Error checking database:', error.message);
  }
  
  process.exit(0);
}).catch(err => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});
