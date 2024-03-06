const fs = require('fs');

// Read the contents of the file synchronously
const fsCommandsStoreTxt = fs.readFileSync('commandsStore.txt', 'utf8');

// Parse the JSON content into JavaScript objects
const commands = JSON.parse(fsCommandsStoreTxt);

// Export the commands array
module.exports = { commands };
