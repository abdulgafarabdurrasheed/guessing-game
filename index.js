random = Math.round(Math.random() * 10);
count = 3;

tries = 0;


function checkGuess(guess, target) {
  if (guess === target) {
    return "correct";
  } else if (guess > target) {
    return "too_high";
  } else {
    return "too_low";
  }
}


while (tries < count) {
  tries += 1;


  guess = prompt("Enter a number between 1 and 10");
  guess = Number(guess);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Invalid input! Please enter a number between 1 and 10.");
    tries -= 1;
    continue;
  }

  let result = checkGuess(guess, random);

  if (result === "correct") {
    console.log("Correct! The number was " + random + ". You won in " + tries + " tries!");
    break;
  } else if (result === "too_high") {
    console.log("Too high! tries left: " + (count - tries));
  } else {
    console.log("Too low! tries left: " + (count - tries));
  }
}


if (tries >= count) {
  console.log("Game Over! The correct number was " + random);
}

console.log("Refresh the page to play again!");
