                                      // Chapter-4 Project

                                      // Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less 
// than a dynamic number value in your code. Output the result to the user.
// Answer:                           
// Define a dynamic number value in your code.
let dynamicNumber = 42;

// Ask the user to enter a number.
let userNumber = prompt("Enter a number:");

// Convert the user's input to a number data type.
userNumber = parseFloat(userNumber);

// Check whether the user's number is greater than, equal to, or less than the dynamic number.
if (userNumber > dynamicNumber) {
    console.log("Your number is greater than the dynamic number.");
} else if (userNumber === dynamicNumber) {
    console.log("Your number is equal to the dynamic number.");
} else if (userNumber < dynamicNumber) {
    console.log("Your number is less than the dynamic number.");
} else {
    console.log("Invalid input. Please enter a valid number.");
}


                                        // Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation 
// that the user is a friend if the name selected is known in the case statements. You 
// can add a default response that you don't know the person if it's an unknown name. 
// Output the result into the console
// Answer:
// Ask the user to enter a name.
let userName = prompt("Enter a name:"); 

// Convert the input to lowercase for case-insensitive matching.
userName = userName.toLowerCase();

// Use a switch statement to check if the entered name is known.
switch (userName) {
    case "areeba":
        console.log("You are a friend.");
        break;
    case "sania":
        console.log("You are a friend.");
        break;
    case "kulsoom":
        console.log("You are a friend.");
        break;
    default:
        console.log("I don't know this person.");
}


                                      // Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random 
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
// Scissors will beat out Paper. You can use JavaScript to create your own version of 
// this game, applying the logic with an if statement. Since this project is a little more 
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then 
// do the same for the computer's selection. The number represents the index 
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the 
// random results for the player and then also the result for the computer of the 
// matching item from the array. 
// 4. Create a condition to handle the player and computer selections. If both are 
// the same, this results in a tie. 
// 5. Use conditions to apply the game logic and return the correct results. 
// There are several ways to do this with the condition statements, but you 
// could check which player's index value is bigger and assign the victory 
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the 
// computer selection and the result of the game.
// Answer:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
var choices = ["Rock", "Paper", "Scissors"];

// 2. Set up a variable that generates a random number 0-2 for the player and the computer.
var playerChoiceIndex = Math.floor(Math.random() * 3);
var computerChoiceIndex = Math.floor(Math.random() * 3);

// 3. Create a variable to hold a response message to the user.
var responseMessage = "Player chose " + choices[playerChoiceIndex] + ". Computer chose " + choices[computerChoiceIndex] + ".\n";

// 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
if (playerChoiceIndex === computerChoiceIndex) {
    responseMessage += "It's a tie!";
} else {
    // 5. Use conditions to apply the game logic and return the correct results.
    if (
        (playerChoiceIndex === 0 && computerChoiceIndex === 2) ||  // Rock beats Scissors
        (playerChoiceIndex === 1 && computerChoiceIndex === 0) ||  // Paper beats Rock
        (playerChoiceIndex === 2 && computerChoiceIndex === 1)    // Scissors beats Paper
    ) {
        responseMessage += "Player wins!";
    } else {
        responseMessage += "Computer wins!";
    }
}

// 6. Add a new output message that shows the player selection versus the computer selection and the result of the game.
console.log(responseMessage);



                                       // Self-check quiz
// 1. What will be outputted to the console in this instance?
// const q = '1';
// switch (q) {
//  case '1':
//  answer = "one";
// break;
// case 1:
// answer = 1;
// break;
// case 2:
// answer = "this is the one";
// break;
// default:
// answer = "not working";
// }
// console.log(answer);
// Answer:one

// 2. What will be outputted to the console in this instance?
const q = 1;
switch (q) {
case '1':
answer = "one";
case 1:
answer = 1;
case 2:
answer = "this is the one";
break;
default:
answer = "not working";
}
console.log(answer);
// Answer:this is the one


// 3. What will be outputted to the console in this instance?
let login = false;
let outputHolder = "";
let userOkay = login ? outputHolder = "logout" : outputHolder = 
"login";
console.log(userOkay);
// Answer: login


// 4. What will be outputted to the console in this instance?
const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
htmlOutput = "Welcome, that is a user";
} else {
  htmlOutput = "Denied, not a user ";
 }
 console.log(htmlOutput + ": " + userInput);
// Answer:Welcome, that is a user: John


//  5. What will be outputted to the console in this instance?
 let myTime = 9;
 let output;
 if (myTime >= 8 && myTime < 12) {
  output = "Wake up, it's morning";
 } else if (myTime >= 12 && myTime < 13) {
  output = "Go to lunch";
 } else if (myTime >= 13 && myTime <= 16) {
  output = "Go to work";
 } else if (myTime > 16 && myTime < 20) {
  output = "Dinner time";
 } else if (myTime >= 22) {
  output = "Time to go to sleep";
 } else {
  output = "You should be sleeping";
 }
 console.log(output);
// Answer:Wake up, it's morning


//  6. What will be outputted to the console in this instance?
 let a = 5;
 let b = 10;
 let c = 20;
 let d = 30;
 console.log(a > b || b > a);
 console.log(a > b && b > a);
 console.log(d > b || b > a);
 console.log(d > b && b > a);
// Answer:
          // true
          // false
          // true
          // true


//  7. What will be outputted to the console in this instance?
 let val = 100;
 let message = (val > 100) ? `${val} was greater than 100` : 
 `${val} was LESS or Equal to 100`;
 console.log(message);
 let check = (val % 2) ? `Odd` : `Even`;
 check = `${val} is ${check}`;
 console.log(check);
// Answer:console.log(message);  
//Result is "100 was LESS or Equal to 100"
// console.log(check);  
//Result is "100 is Even"
