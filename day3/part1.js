const fs = require("fs");

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n");

const checkForSymbol = (lines, i, j) => {
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

  if (adjacent.some((a) => omitValues?.indexOf(a) === -1 && isNaN(a))) {
    return true;
  }

  return false;
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
        const response = checkForSymbol(lines, i, j - k);
        if (response) {
          checker = true;
        }
      }

      if (checker) {
        sum += parseInt(number);
      }
    }
  }
}

console.log(sum);
