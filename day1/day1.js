const fs = require("fs");

const lines = fs.readFileSync("./input2.txt", "utf-8").split("\n");

const numbersLetterMap = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

let sum = 0;
for (let line of lines) {
  const numbers = [];
  let newLine = line;

  Object.keys(numbersLetterMap).forEach((n) => {
    newLine = newLine.replaceAll(n, numbersLetterMap[n]);
  });

  for (let letter of newLine) {
    if (!isNaN(letter)) {
      numbers.push(letter);
    }
  }

  sum += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
}

console.log(sum);
