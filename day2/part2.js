const fs = require("fs");

const games = fs.readFileSync("./input2.txt", "utf-8").split("\n");

let sum = 0;
for (let game of games) {
  const colorMaxValues = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [_, gameInfo] = game.split(": ");
  const rounds = gameInfo.split("; ");

  for (let round of rounds) {
    const shows = round.split(", ");
    for (let show of shows) {
      const [value, color] = show.split(" ");
      if (colorMaxValues[color] < parseInt(value)) {
        colorMaxValues[color] = parseInt(value);
      }
    }
  }

  const multipliedValue = Object.values(colorMaxValues).reduce((acc, v) => acc * v, 1);
  sum += multipliedValue;
}

console.log(sum);
