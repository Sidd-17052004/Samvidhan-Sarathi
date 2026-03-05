const mongoose = require('mongoose');
const Content = require('./models/Content');

const enrichedLessons = {
  // Preamble
  'Preamble to the Constitution of India': {
    description: 'The Preamble is the opening statement of the Constitution that outlines the vision and objectives of India as a sovereign democratic republic. It establishes the foundational principles on which the entire Constitution is built.',
    objectives: ['Understand the vision of the Indian Constitution', 'Learn the key objectives: Justice, Liberty, Equality, Fraternity', 'Understand the structure of India as a democratic nation'],
    keyPoints: [
      'India is a Sovereign, Socialist, Secular, Democratic Republic',
      'Preamble defines: Justice (social, economic, political), Liberty, Equality, Fraternity',
      'Preamble is not enforceable in court but provides interpretive guidance',
      'Modified by 42nd Amendment to add "Socialist" and "Secular"'
    ],
    caseStudies: ['Kesavananda Bharati v. State of Kerala (1973) - Doctrine of Basic Structure explained through Preamble']
  },

  // Union Territory
  'Name and territory of the Union': {
    description: 'Article 1 of the Constitution officially names India as "India that is Bharat" and defines the physical territory of the nation, including all states and union territories.',
    objectives: ['Understand India\'s official name and constitutional designation', 'Learn the territorial extent of the Indian nation', 'Know the difference between India and Bharat'],
    keyPoints: [
      'Official names: India or Bharat - both are constitutionally recognized',
      'Territory includes union states, union territories, and incorporated regions',
      'Currently 28 States and 8 Union Territories (as per reorganization)',
      'Jammu & Kashmir special status modified by 370 abrogation in 2019'
    ],
    caseStudies: ['National Textile Workers Union v. P.R. Ramakrishnan (1983) - On nature of Indian Union']
  },

  // Fundamental Rights
  'Equality before the law': {
    description: 'Article 14 guarantees that the State shall not deny any citizen equality before the law or equal protection of law. This is a foundational right ensuring no discrimination.',
    objectives: ['Understand the concept of equality before law', 'Learn difference between equality before law and equal protection', 'Know how courts interpret equality'],
    keyPoints: [
      'Equality before law: Similar treatment by law',
      'Equal protection of law: No discrimination in application',
      'Allows reasonable classification if objective is legitimate and reasonable',
      'Does not mean absolute equality but fairness in treatment',
      'Applies to both citizens and non-citizens'
    ],
    caseStudies: ['State of West Bengal v. Anwar Ali Sarkar (1952) - Established reasonable classification doctrine', 'Indra Sawhney v. Union of India (1992) - On reservations and equality']
  },

  'Right to free and compulsory education': {
    description: 'Article 21A (added by 86th Amendment, 2002) makes free and compulsory education a fundamental right for children aged 6-14 years. This enables India\'s educational development.',
    objectives: ['Understand the right to education as fundamental right', 'Know the scope and implementation of RTE Act', 'Learn about free and compulsory education'],
    keyPoints: [
      'Added as fundamental right by 86th Amendment (2002)',
      'Applies to children aged 6-14 years',
      'Free education is state\'s responsibility',
      'RTE Act, 2009 provides operational framework',
      'No child can be denied education due to inability to pay fees',
      'Touches nearly 250 million children in India'
    ],
    caseStudies: ['Unni Krishnan v. State of Andhra Pradesh (1993) - Right to education was fundamental even before amendment']
  },

  // Directive Principles
  'Uniform civil code for the citizens': {
    description: 'Article 44 directs the State to endeavor to provide a Uniform Civil Code applicable to all citizens regardless of religion. Currently, personal laws of different religions coexist.',
    objectives: ['Understand concept of Uniform Civil Code', 'Know current status of personal laws in India', 'Learn the debate around UCC'],
    keyPoints: [
      'Applies to civil matters: marriage, divorce, inheritance, succession',
      'Currently, different religions have different personal laws',
      'Hindu Code Bills (1955-56) are closest to UCC implementation',
      'Muslim, Christian, Parsi laws remain separate',
      'UCC is directive but politically sensitive',
      'Several states have initiated civil code reforms'
    ],
    caseStudies: ['Sarla Mudgal v. Union of India (1995) - Court pushed for UCC for civil rights', 'Shayara Bano v. Union of India (2017) - Triple talaq case highlighted need for UCC']
  },

  // Fundamental Duties
  'Fundamental duties of citizens': {
    description: 'Article 51A (added by 42nd Amendment, 1976) lists fundamental duties that all Indian citizens must perform. Unlike rights, these are obligations.',
    objectives: ['Understand what are fundamental duties', 'Know why duties are important for democracy', 'Learn each of the 11 fundamental duties'],
    keyPoints: [
      '11 duties listed for all citizens',
      'Not enforceable in court (unlike rights)',
      'Include: respecting constitution, protecting sovereignty, promoting harmony',
      'Duties to follow law, defend nation, yield economic resources',
      'Preserve natural heritage, develop scientific temper',
      'Protect children, promote education'
    ],
    caseStudies: ['State of Gujarat v. Kesarbhai Patel (1995) - Court cannot enforce duties directly']
  },

  // Union Government - Executive
  'The President of India': {
    description: 'The President is the constitutional head of state and supreme commander of armed forces. The President exercises executive power through the Council of Ministers led by the Prime Minister.',
    objectives: ['Understand role and powers of President', 'Learn President\'s appointment process', 'Know President\'s constitutional duties'],
    keyPoints: [
      'Constitutional head of state (not political executive)',
      'Supreme commander of armed forces (ceremonial)',
      'Cannot be sued during tenure',
      'Term of 5 years, eligible for re-election',
      'Elected indirectly by electoral college',
      'Acts on advice of PM and council of ministers',
      'Can dissolve Lok Sabha and recommend dissolution of State assemblies'
    ],
    caseStudies: ['Kesavananda Bharati v. State of Kerala (1973) - President\'s power under basic structure doctrine', 'Minerva Mills v. Union of India (1980) - President cannot amend constitution arbitrarily']
  },

  'Election of President': {
    description: 'The President is elected indirectly by an electoral college comprising MPs and State Legislative Assembly members. This reflects India\'s republican and democratic structure.',
    objectives: ['Understand President election process', 'Know electoral college composition', 'Learn proportional representation system'],
    keyPoints: [
      'Elected by electoral college (not by public vote)',
      'Electoral college: Members of Lok Sabha, Rajya Sabha, State Legislative Assemblies',
      'Uses proportional representation with single transferable vote',
      'Ensures state representation in presidential selection',
      'No religious or regional bias',
      'Sitting President cannot vote for self or influence voting'
    ],
    caseStudies: ['Election Commission guidelines on Presidential elections']
  },

  'The Vice-President of India': {
    description: 'The Vice-President is the second-highest office holder who serves as Chairman of Rajya Sabha (Council of States) and assumes presidency if President dies or resigns.',
    objectives: ['Understand Vice-President\'s role and duties', 'Know difference from President', 'Learn succession mechanism'],
    keyPoints: [
      'Also elected by electoral college (MPs and State Assembly members)',
      'Serves as chairman of Rajya Sabha (upper house)',
      'Acts as President if President becomes incapacitated',
      'Term of 5 years, eligible for re-election',
      '35-year minimum age requirement',
      'Cannot hold any other office of profit'
    ],
    caseStudies: ['Constitutional amendments affecting Vice-Presidential powers']
  },

  // Emergency Provisions
  'Emergency Provisions': {
    description: 'Part XVIII provides mechanisms for the President to declare emergencies to maintain Constitution during threats to national security or state government breakdown.',
    objectives: ['Understand three types of emergencies', 'Know safeguards in emergency', 'Learn Parliament\'s role in emergencies'],
    keyPoints: [
      'National Emergency: External/internal threat to nation',
      'State Emergency: President\'s Rule in state',
      'Financial Emergency: Financial stability threatened',
      '42nd Amendment added safeguards post-1975 Emergency',
      'Parliament must approve within 2 months',
      'Emergency declarations can be revoked by Parliament resolution'
    ],
    caseStudies: ['National Emergency 1975-1977 - Led to constitutional safeguards', 'Minerva Mills case on emergency powers review']
  }
};

async function enrichDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/samvidhan_sarthi');
    console.log('\n📚 ENRICHING DATABASE WITH DETAILED LESSONS\n');
    console.log('='.repeat(80));
    
    let updated = 0;
    let skipped = 0;
    
    for (const [title, enrichment] of Object.entries(enrichedLessons)) {
      const content = await Content.findOne({ title, type: 'lesson' });
      
      if (content) {
        // Update with enriched content
        content.description = enrichment.description;
        content.objectives = enrichment.objectives;
        content.keyPoints = enrichment.keyPoints;
        content.caseStudies = enrichment.caseStudies;
        
        await content.save();
        console.log(`✅ Updated: ${title}`);
        updated++;
      } else {
        console.log(`⏭️  Not found: ${title}`);
        skipped++;
      }
    }
    
    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Successfully enriched: ${updated} lessons`);
    console.log(`⏭️  Skipped (not found): ${skipped} titles`);
    console.log('\n📊 Database enrichment complete!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    process.exit(0);
  }
}

enrichDatabase();
