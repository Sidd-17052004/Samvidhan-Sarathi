const mongoose = require('mongoose');
const Content = require('./models/Content');
const Topic = require('./models/Topic');

const sectionQuizzes = [
  {
    topicCustomId: 'l1-2',
    title: 'Fundamental Rights: Equality and Non-Discrimination',
    description: 'Test your understanding of Articles 14-18 covering equality before law, prohibition of discrimination, and opportunities in public employment.',
    difficulty: 'beginner',
    questions: [
      {
        question: 'Under Article 14, can the State classify people into different groups?',
        options: [
          'No, Article 14 prohibits all classifications',
          'Yes, but only if reasonable classification with logical nexus to a legitimate objective',
          'Yes, without any restrictions',
          'Only if approved by President'
        ],
        correct: 1,
        explanation: 'Article 14 allows reasonable classifications. The Anwar Ali Sarkar case established the "doctrine of reasonable classification" - classifications are valid if they have rational relation to the objective sought.'
      },
      {
        question: 'What did the Indira Sawhney case establish about reservations?',
        options: [
          'Reservations violate equality rights',
          'Reservations are allowed but cannot exceed 50% total, with creamy layer concept',
          'Reservations should be 100% for backward classes',
          'Only President can decide on reservations'
        ],
        correct: 1,
        explanation: 'The Mandal Commission case upheld OBC reservations but established the 50% ceiling: 15% SC, 7.5% ST, 27% OBC, and introduced "creamy layer" to exclude well-off OBCs.'
      },
      {
        question: 'Article 15 prohibits discrimination on grounds of:',
        options: [
          'Religion, race, caste, sex, place of birth',
          'Income and education only',
          'Political beliefs',
          'Marital status'
        ],
        correct: 0,
        explanation: 'Article 15 explicitly prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. However, the State can make special provisions for women and children.'
      },
      {
        question: 'What is "substantive equality" in contrast to "formal equality"?',
        options: [
          'Equality that is very important',
          'Treating unequals as equals for practical justice',
          'The same thing as formal equality',
          'Equality that applies only in courts'
        ],
        correct: 1,
        explanation: 'Substantive equality means providing different treatment to people in different circumstances so they can actually enjoy equal benefits. Formal equality just means similar treatment by law.'
      }
    ]
  },

  {
    topicCustomId: 'l1-3',
    title: 'Directive Principles: Understanding State Duties',
    description: 'Quiz on Part IV articles that guide state policy toward social and economic justice, including education, labor rights, and socio-economic welfare.',
    difficulty: 'intermediate',
    questions: [
      {
        question: 'What is the key difference between Fundamental Rights and Directive Principles?',
        options: [
          'Both are the same',
          'Rights are directly enforceable in courts; Directives guide state policy but are not directly enforceable',
          'Directives are more important than rights',
          'Fundamental Rights apply only to minorities'
        ],
        correct: 1,
        explanation: 'Article 37 states that Directive Principles are not enforceable in courts but "principles laid down are nevertheless fundamental in the governance of the country." Courts can use them as interpretive guides.'
      },
      {
        question: 'Article 45 directs to provide free and compulsory education. In which budget year did this become fundamental right?',
        options: [
          '1950',
          '1976 (42nd Amendment)',
          '2002 (86th Amendment)',
          '2009 (RTE Act)'
        ],
        correct: 2,
        explanation: 'The 86th Amendment (2002) made Articles 21A which made education a fundamental right under Part III while also retaining it as directive principle in Part IV.'
      },
      {
        question: 'What does Article 44 (Uniform Civil Code) currently experience in India?',
        options: [
          'It is fully implemented',
          'It is a directive principle not yet fully implemented; personal laws remain',
          'It only applies to railways',
          'It was removed by 42nd Amendment'
        ],
        correct: 1,
        explanation: 'Article 44 remains a directive principle. India maintains separate personal laws for different religions. The Sarla Mudgal case highlighted the inequalities this creates, especially for women.'
      },
      {
        question: 'Which article directs to separate judiciary from executive?',
        options: [
          'Article 50',
          'Article 40',
          'Article 60',
          'Article 70'
        ],
        correct: 0,
        explanation: 'Article 50 is a directive principle stating "The State shall take steps to separate the judiciary from the executive in the public services in the State." This promotes rule of law and independence of courts.'
      }
    ]
  },

  {
    topicCustomId: 'l1-5',
    title: 'Union Government: President and Executive Powers',
    description: 'Test knowledge of Articles 52-78: Presidential powers, appointment of council of ministers, and functioning of Union executive.',
    difficulty: 'intermediate',
    questions: [
      {
        question: 'Who is the real executive head of India - President or Prime Minister?',
        options: [
          'President is both constitutional and political executive',
          'Prime Minister is political executive; President is constitutional head',
          'Both share equally',
          'Foreign policy is PM, domestic is President'
        ],
        correct: 1,
        explanation: 'President is the constitutional head and nominal executive. The Prime Minister heads the council of ministers and is the real political executive. This follows Westminster parliamentary system.'
      },
      {
        question: 'The President can dismiss a Prime Minister:',
        options: [
          'When President wishes',
          'When the PM loses majority in Lok Sabha; President acts on constitutional convention',
          'Never, President has no such power',
          'Only with Supreme Court permission'
        ],
        correct: 1,
        explanation: 'Though President appoints PM, the President cannot arbitrarily dismiss. The PM continues if they have majority support. When no PM enjoys majority, President can act, but typically following democratic conventions.'
      },
      {
        question: 'How many members are in the Council of Ministers appointed by President?',
        options: [
          'Fixed at 50',
          'Fixed at 30',
          'Flexible - determined by PM\'s requirement (with limit roughly to 80)',
          'Determined by President alone'
        ],
        correct: 2,
        explanation: 'The Constitution does not fix the number. The PM recommends and President appoints. Currently there is a constitutional convention limiting it to about 3-4% of Lok Sabha strength (roughly 80 members).'
      },
      {
        question: 'What does Article 74 require?',
        options: [
          'President must consult only Foreign Minister',
          'President must have a Council of Ministers headed by PM for advice',
          'President has absolute discretion to ignore advice',
          'Prime Minister has no constitutional role'
        ],
        correct: 1,
        explanation: 'Article 74(1): "There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President in the exercise of his functions." President is bound by this advice (except in rare constitutional situations).'
      }
    ]
  },

  {
    topicCustomId: 'l0-1',
    title: 'Preamble: Constitutional Vision and Values',
    description: 'Understand the objectives of Indian Constitution: Justice, Liberty, Equality, and Fraternity.',
    difficulty: 'beginner',
    questions: [
      {
        question: 'Which amendments added "Socialist" and "Secular" to the Preamble?',
        options: [
          '24th Amendment',
          '42nd Amendment',
          '44th Amendment',
          '101st Amendment'
        ],
        correct: 1,
        explanation: 'The 42nd Amendment (1976) during National Emergency added "Socialist" and "Secular" to the Preamble. The 44th Amendment (1978) after Emergency ended, retained these words.'
      },
      {
        question: 'What does "Sovereign" in the opening mean?',
        options: [
          'India has a king or queen',
          'India is not subject to any foreign power; has supreme authority',
          'India is a royal nation',
          'Only President is sovereign'
        ],
        correct: 1,
        explanation: 'Sovereign means India is free from external control and has supreme authority over its affairs. India is not a dominion but an independent republic answerable to no external power.'
      },
      {
        question: 'The four values in Preamble are:',
        options: [
          'Order, Peace, Progress, Justice',
          'Justice, Liberty, Equality, Fraternity',
          'Democracy, Socialism, Secularism, Republicanism',
          'Wealth, Health, Education, Welfare'
        ],
        correct: 1,
        explanation: 'The Preamble seeks to secure Justice (social, economic, political), Liberty (of thought, expression, belief, faith, worship), Equality (of status, opportunity), and Fraternity (dignity, unity of nation).'
      },
      {
        question: 'Is the Preamble enforceable in courts?',
        options: [
          'Yes, directly enforceable',
          'No, but it guides interpretation of Constitution and rights',
          'Only when President orders',
          'Never - it is ceremonial'
        ],
        correct: 1,
        explanation: 'While not directly enforceable as a right, courts use Preamble as an aid in constitutional interpretation. It provides the context and spirit in which other articles should be read.'
      }
    ]
  },

  {
    topicCustomId: 'l1-2',
    title: 'Citizenship and Rights: Who is an Indian Citizen?',
    description: 'Part II of Constitution covers citizenship acquisition, loss, and safeguarding. Test understanding of citizenship framework.',
    difficulty: 'intermediate',
    questions: [
      {
        question: 'When did India\'s citizenship law come into effect?',
        options: [
          'January 26, 1950 (Constitution adoption)',
          'January 26, 1951 (one year after)',
          'August 15, 1947 (independence)',
          'December 25, 1949'
        ],
        correct: 0,
        explanation: 'Citizenship laws took effect on January 26, 1950, when the Constitution came into force. All Indian nationals automatically became citizens.'
      },
      {
        question: 'A person born in India to at least one Indian parent after 26 Jan 1950 is:',
        options: [
          'Not automatically a citizen',
          'A citizen if parents register',
          'A citizen by birth (jus soli)',
          'Required to apply for citizenship'
        ],
        correct: 2,
        explanation: 'Under Article 5, children born in India after Jan 26, 1950, to at least one Indian parent are automatic citizens by birth. This is "jus soli" (right of earth).'
      },
      {
        question: 'Can an Indian citizen voluntarily acquire citizenship of another country?',
        options: [
          'No, never allowed',
          'Yes, and India will not tolerate this',
          'Yes, but voluntary acquisition of foreign citizenship results in loss of Indian citizenship',
          'Only with government permission'
        ],
        correct: 2,
        explanation: 'Article 9: If a citizen voluntarily acquires citizenship of a foreign state, they cease to be an Indian citizen. This is automatic, not requiring any formal action by India.'
      },
      {
        question: 'What is the significance of Part II (Citizenship) in Constitution?',
        options: [
          'It defines who inherits property',
          'It defines who are Indian citizens and their rights, distinguishing citizens from residents',
          'It explains taxation rules',
          'It describes only political privileges'
        ],
        correct: 1,
        explanation: 'Part II establishes the citizenship framework - who gets fundamental rights, political rights, and the status of citizenship in the Indian state. Non-citizens have limited rights.'
      }
    ]
  }
];

async function createQuizzes() {
  try {
    await mongoose.connect('mongodb://localhost:27017/samvidhan_sarthi');
    console.log('\n📝 CREATING SECTION-SPECIFIC QUIZZES\n');
    console.log('='.repeat(80));
    
    let created = 0;
    
    for (const quiz of sectionQuizzes) {
      const topic = await Topic.findOne({ customId: quiz.topicCustomId });
      
      if (topic) {
        // Check if quiz already exists
        const existing = await Content.findOne({ 
          title: quiz.title,
          type: 'quiz'
        });
        
        if (!existing) {
          // Format questions for the quiz schema
          const formattedQuestions = quiz.questions.map(q => ({
            question: q.question,
            options: q.options.map((opt, idx) => ({
              text: opt,
              isCorrect: idx === q.correct
            })),
            explanation: q.explanation
          }));
          
          const newQuiz = new Content({
            title: quiz.title,
            description: quiz.description,
            content: `Quiz: ${quiz.title}. This quiz tests your understanding of ${quiz.topicCustomId}.`,
            topic: topic._id,
            type: 'quiz',
            difficulty: quiz.difficulty,
            quiz: { questions: formattedQuestions },
            estimatedTime: quiz.questions.length * 2,
            order: 999
          });
          
          await newQuiz.save();
          console.log(`✅ Created: ${quiz.title}`);
          console.log(`   ${quiz.questions.length} questions for ${quiz.topicCustomId}`);
          created++;
        } else {
          console.log(`⏭️  Already exists: ${quiz.title}`);
        }
      }
    }
    
    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Successfully created: ${created} quizzes`);
    console.log('\n📊 Quizzes enable interactive learning and progress tracking!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
  } finally {
    process.exit(0);
  }
}

createQuizzes();
