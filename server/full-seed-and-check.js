// Script to automate full backend data seeding and verification
require('child_process').execSync;

const { execSync } = require('child_process');

function run(cmd) {
  console.log(`\n>>> Running: ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error running: ${cmd}`);
    process.exit(1);
  }
}

console.log('=== FULL BACKEND DATA SEED & CHECK ===');


// Individual seeding scripts
run('node seed-mock-topics.js');
run('node seed-content.js');
run('node add-constitutional-quizzes.js');
run('node add-constitutional-scenarios.js');
run('node add-initial-badges.js');
run('node add-game-content.js');
run('node update-games.js');
run('node check-games.js');
run('node query-topics.js');

console.log('\nAll backend data loaded and checked!');
console.log('If you see any errors above, please review them.');
