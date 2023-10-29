                                          // Chapter-3 (Practice exercise)
                                          
                                          // Practice exercise 3.1
//   1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and 
//   "Apples."
//   2. Check your list length in the console.
//   3. Update "Bread" to "Bananas."
//   4. Output your entire list to the console.

// Answer:
// Create an array for the shopping list
let shoppingList = ["Milk", "Bread", "Apples"];

// Check the length of the shopping list and output it to the console
console.log("Length of shopping list:", shoppingList.length);

// Update "Bread" to "Bananas"
shoppingList[1] = "Bananas";

// Output the entire updated shopping list to the console
console.log("Updated shopping list:", shoppingList);
 


                                          //Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", 
// "Pop", "Juice", "Pop"]

// Answer:
// 1. Create an empty array for the shopping list.
let shopping_List = [];

// 2. Add Milk, Bread, and Apples to your list.
shopping_List.push("Milk", "Bread", "Apples");
console.log("Shopping List:", shopping_List);

// 3. Update "Bread" with Bananas and Eggs.
shopping_List.splice(1, 1, "Bananas", "Eggs");
console.log("Updated Shopping List:", shopping_List);

// 4. Remove the last item from the array and output it to the console.
let removedItem = shopping_List.pop();
console.log("Removed item:", removedItem);

// 5. Sort the list alphabetically.
shopping_List.sort();

// 6. Find and output the index value of Milk.
let indexMilk = shopping_List.indexOf("Milk");
console.log("Index of Milk:", indexMilk);

// 7. After Bananas, add Carrots and Lettuce.
shopping_List.splice(1, 0, "Carrots", "Lettuce");
console.log("2nd time Updated Shopping List:", shopping_List);

// 8. Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];
console.log("New List:", newList);

// 9. Combine both lists, adding the new list twice to the end of the first list.
shopping_List = shopping_List.concat(newList, newList);

// 10. Get the last index value of Pop and output it to the console.
let lastIndexPop = shopping_List.lastIndexOf("Pop");
console.log("Last index of Pop:", lastIndexPop);

// 11. Your final list:
console.log("Final Shopping List:", shopping_List);



                                            //Practice exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.
 
// Answer:
// 1. Create an array containing three values: 1, 2, and 3.
let originalArray = [1, 2, 3];

// 2. Nest the original array into a new array three times.
let nestedArrays = [originalArray, originalArray, originalArray];

// 3. Output the value 2 from one of the arrays into the console.
console.log("Value 2 from one of the arrays:", nestedArrays[0][1]);
console.log("Value 2 from one of the arrays:", nestedArrays[1][1]);
console.log("Value 2 from one of the arrays:", nestedArrays[2][1]);



                                          //   Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the 
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.                                           
// Answer:

// 1. Create a myCar object with some properties.
let myCar = {
    make: "Toyota",
    model: "Prius",
    year: 2023,
    color: "Grey",
    forSale: true
};

// 2. Create a variable to hold the string value color and use it to change the color property.
let propertyName = "color";
myCar[propertyName] = "Red";

// 3. Use the variable to create a new property forSale and assign a value.
propertyName = "forSale";
myCar[propertyName] = false;

// 4. Output make and model to the console.
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

// 5. Output the value of forSale to the console.
console.log("For Sale:", myCar.forSale);


                                            // Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called friends.
// 2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.
// Answer:

// 1. Create an object named people with an empty array called friends.
let people = {
    friends: []
  };
  
  // 2. Create three friend objects with first names, last names, and ID values.
  let friend1 = {
    firstName: "Urooj",
    lastName: "Naz",
    ID: 12345
  };
  
  let friend2 = {
    firstName: "Hadiqa",
    lastName: "Zafar",
    ID: 67890
  };
  
  let friend3 = {
    firstName: "Kulsoom",
    lastName: "Hameed",
    ID: 54321
  };
  
  // 3. Add the three friend objects to the friends array.
  people.friends.push(friend1, friend2, friend3);
  
  // 4. Output the people object to the console.
  console.log(people);
  