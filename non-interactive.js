const fs = require('fs')
const { solveQuadratic } = require("./solver.js")

function textFileMode(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error. File ${filePath} does not exist`);
    process.exit(1)
  }
  
  const content = fs.readFileSync(filePath, 'utf-8').trim();
  const coefficients = content.split(/\s+/).map((value) => Number(value))

  if (coefficients.length !== 3 || coefficients.some(isNaN)) {
    console.error("Error. Invalid file format");
    process.exit(1);
  }

  const [a, b, c] = coefficients;
  console.log(`Your equation is: ${a}x^2 + ${b}x + ${c} = 0`);

  return solveQuadratic(a, b, c)
}

module.exports = { textFileMode };