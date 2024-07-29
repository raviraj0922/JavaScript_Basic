// check if number is even or odd and log the result
const number = 5;

if (number % 2 === 0) { //check the condidtion if number is divived by 2 result 0
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// To calculte the square of number and return the number
let x =5;
const square = x*x;
console.log("Square of x :", square);

// A function expression to fine the maximum of two umber and log the result
let num1 = 5;
let num2 = 7;
if(num1 > num2){
    console.log("Num1 is Maximum")
}else{
    console.log("num2 is Maximum");
}
const max = Math.max(num1, num2); // it takes multiple arguments and returns the largest value among them
console.log("The Maximum Value is:", max);

// A function concatnate two string and log the result
const firstName = "Ravi";
const lastName = "Raj";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Using arrow funtion add two numner and log the result
let numb1 = 5;
let numb2 = 8;
const add = () => {
    return numb1 + numb2;
};
console.log(add(numb1, numb2));

// Using arrow function take a person name and age and return a greeting message. Provide a default value for age.
const greetPerson = (name, age = 25) => {
    return `Hello, ${name}! You are ${age} years old.`;
};
const personName = "Ravi";
const personAge = 30;
console.log(greetPerson(personName, personAge)); 
console.log(greetPerson("Gunjan"));