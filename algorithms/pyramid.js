function printNumberPyramid(n) {
  if (typeof n !== "number" || n < 1 || n > 31 || n % 2 === 0) {
    console.log("Error: Please enter an odd number between 1 and 31");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let line = "";
    line += " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }

    console.log(line.trim());
  }
}

printNumberPyramid(5)