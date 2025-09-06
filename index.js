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

message = ""
while (tries < count) {
  tries += 1;

  guess = prompt(`${message} Enter a number between 1 and 10`);
  guess = Number(guess);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Invalid input! Please enter a number between 1 and 10.");
    message = "Invalid input!";
    tries -= 1;
    continue;
  }

  let result = checkGuess(guess, random);

  if (result === "correct") {
    console.log("Correct! The number was " + random);
    alert("Correct! The number was " + random);
    break;
  } else if (result === "too_high") {
    console.log("Too high! tries left: " + (count - tries));
    message = "Too high! Try again.";
  } else {
    console.log("Too low! tries left: " + (count - tries));
    message = "Too low! Try again.";
  }
}


if (tries >= count) {
  console.log("Game Over! The correct number was " + random);
  alert("Game Over! The correct number was " + random);
}

console.log("Refresh the page to play again!");
