const mongoose = require('mongoose');
const Content = require('./models/Content');
const Topic = require('./models/Topic');

const caseStudies = [
  {
    topicCustomId: 'l1-2',
    title: 'Kesavananda Bharati v. State of Kerala (1973) - Doctrine of Basic Structure',
    description: 'Landmark judgment establishing that Parliament cannot alter the basic structure of Constitution. This case defined the limits of constitutional amendments.',
    type: 'lesson',
    category: 'landmark_judgment',
    content: `CASE: Kesavananda Bharati v. State of Kerala (1973)

BACKGROUND:
- Swami Kesavananda Bharati challenged the 24th Amendment which removed the right to property
- He argued that certain amendments violated the basic structure of the Constitution

KEY RULING:
The Supreme Court established the "Doctrine of Basic Structure" which states that Parliament cannot amend:
1. Supremacy of the Constitution
2. Republican or Democratic form of government
3. Secular character
4. Federal structure
5. Separation of powers
6. Judicial review

IMPACT ON FUNDAMENTAL RIGHTS:
- Citizens cannot surrender their fundamental rights through constitutional amendments
- This protects the core values of the Constitution
- Provides a check on unlimited amendment powers

MODERN RELEVANCE:
- Used to challenge amendments that weaken fundamental rights
- Foundation for striking down amendments as unconstitutional
- Protects minority rights against majoritarian amendments

LESSON: Even supreme legislative bodies are bound by the Constitution's basic framework`,
    sourceReference: 'Supreme Court of India Archives'
  },

  {
    topicCustomId: 'l1-2',
    title: 'Indira Sawhney v. Union of India (1992) - Reservations and Equality',
    description: 'The "Mandal Commission" case which upheld reservations for Other Backward Classes (OBCs) while establishing the 50% ceiling on total reservations.',
    type: 'lesson',
    category: 'landmark_judgment',
    content: `CASE: Indira Sawhney v. Union of India (1992) - Mandal Commission Case

BACKGROUND:
- Implementation of Mandal Commission recommendations for OBC reservations (27%)
- Challenged as violating Article 14 (equality before law)

KEY RULING:
1. Reservations do NOT violate Article 14 if based on reasonable classification
2. Established 50% ceiling on total reservations:
   - SC: 15%
   - ST: 7.5%
   - OBC: 27%
   - Others: 50.5%
3. Creamy layer concept: Well-off OBCs to be excluded from reservations

ABOUT EQUALITY:
- Equality before law allows reasonable classification
- Reservations serve the purpose of social justice and substantive equality
- "Equality" doesn't mean treating unequals as equals

IMPACT:
- Social mobility for historically disadvantaged classes
- Educational institutions became more diverse
- Economic burden of reservations balanced

CONTEMPORARY DEBATES:
- Whether 50% ceiling is sacrosanct
- Expansion of OBC category over time
- Financial vs. social criteria for reservations

LESSON: Constitutional equality is about fairness in treatment, not mechanical sameness`,
    sourceReference: 'Supreme Court of India Archives'
  },

  {
    topicCustomId: 'l1-2',
    title: 'Sarla Mudgal v. Union of India (1995) - Uniform Civil Code',
    description: 'Court highlighted the need for Uniform Civil Code and its absence leading to different treatment under personal laws, particularly in marriage and divorce.',
    type: 'lesson',
    category: 'landmark_judgment',
    content: `CASE: Sarla Mudgal v. Union of India (1995)

BACKGROUND:
- A woman filed petition challenging applicability of different laws on divorce
- Court observed absence of UCC as creating discrimination

KEY OBSERVATIONS:
1. Current system creates confusion and anomalies:
   - Muslim women could instant talaq (before 2017)
   - Hindu women required grounds for divorce
   - Christian women had different provisions
   
2. UCC as Directive Principle (Article 44) was not implemented

3. Lack of UCC creates:
   - Unequal treatment of women
   - Religious bias in personal matters
   - Confusion in succession and inheritance

COURT'S VIEW:
"The Constitution is no doubt secular but the personal laws governing the citizens are not. This is the root cause of gender inequality."

IMPACT:
- Led to reforms in Muslim law (Triple Talaq Act 2019)
- Increased focus on women's rights in personal law
- UCC remains a contentious political-religious issue

LESSON: Even when Constitution is secular, personal laws being religious creates inequalities`,
    sourceReference: 'Supreme Court of India Archives'
  },

  {
    topicCustomId: 'l1-3',
    title: 'State of West Bengal v. Anwar Ali Sarkar (1952) - Reasonable Classification',
    description: 'First major case interpreting Article 14, establishing that "equality" allows for reasonable classification based on legitimate objectives.',
    type: 'lesson',
    category: 'landmark_judgment',
    content: `CASE: State of West Bengal v. Anwar Ali Sarkar (1952)

CONTEXT:
- West Bengal excluded certain categories from competitive exam eligibility
- Challenged as violating Article 14's equality guarantee

PRINCIPLE ESTABLISHED:
The "Doctrine of Reasonable Classification" - Article 14 doesn't prohibit all classifications, only unreasonable ones.

TWO-PART TEST:
1. Reasonable Nexus: Classification must have logical connection to legitimate state objective
2. Arbitrary Discrimination: The classification must not be arbitrary

EXAMPLES OF VALID CLASSIFICATIONS:
- Age limits for different jobs (reasonable nexus to job requirements)
- Educational qualifications (legitimate objective of competence)
- Experience requirements (logical connection)

EXAMPLES OF INVALID CLASSIFICATIONS:
- Race-based discrimination (no reasonable nexus)
- Religious-based selection (arbitrary)
- Gender-based without justification (not connected to objective)

MODERN APPLICATION:
- Used in deciding reservation policies
- Applies to government benefits and employment
- Guides taxation and regulatory policies

LESSON: Equality under Constitution is flexible but not absolute - reasonable classifications are allowed`,
    sourceReference: 'Supreme Court of India Archives'
  },

  {
    topicCustomId: 'l1-5',
    title: 'Shayara Bano v. Union of India (2017) - Triple Talaq Case',
    description: 'Supreme Court held instant triple talaq as unconstitutional, protecting Muslim women\'s rights and demonstrating judicial intervention in personal laws for gender justice.',
    type: 'lesson',
    category: 'landmark_judgment',
    content: `CASE: Shayara Bano v. Union of India (2017) - Triple Talaq Case

BACKGROUND:
- Woman challenged instant triple talaq (talaq-e-biddat) as unconstitutional
- Male-only unilateral divorce was considered discriminatory

KEY RULING:
1. Triple talaq is UNCONSTITUTIONAL - violates Articles 14 (equality) and 21 (life and liberty)

2. Instant talaq:
   - Can happen without woman's knowledge (SMS, email, etc.)
   - Leaves woman destitute without maintenance
   - Denies right to be heard

3. Process violation:
   - Not based on mutual consent
   - Extremely quick (can happen verbally three times)
   - No cooling-off period

GENDER JUSTICE PERSPECTIVE:
- Arbitrary exercise of power only by males
- Leaves women without financial protection
- Violates dignity and dignity of women
- Perpetuates gender inequality

POLITICAL AFTERMATH:
- Triple Talaq (Prohibition) Act, 2019 criminalized instant talaq
- Made talaq a cognizable offense (police can arrest)
- Mandatory period before divorce becomes final

IMPACT ON PERSONAL LAW REFORM:
- Shows courts can intervene in personal laws for constitutional rights
- Women's rights supersede religious personal law
- Set precedent for other reforms

LESSON: Constitutional values trump personal law when they conflict with fundamental rights`,
    sourceReference: 'Supreme Court of India Archives'
  },

  {
    topicCustomId: 'l0-1',
    title: 'Understanding the 42nd Amendment and Emergency (1975-1977)',
    description: 'The 42nd Amendment was passed during the National Emergency (1975-1977), adding "Socialist" and "Secular" to Preamble but also expanding government powers.',
    type: 'lesson',
    category: 'historical_context',
    content: `CONTEXT: 24-Month Emergency (1975-1977)

WHAT WAS THE EMERGENCY:
- President Fakhruddin Ali Ahmed, on PM Indira Gandhi's advice, declared National Emergency
- Cited: "threats to national security"
- Real reason: Political opposition to Gandhi's policies

WHAT HAPPENED DURING EMERGENCY:
- Opposition leaders arrested without trial
- Press censorship imposed
- Fundamental rights suspended
- Over 100,000 arrested under MISA (Maintenance of Internal Security Act)
- Forced sterilization program (Health Minister Sanjay Gandhi)

42ND AMENDMENT CHANGES:
1. Added to Preamble:
   - "Socialist" - to control private property
   - "Secular" - to restrict religious rights
   
2. Reduced judicial review powers
3. Expanded state authority
4. Made some government acts non-justiciable

AFTERMATH (After Emergency Ended):
- Elections held in 1977, Gandhi's government lost
- Janata Party coalition won
- 44th Amendment reversed some 42nd Amendment changes
- Restored fundamental rights protections

KEY REFORMS AFTER:
- Constitutional amendments now require broader consensus
- Safeguards on emergency declaration
- Length of emergency proclamation limited
- Parliamentary approval required within 2 months

LESSON FOR DEMOCRACY:
This period showed how emergency powers could be misused, leading to permanent safeguards in the Constitution

QUESTIONS TO CONSIDER:
1. Can democracy survive extended emergency periods?
2. How to balance security with individual freedoms?
3. What safeguards prevent future emergencies from becoming dictatorships?`,
    sourceReference: 'Constitutional History and Archives'
  }
];

async function addCaseStudies() {
  try {
    await mongoose.connect('mongodb://localhost:27017/samvidhan_sarthi');
    console.log('\n📚 ADDING LANDMARK CASE STUDIES AND REAL-WORLD EXAMPLES\n');
    console.log('='.repeat(80));
    
    let added = 0;
    
    for (const caseStudy of caseStudies) {
      // Find the topic
      const topic = await Topic.findOne({ customId: caseStudy.topicCustomId });
      
      if (topic) {
        // Check if case study already exists
        const existing = await Content.findOne({ 
          title: caseStudy.title,
          topic: topic._id
        });
        
        if (!existing) {
          const newContent = new Content({
            title: caseStudy.title,
            description: caseStudy.description,
            content: caseStudy.content,
            topic: topic._id,
            type: caseStudy.type,
            category: caseStudy.category,
            sourceReference: caseStudy.sourceReference,
            order: 999 // Will be at the end
          });
          
          await newContent.save();
          console.log(`✅ Added: ${caseStudy.title}`);
          added++;
        } else {
          console.log(`⏭️  Already exists: ${caseStudy.title}`);
        }
      } else {
        console.log(`❌ Topic not found: ${caseStudy.topicCustomId}`);
      }
    }
    
    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Successfully added: ${added} case studies`);
    console.log('\n📚 Case studies make learning practical and engaging!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    process.exit(0);
  }
}

addCaseStudies();
