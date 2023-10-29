                                        // Chapter-3 Project

                                        // Manipulating an array
// Take the following array: 
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and 
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.
// Answer:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// Remove the first item and the last item.
theList.shift();
theList.pop();

// Add FIRST to the start of the array.
theList.unshift("FIRST");

// Assign "hello World" to the fourth item value (index 3).
theList[3] = "hello World";

// Assign MIDDLE to the third index value (index 2).
theList[2] = "MIDDLE";

// Add LAST to the last position in the array.
theList.push("LAST");

// Output the modified array to the console.
console.log(theList);


                                        // Company product catalog
// In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and 
// quantity.
// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data structure.
// Answer:

// 1. Create an array to hold the inventory of store items.
const productCatalog = [];

// 2. Create three items with properties: name, model, cost, and quantity.
const item1 = {
  name: "Laptop",
  model: "XPS 13",
  cost: 1200,
  quantity: 10,
};

const item2 = {
  name: "Smartphone",
  model: "iPhone 13",
  cost: 999,
  quantity: 15,
};

const item3 = {
  name: "Headphones",
  model: "Sony WH-1000XM4",
  cost: 299,
  quantity: 20,
};

// 3. Add all three objects to the productCatalog array.
productCatalog.push(item1, item2, item3);

// 4. Access the quantity element of the third item and log it to the console.
console.log("Inventory:",productCatalog);
console.log("Quantity of the third item:", productCatalog[2].quantity);



                                       // Self-check quiz

//1. Can you use const and update values within an array?

// Answer: No, you cannot use const to update values within an array. const declares a variable that cannot be reassigned, but you can still modify the content of an array declared with const.


// 2. Which property in an array gives the number of items contained in the array? 
// const c = 91;

// Answer: The 'Length' property in an array gives the number of items contained in the array.


// 3. What is the output in the console?
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));

// Answer: 
// indexOf(0) returns -1 because the value 0 is not found in the array. 
// indexOf(3) returns 1 because the value 3 is found at index 1 in the array.

// 4. How do you replace the second element in an array myArr = 
// [1,3,5,6,8,9,15] with the value 4?

// Answer: 
const myArr = [1,3,5,6,8,9,15];
myArr[1] = 4;
console.log(myArr);

// 5. What is the output in the console?
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

// Answer: 
// [empty × 10, "test"]
// undefined


// 6.  What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);

// Answer: undefined
