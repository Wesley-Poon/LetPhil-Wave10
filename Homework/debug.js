// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

const storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// What's wrong ↓
// User wants to reassign the variable later, so he should use let instead of const to declare the variable "storeName". 
// Your fix ↓

let storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + Item2Price;
console.log("Total: $" + orderTotal);

// What's wrong ↓

// for variable item2Price, it is declared and assigned in camel case in line 33. However, when assigning variable orderTotal, 
// Item2Price is used instead of item2Price, which is not the same variable as JS is case-sensitive. it may lead to an error as Item2Price has not been declared before.

// Your fix ↓

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + item2Price; // camel-case is used for item2Price.
console.log("Total: $" + orderTotal);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

var productName = "Headphones";
var productPrice = 49.99;
console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?

// let should be used instead of var. var is an old way of declaring variables, should be used const for fixed and let for dynamic variable naming.

// What's wrong ↓

// var may cause bugs, so use let or const

// Your fix ↓
// For fixed values

const productName = "Headphones";
const productPrice = "49.9";
console.log(productName + " — $" + productPrice);

// For dynamic values 

let productName = "Headphones";
let productPrice = "49.9";
console.log(productName + " — $" + productPrice);

