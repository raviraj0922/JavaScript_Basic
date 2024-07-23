// Add two number and log the result
let a = 30;
let b = 20;
const add = a+b;
console.log("sum:", add)

// Subtract two number and log the result
const sub = a-b;
console.log("sub:", sub);

// Multiply two number and log the result
const multi = a*b;
console.log("Multiply:", multi);

// Divide two number and log the result
const divide = a/b;
console.log("Divide:", divide);

// find the reminder when one number is divided by another and log the result
const reminder = a % b;
console.log("Reminder:", reminder);

// use += operator to add a number to variable and log teh result
let x = 3; //initial total is x
let y = 5; 
x += y; // y added to total means x+y
console.log("Update Total:", x);

// use -= operator to subtract a number to variable and log teh result
let c = 3; //initial total is c
let d = 5; 
c -= d;
console.log("Update Total:", c);

// to compare two number using > < and log the result
const num1 = 10;
const num2 = 5;
console.log(num1 > num2);

const num3 = 7;
const num4 = 12;
console.log(num3 < num4);

// to compare two number using >= <= and log the result
console.log(num1 >= num2);

console.log(num3 <= num4);

// to compare two number using == === and log the result
console.log(num1 == num2); //Equality

console.log(num3 === num4); //Strict Equality

// Use the && operator to combine two number and console log the result
console.log(num1 < 11 && num2 < 10); // returns true if both operands are true other wise false

// Use the || operator to combine two number and console log the result
const u = true;
const v = false;
console.log(u || v); // always output true if at least one of the operands is true

// Use the || operator to combine two number and console log the result
const isRaining = false;
console.log(!isRaining); //reverses the boolean value of an operand

// Use the ternary operator to check the number is positive or negative and console log the result
const number = 42;
const result = number >= 0 ? "Positive" : "Negative";

console.log(result); //number is greater than or equal to 0, the expression after ? (which is "Positive") is assigned to result. Otherwise, the expression after : (which is "Negative") is assigned to result