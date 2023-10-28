// File: create-config.js
const fs = require('fs');
const path = require('path');

const scriptId = process.argv[2];

if (!scriptId) {
  console.error('Script ID is required');
  process.exit(1);
}

const config = {
  scriptId: scriptId
};

const configPath = path.join(__dirname, '../src', '.clasp.json');
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log(`.clasp.json created in src folder with script ID: ${scriptId}`);
