const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Topic = require('./models/Topic');
const Content = require('./models/Content');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/samvidhan_sarthi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
  seedConstitutionArticles();
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Article mapping structure
const articleMappings = {
  'Preamble': {
    topicId: 'l0-1', // Preamble topic
    articles: [
      {
        articleNum: 'Preamble',
        title: 'Preamble to the Constitution of India',
        order: 1
      }
    ]
  },
  'Union and Its Territory': {
    topicId: 'l1-1', // Part I: Union and its Territory
    articles: [
      { articleNum: '1', title: 'Name and territory of the Union', order: 1 },
      { articleNum: '2', title: 'Admission or establishment of new States', order: 2 },
      { articleNum: '3', title: 'Formation of new States and alteration of areas, boundaries or names of existing States', order: 3 },
      { articleNum: '4', title: 'Laws relating to, or affecting, territories comprised in the Union', order: 4 }
    ]
  },
  'Citizenship': {
    topicId: 'l1-2', // Part II: Citizenship
    articles: [
      { articleNum: '5', title: 'Citizenship at the commencement of the Constitution', order: 1 },
      { articleNum: '6', title: 'Rights of citizenship of certain persons who have migrated to India from Pakistan', order: 2 },
      { articleNum: '7', title: 'Rights of citizenship of certain migrants to Pakistan', order: 3 },
      { articleNum: '8', title: 'Rights of citizenship of certain persons of Indian origin residing outside India', order: 4 },
      { articleNum: '9', title: 'Persons voluntarily acquiring citizenship of a foreign State not to be citizens', order: 5 },
      { articleNum: '10', title: 'Continuance of the rights of citizenship', order: 6 },
      { articleNum: '11', title: 'Parliament to regulate the right of citizenship by law', order: 7 }
    ]
  },
  'Fundamental Rights': {
    topicId: 'l1-2', // Part III: Fundamental Rights
    articles: [
      { articleNum: '12', title: 'Definition of the State', order: 1 },
      { articleNum: '13', title: 'Laws inconsistent with or in derogation of the fundamental rights', order: 2 },
      { articleNum: '14', title: 'Equality before the law', order: 3 },
      { articleNum: '15', title: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth', order: 4 },
      { articleNum: '16', title: 'Equality of opportunity in matters of public employment', order: 5 },
      { articleNum: '17', title: 'Abolition of Untouchability', order: 6 },
      { articleNum: '18', title: 'Abolition of titles', order: 7 },
      { articleNum: '19', title: 'Protection of certain rights regarding freedom of speech, etc.', order: 8 },
      { articleNum: '20', title: 'Protection in respect of conviction for offences', order: 9 },
      { articleNum: '21', title: 'Protection of life and personal liberty', order: 10 },
      { articleNum: '21A', title: 'Right to free and compulsory education', order: 11 },
      { articleNum: '22', title: 'Protection against arrest and detention in certain cases', order: 12 }
    ]
  },
  'Right to Freedom of Religion': {
    topicId: 'l1-2', // Continued Fundamental Rights
    articles: [
      { articleNum: '25', title: 'Freedom of conscience and free profession, practice and propagation of religion', order: 1 },
      { articleNum: '26', title: 'Freedom to manage religious affairs', order: 2 },
      { articleNum: '27', title: 'Freedom as to payment of taxes for promotion of any particular religion', order: 3 },
      { articleNum: '28', title: 'Freedom as to attendance at religious instruction or religious worship in certain educational institutions', order: 4 }
    ]
  },
  'Cultural and Educational Rights': {
    topicId: 'l1-2', // Continued Fundamental Rights
    articles: [
      { articleNum: '29', title: 'Protection of interests of minorities', order: 1 },
      { articleNum: '30', title: 'Right of minorities to establish and administer educational institutions', order: 2 }
    ]
  },
  'Directive Principles': {
    topicId: 'l1-3', // Part IV: Directive Principles of State Policy
    articles: [
      { articleNum: '36', title: 'Definition', order: 1 },
      { articleNum: '37', title: 'Application of the principles contained in this Part', order: 2 },
      { articleNum: '38', title: 'State to secure a social order for the promotion of welfare of the people', order: 3 },
      { articleNum: '39', title: 'Certain principles of policy to be followed by the State', order: 4 },
      { articleNum: '40', title: 'Organization of village panchayats', order: 5 },
      { articleNum: '41', title: 'Right to work, education and public assistance in certain cases', order: 6 },
      { articleNum: '42', title: 'Provision for just and humane conditions of work; maternity relief', order: 7 },
      { articleNum: '43', title: 'Living wage, etc. for workers', order: 8 },
      { articleNum: '44', title: 'Uniform civil code for the citizens', order: 9 },
      { articleNum: '45', title: 'Provision for free and compulsory education for children', order: 10 },
      { articleNum: '46', title: 'Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections', order: 11 },
      { articleNum: '47', title: 'Duty of the State to raise the level of nutrition and the standard of living and to improve public health', order: 12 },
      { articleNum: '48', title: 'Organization of agriculture and animal husbandry on modern and scientific lines', order: 13 },
      { articleNum: '49', title: 'Protection of monuments and places and objects of artistic or historic interest', order: 14 },
      { articleNum: '50', title: 'Separation of judiciary from executive', order: 15 },
      { articleNum: '51', title: 'Promotion of international peace and security', order: 16 }
    ]
  },
  'Fundamental Duties': {
    topicId: 'l1-4', // Part IV-A: Fundamental Duties
    articles: [
      { articleNum: '51A', title: 'Fundamental duties of citizens', order: 1 }
    ]
  },
  'The Executive': {
    topicId: 'l1-5', // Part V: The Union - The Executive
    articles: [
      { articleNum: '52', title: 'The President of India', order: 1 },
      { articleNum: '53', title: 'Executive power of the Union', order: 2 },
      { articleNum: '54', title: 'Election of President', order: 3 },
      { articleNum: '55', title: 'Manner of election of President', order: 4 },
      { articleNum: '56', title: 'Term of office of President', order: 5 },
      { articleNum: '57', title: 'Eligibility for re-election as President', order: 6 },
      { articleNum: '58', title: 'Qualifications for election as President', order: 7 },
      { articleNum: '59', title: 'Conditions of and restrictions on the President\'s office', order: 8 },
      { articleNum: '60', title: 'Oath of office of President', order: 9 },
      { articleNum: '61', title: 'Procedure for impeachment of President', order: 10 },
      { articleNum: '62', title: 'Time of holding election to fill vacancy caused by expiration of President\'s term', order: 11 },
      { articleNum: '63', title: 'The Vice-President of India', order: 12 },
      { articleNum: '64', title: 'The Vice-President to be ex officio Chairman of the Council of States', order: 13 },
      { articleNum: '65', title: 'Acting President or discharge of President\'s functions', order: 14 },
      { articleNum: '66', title: 'Election of Vice-President', order: 15 },
      { articleNum: '67', title: 'Term of office of Vice-President', order: 16 },
      { articleNum: '68', title: 'Time of holding election to fill vacancy caused by expiration of Vice-President\'s term', order: 17 },
      { articleNum: '69', title: 'Oath of office of Vice-President', order: 18 },
      { articleNum: '70', title: 'Discharge of President\'s functions in other contingencies', order: 19 },
      { articleNum: '71', title: 'Disputes relating to election of President or Vice-President', order: 20 },
      { articleNum: '72', title: 'Power of President to grant pardons, reprieves, respites or remissions', order: 21 }
    ]
  }
};

// Load the actual article content from JSON
async function loadArticleContent() {
  try {
    const jsonPath = path.join(__dirname, 'constitution_of_india.json');
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const articles = JSON.parse(rawData);
    return articles;
  } catch (error) {
    console.error('❌ Error loading JSON file:', error);
    return [];
  }
}

// Seed the constitution articles
async function seedConstitutionArticles() {
  try {
    const articlesData = await loadArticleContent();
    
    if (articlesData.length === 0) {
      console.log('⚠️ No articles found in JSON file');
      mongoose.connection.close();
      return;
    }

    let totalAdded = 0;
    let skipped = 0;

    for (const [categoryName, categoryData] of Object.entries(articleMappings)) {
      console.log(`\n📝 Processing category: ${categoryName}`);
      
      // Find the topic
      const topic = await Topic.findOne({ customId: categoryData.topicId });
      
      if (!topic) {
        console.log(`⚠️ Topic not found for customId: ${categoryData.topicId}, skipping category`);
        skipped += categoryData.articles.length;
        continue;
      }

      console.log(`✅ Found topic: ${topic.title}`);

      for (const article of categoryData.articles) {
        try {
          // Check if article already exists
          const existingContent = await Content.findOne({
            topic: topic._id,
            title: article.title
          });

          if (existingContent) {
            console.log(`  ⏭️ Already exists: Article ${article.articleNum} - ${article.title}`);
            skipped++;
            continue;
          }

          // Get article content from JSON
          let articleContent = '';
          const jsonArticle = articlesData.find(a => 
            a.description && a.description.toLowerCase().includes(`article ${article.articleNum}`) ||
            (a.description && article.articleNum === 'Preamble' && a.description.includes('PREAMBLE'))
          );

          if (jsonArticle && jsonArticle.description) {
            articleContent = jsonArticle.description;
          } else {
            // Default content if not found in JSON
            articleContent = `Article ${article.articleNum}: ${article.title}`;
          }

          // Create new content
          const newContent = new Content({
            topic: topic._id,
            title: article.title,
            type: 'lesson',
            content: articleContent,
            order: article.order,
            isActive: true,
            country: topic.country,
            difficulty: topic.difficulty || 'Beginner',
            contentType: 'article',
            sourceReference: `Indian Constitution - Article ${article.articleNum}`
          });

          await newContent.save();
          console.log(`  ✅ Added: Article ${article.articleNum} - ${article.title}`);
          totalAdded++;

        } catch (articleError) {
          console.error(`  ❌ Error adding article ${article.articleNum}:`, articleError.message);
          skipped++;
        }
      }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`📊 Constitution Articles Seeding Complete!`);
    console.log(`${'='.repeat(60)}`);
    console.log(`✅ Successfully added: ${totalAdded} articles`);
    console.log(`⏭️ Already existed/Skipped: ${skipped} articles`);
    console.log(`📚 Total articles processed: ${totalAdded + skipped}`);
    console.log(`${'='.repeat(60)}\n`);

    // Close connection
    mongoose.connection.close();
    console.log('🔌 Database connection closed');

  } catch (error) {
    console.error('❌ Error seeding constitution articles:', error);
    mongoose.connection.close();
    process.exit(1);
  }
}
