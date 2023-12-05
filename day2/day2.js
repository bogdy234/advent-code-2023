const fs = require("fs");

const games = fs.readFileSync("./input.txt", "utf-8").split("\n");

function isValidGame(color, value) {
  if (color === "red") {
    return value <= 12;
  } else if (color === "green") {
    return value <= 13;
  } else if (color == "blue") {
    return value <= 14;
  }
}

let sum = 0;
for (let game of games) {
  const [gameIdString, gameInfo] = game.split(": ");
  const gameId = parseInt(gameIdString.split(" ")[1]);
  const rounds = gameInfo.split("; ");
  let validGame = true;

  for (let round of rounds) {
    const shows = round.split(", ");
    for (let show of shows) {
      const [value, color] = show.split(" ");
      if (!isValidGame(color, value)) {
        validGame = false;
      }
    }
  }

  if (validGame) {
    sum += gameId;
  }
}

console.log(sum);
