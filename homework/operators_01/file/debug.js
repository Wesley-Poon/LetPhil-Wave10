// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓

// % is used, where it is used to calculate the remainder. We should use multiplication instead, which is *./

// Your fix ↓
const billAmount = 80;
const tipPercent = 15;
const tipAmount = billAmount * 15 / 100;
console.log("Tips: $" + tipAmount);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓

//const is used instead of let. Here the variable countdown will change, so let should be used, otherwise, error will be shown./

// Your fix ↓

let countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓

//the comparison operator is used wrongly, instead of "loose equal", "strictly equal to" should be used.
//Change it to:

let username1 = "gamer99";
let username2 = "Gamer99";
console.log("Name match: " + (username1 === username2));

// Style issue 1 ↓

//var is an old way to declare a variable and would cause different bugs, instead of var, use let and const instead (for dynamic and fixed naming)

// Style issue 2 ↓

//Do not name 2 variables with different case but same content. Use gamer99 and gamer98, instead of gamer99 and Gamer99.

// Your fix ↓

let username1 = "gamer98";
let username2 = "gamer99";
console.log (`Name match: ${username1 === username2}`);
