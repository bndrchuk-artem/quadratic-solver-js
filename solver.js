function solveQuadratic(a, b, c) {
  if (a === 0) {
    console.error("Error. a cannot be 0");
    process.exit(1);
  }
  
  const D = b * b - 4 * a * c;

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2*a);
    const x2 = (-b - Math.sqrt(D)) / (2*a);
    return [x1, x2];
  } else if (D === 0) {
    const x = (-b)  / (2*a);
    return [x];
  } else {
    return []
  }

}

module.exports = { solveQuadratic }