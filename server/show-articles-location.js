const mongoose = require('mongoose');
const Content = require('./models/Content');
const Topic = require('./models/Topic');

mongoose.connect('mongodb://localhost:27017/samvidhan_sarthi').then(async () => {
  console.log('\n📚 CONSTITUTION ARTICLES ORGANIZATION\n');
  console.log('='.repeat(80));
  
  const topics = await Topic.find().sort('customId');
  
  for (const topic of topics) {
    const lessons = await Content.find({ topic: topic._id, type: 'lesson' }).sort('order');
    if (lessons.length > 0) {
      console.log(`\n📖 ${topic.customId} - ${topic.title} (${topic.difficulty})`);
      console.log('   ' + '-'.repeat(75));
      
      lessons.forEach((content, idx) => {
        const sourceRef = content.sourceReference || 'Standard lesson';
        console.log(`   ${idx + 1}. ${content.title}`);
        console.log(`      └─ ${sourceRef}`);
      });
      
      console.log(`   ├─ Total Lessons: ${lessons.length}`);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('\n📊 SUMMARY BY TOPIC:');
  console.log('='.repeat(80));
  
  const allContent = await Content.find({ type: 'lesson' });
  const topicMap = {};
  
  for (const content of allContent) {
    const topic = await Topic.findById(content.topic);
    if (topic) {
      if (!topicMap[topic.customId]) {
        topicMap[topic.customId] = { title: topic.title, count: 0, articles: [] };
      }
      topicMap[topic.customId].count++;
      if (content.sourceReference?.includes('Article')) {
        topicMap[topic.customId].articles.push(content.sourceReference);
      }
    }
  }
  
  Object.entries(topicMap).sort().forEach(([customId, data]) => {
    const articleCount = data.articles.length;
    console.log(`\n${customId} - ${data.title}`);
    console.log(`  Total lessons: ${data.count}`);
    if (articleCount > 0) {
      console.log(`  Constitution articles: ${articleCount}`);
    }
  });
  
  console.log('\n' + '='.repeat(80) + '\n');
  mongoose.connection.close();
}).catch(e => console.error('❌ Error:', e.message));
