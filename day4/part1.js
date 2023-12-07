const fs = require("fs");

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n");

let points = 0;
for (let line of lines) {
  const [winningNumbersString, numbersString] = line.split(": ")[1].split(" | ");
  const winningNumbers = winningNumbersString.split(" ");
  const numbers = numbersString.split(" ");
  const howMany = numbers.reduce((acc, v) => {
    if (v !== "" && winningNumbers.indexOf(v) !== -1) {
      acc += 1;
    }
    return acc;
  }, 0);

  if (howMany > 0) {
    points += Math.pow(2, howMany - 1);
  }
}

console.log(points);
