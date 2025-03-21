const readline = require("readline-sync");
const { solveQuadratic } = require("./solver.js")

function getInputNumber(coefficientPrompt) {
  while (true) {
    const input = readline.question(coefficientPrompt)
    const value = parseFloat(input)
    if (!isNaN(value)) return value;
    
    console.error("Error. Expected a valid real number, got invalid instead")
  }
}

function interactiveMode() {
  const a = getInputNumber("a = ")
  const b = getInputNumber("b = ")
  const c = getInputNumber("c = ")
  
  console.log(`Your equation is: ${a}x^2 + ${b}x + ${c} = 0`);

  return solveQuadratic(a, b, c)
}

module.exports = { interactiveMode };
