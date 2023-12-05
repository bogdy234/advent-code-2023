const fs = require("fs");

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n");

let sum = 0;
for (let line of lines) {
  const numbers = [];

  for (let letter of line) {
    if (!isNaN(letter)) {
      numbers.push(letter);
    }
  }
  sum += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
}

console.log(sum);
