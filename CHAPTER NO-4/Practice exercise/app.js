                                          // Chapter-4 (Practice exercise)
                                          
                                          // Practice exercise 4.1

// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console, 
// using the following syntax:
// if(myVariable){
//               //action
// }
// 4. Add another if statement with an ! in front of the variable to check whether 
// the condition is not true, and create a message that will be printed to the 
// console in that instance. You should have two if statements, one with an 
// ! and the other without. You could also use an if and an else statement 
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.

// Answer:
// 1. Create a variable with a Boolean value.
let myVariable = true;

// 2. Output the value of the variable to the console.
console.log("The value of myVariable is: " + myVariable);

// 3. Check whether the variable is true and if so, output a message to the console.
if (myVariable) {
    console.log("myVariable is true.");
}

// 4. Add another if statement with an '!' in front of the variable to check whether the condition is not true.
if (!myVariable) {
    console.log("myVariable is not true.");
} else {
    console.log("myVariable is true when using '!' operator.");
}

// 5. Change the variable to the opposite to see how the result changes.
myVariable = false;

console.log("The value of myVariable is now: " + myVariable);

if (myVariable) {
    console.log("myVariable is true.");
}

if (!myVariable) {
    console.log("myVariable is not true.");
} else {
    console.log("myVariable is true when using '!' operator.");
}



                                          //Practice exercise 4.2

// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for 
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to 
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to 
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if 
// none are true
// 7. Output the response message variable to the console


// Answer:
// 1. Create a prompt to ask the user's age
let userAge = prompt("Please enter your age:");

// 2. Convert the response from the prompt to a number
userAge = parseInt(userAge);

// 3. Declare a message variable that you will use to hold the console message for the user
let message;

// 4. If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
if (userAge >= 21) {
    message = "You are granted entry to the venue and can purchase alcohol.";
}

// 5. If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
else if (userAge >= 19) {
    message = "You are granted entry to the venue, but you cannot purchase alcohol.";
}

// 6. Provide a default else statement to set the message variable to deny entry if none are true
else {
    message = "You are denied entry to the venue.";
}

// 7. Output the response message variable to the console
console.log(message);



                                            //Practice exercise 4.3

//As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
// random() will return a random number in the range of 0 to less than 1, including 0 
// but not 1. You can then scale it to the desired range by multiplying the result and 
// using Math.floor() to round it down to the nearest whole number; for example, to 
// generate a random number between 0 and 9:
// // random number between 0 and 1
// let randomNumber = Math.random(); 
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10; 
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber); 
// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value 
// is assigned by generating a random number 0-5, for 6 possible results. You 
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can 
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different 
// value from the random number generator. 
// 4. Create a variable to hold the end response, which should be a sentence 
// printed for the user. You can assign different string values for each case, 
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case 
// response, to the console after the user enters their question.                                           
// Answer:
// 1. Get a random value between 0 and 5.
let randomValue = Math.floor(Math.random() * 6); // Generates a random number from 0 to 5.

// 2. Create a prompt to get a string value input from the user.
let userQuestion = prompt("Ask the Magic 8-Ball a yes or no question:");

// 3. Create 6 responses using a switch statement based on the random number.
let response;
switch (randomValue) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "It is decidedly so.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "Outlook not so good.";
        break;
    default:
        response = "Sorry, something went wrong.";
}

// 4. Create a variable to hold the end response.
let finalResponse = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;

// 5. Output the user's original question and the randomly selected response to the console.
console.log(finalResponse);



                                            // Practice exercise 4.5
//1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My 
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back 
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable 
// strings and the output message string
// Answer:

 // 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10.
let prize = prompt("Select a number between 0 and 10 to win a prize:");

// 2. Convert the prompt response to a number data type.
prize = parseInt(prize);

// 3. Create a variable to use for the output message containing the value "My Selection: ".
let outputMessage = "My Selection: ";

// 4. Using the switch statement, provide a response back regarding a prize that is awarded depending on what number is selected.
let prizeMessage;

switch (prize) {
    case 0:
        prizeMessage = "Congratulations! You win a vacation for two!";
        break;
    case 1:
    case 2:
    case 3:
        prizeMessage = "Great job! You win a gift card.";
        break;
    case 4:
    case 5:
    case 6:
        prizeMessage = "You've won a T-shirt.";
        break;
    case 7:
        prizeMessage = "You win a free movie ticket.";
        break;
    case 8:
        prizeMessage = "You've won a discount coupon.";
        break;
    case 9:
        prizeMessage = "Sorry, no prize this time.";
        break;
    case 10:
        prizeMessage = "Better luck next time.";
        break;
    default:
        prizeMessage = "Invalid selection. Please choose a number between 0 and 10.";
}

// 6. Output the message back to the user by concatenating your prize variable strings and the output message string.
console.log(outputMessage + prizeMessage); 