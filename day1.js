// Declare a varaible using var and assinging number
var x = 25;
console.log ("display num:", x)

// Declare a varaible using let and assinging number
let y = 10;
console.log("display num:", y)

// declare a variable using const and assign it to boolean
const a = true;
const b = false;
console.log("boolean value:", a, b)

// create variable of different type (number, string, boolean, object and array) using typeof operator
const num = 42;
console.log(typeof num);

const str = "hello javascript"
console.log(typeof str);

const value = true;
console.log(typeof value)

const getdetail = {name: "Raviraj", country: "India", pimcode: 276001} 
console.log(typeof getdetail)

const animal = ["cat", "dog", "lion", "cow"]
console.log(typeof animal) //In JavaScript, arrays are considered objects, so the typeof operator returns "object" 

// Declare a variable using let and assign an initial value, reassign a new value and log them both
let oldVariable = 10;
console.log("Initial value:", oldVariable);

oldVariable =  20;
console.log("New value:", oldVariable)

//  Reassign a variable declare with const and observe the error
const myConstant = 42;
console.log(myConstant);

// myConstant = 100;
// console.log(myConstant); //If we need a variable that can be reassigned, consider using let instead of const

// Decelare the variable of differenet data type and log both the value and type of each variable
let numb = 42;
console.log("Number:", numb, typeof numb);

let stri = "Hello, world!";
console.log("String:", stri, typeof stri);

let isTrue = true;
console.log("Boolean:", isTrue, typeof isTrue);

const person = { firstName: "Ravi", lastName: "Raj" };
console.log("Object:", person, typeof person);

const fruits = ["apple", "banana", "orange"];
console.log("Array:", fruits, typeof fruits);

// Demonstrate the different in behaviour between let and const when it comes to reassignment
let count = 0;
count = 1; // Reassignment is allowed

const pi = 3.14; // Error: Cannot reassign a constant variable

