// player status
var player = 1;

// list of numbers generated
var p1DiceArray = [];
var p2DiceArray = [];

var p1Results;
var p2Results;

var dice1 = 0;
var dice2 = 0;

var scoreCounter = 0;
var p1Total = 0;

var countScore = function () {
  while (scoreCounter < p1DiceArray.length) {
    p1Total += p1DiceArray[scoreCounter];
    console.log("p1Total", p1Total);
    console.log("dicearraylenght", p1DiceArray.length);
    scoreCounter += 1;
  }
  if (scoreCounter > p1DiceArray) {
    return "Error";
  }
  scoreCounter += 1;
  console.log("counter", scoreCounter);

  return p1Total;
};

//roll dice function
var rollDice = function () {
  // produces a decimal between 0 and 6
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // console.log(diceNumber);
  return diceNumber;
};

//check score function to determine winner
var checkScore = function () {
  if (p1Results > p2Results) {
    return `Player 1 win with ${p1Results}.`;
  }
  return `Player 2 wins with ${p2Results}.`;
};

var main = function (input) {
  console.log("main input", typeof input);
  // var p1Score = countScore();
  // console.log("countscore", p1Score);

  var myOutputValue = "";
  // var currentInput = input;
  // player = player;
  console.log("Current Player(a)", player);
  if (player == 1) {
    if (input == "") {
      dice1 = rollDice();
      dice2 = rollDice();

      // console.log("dice1", dice1);
      // console.log("dice2", dice2);

      myOutputValue = `Welcome Player 1.<br>You rolled ${dice1} for Dice 1 and ${dice2} for Dice 2.<br>Choose the order of the dice. <br>
    Type 1 if you want Dice 1 to be the first number. <br>Type 2 if you want Dice 2 to be the first number.<br>`;
    } else if (input == 1) {
      p1Results = Number(String(dice1) + String(dice2));
      p1DiceArray.push(p1Results);

      myOutputValue = `Player 1, you chose Dice 1 first. Your number is ${p1Results}. It is now Player 2's turn.`;
      // player = 2;
    } else if (input == 2) {
      p1Results = Number(String(dice2) + String(dice1));
      p1DiceArray.push(p1Results);
      myOutputValue = `Player 1, you chose Dice 2 first. Your number is ${p1Results}. It is now Player 2's turn.`;
      // player = 2;
    }
    player = 2;
    return myOutputValue;
  }
  // run for player 2
  if (player == 2) {
    if (input == "") {
      console.log("input", input);
      dice1 = rollDice();
      dice2 = rollDice();

      // console.log("dice1", dice1);
      // console.log("dice2", dice2);

      myOutputValue = `Welcome Player 2.<br>You rolled ${dice1} for Dice 1 and ${dice2} for Dice 2.<br>Choose the order of the dice. <br>
    Type 1 if you want Dice 1 to be the first number. <br>Type 2 if you want Dice 2 to be the first number.<br>`;
    } else if (input == 1) {
      console.log("Current Player(B):", player);
      p2Results = Number(String(dice1) + String(dice2));
      p2DiceArray.push(p2Results);
      // console.log("p2results", p2Results);
      myOutputValue = `zz Player 2, you chose Dice 1 first. Your number is ${p2Results}. Click submit to see who wins.`;
    } else if (input == 2) {
      p2Results = Number(String(dice2) + String(dice1));
      p2DiceArray.push(p2Results);
      // console.log("p2results", p2Results);

      myOutputValue = `XX Player 2, you chose Dice 1 first. Your number is ${p2Results}. Click submit to see who wins.`;
    }
  }

  // console.log("P1 diceArray", p1DiceArray);
  // console.log("P2 diceArray", p2DiceArray);

  var finalResults = checkScore();
  // console.log("final results", finalResults);
  if (input == 0 && p1Results > 1 && p2Results > 1 && player == 2) {
    player = 1;
    myOutputValue = finalResults;
  }
  // console.log("player", player);
  return myOutputValue;
};
