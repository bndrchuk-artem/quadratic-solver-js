'use strict';
const { interactiveMode } = require("./interactive.js")
const { textFileMode } = require("./non-interactive.js")
let result = null;

if (process.argv.length === 3) {
  result = textFileMode(process.argv[2]);
} else if (process.argv.length === 2) {
  result = interactiveMode();
} else {
  process.exit(1);
}

console.log(`Your equation has ${result.length} root(s)`);
result.forEach((root, index) => console.log(`x${index + 1} = ${root}`))