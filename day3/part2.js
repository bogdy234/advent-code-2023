const fs = require("fs");

const lines = fs.readFileSync("./input2.txt", "utf-8").split("\n");

const starGears = {};

const checkForSymbol = (lines, i, j) => {
  const line = [i, i, i + 1, i - 1, i + 1, i + 1, i - 1, i - 1];
  const col = [j + 1, j - 1, j, j, j + 1, j - 1, j + 1, j - 1];
  const adjacent = [
    // right
    lines[i]?.[j + 1],
    // left
    lines[i]?.[j - 1],
    // down
    lines[i + 1]?.[j],
    // up
    lines[i - 1]?.[j],
    // diagonal down right
    lines[i + 1]?.[j + 1],
    // diagonal down left
    lines[i + 1]?.[j - 1],
    // diagonal up right
    lines[i - 1]?.[j + 1],
    // diagonal up left
    lines[i - 1]?.[j - 1],
  ];
  const omitValues = [undefined, "."];

  for (let i = 0; i < adjacent.length; i++) {
    if (omitValues.indexOf(adjacent[i]) === -1 && isNaN(adjacent[i])) {
      if (adjacent[i] === "*") {
        return [true, `${line[i]}${col[i]}`];
      }
      return [true, "-1"];
    }
  }

  return [false, "-1"];
};

let sum = 0;
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    let number = "";
    while (!isNaN(lines[i][j])) {
      number += lines[i][j];
      j++;
    }
    if (number !== "") {
      let checker = false;
      for (let k = 1; k <= number.length; k++) {
        const [response, position] = checkForSymbol(lines, i, j - k);
        if (response) {
          checker = true;
          if (position !== "-1") {
            if (starGears[position]) {
              if (starGears[position].indexOf(number) === -1) {
                starGears[position] = [...starGears[position], number];
              }
            } else {
              starGears[position] = [number];
            }
          }
        }
      }

      if (checker) {
        sum += parseInt(number);
      }
    }
  }
}

const sumOfGears = Object.values(starGears).reduce((acc, v) => {
  if (v.length > 1) {
    const prod = v.reduce((acc, b) => acc * b, 1);
    acc += prod;
  }
  return acc;
}, 0);

console.log(sum, sumOfGears);
