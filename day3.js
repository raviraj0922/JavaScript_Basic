// Using if else else condistion check number is positive  negative or zero and log the result
const x = 3;
if (x > 0){
    console.log("Number is Positive.");
} else
if(x < 0){
    console.log("Number is Negatve.");
} else {

    console.log("number is zero.");
}

// Write a code to check the person is eligble to vote (age>=18) and log the result
const age = 18;
if (age >= 18){
    console.log("person is eligible to vote.");
} else{
    console.log("person is not eligible to vote");
}

// Find the largest number amoung three number usign nested if else loop
const num1 = 3;
const num2 = 6;
const num3 = 9;
if (num1 > num2){
    console.log("num1 is largest number");
}else {
    console.log("num2 is largest number");
}
if(num2 > num3){
    console.log("num2 is largest number");
}else {
    console.log("num3 is largest number")
}

// using switch case to determine the day of the week based on a number (1-7)and log the day name in result
let dayNum = 5;
switch(dayNum){
    case 1:
        console.log("Day is Monday");
        break;

    case 2:
        console.log("Day is Tuesday");
        break;

    case 3:
        console.log("Day is Wednesday");
        break;
    
    case 4:
        console.log("Day is Thrusday");
        break;

    case 5:
        console.log("Day is Friday");
        break;

    case 6:
        console.log("Day is Saturday");
        break;

    case 7:
        console.log("Day is Sunday");
        break;

    default:
        console.log("Invalid day number")
}

// using switch case assign a grade (A,B,C,D,F) based on the score and log the result
const score = 29;
switch(true){
    case (score >= 0 && score < 30):
        console.log("Garde is F")
        break;
    case (score >= 30 && score < 50):
        console.log("Grade is D");
        break;
    case (score >= 50 && score < 70):
        console.log("Grade is C");
        break;
    case (score >= 70 && score < 90):
        console.log("Grade is B");
        break;
    case (score >= 90 && score <= 100):
        console.log("Grade is A");
        break;
    default:
        console.log("Grade is not awarded")
}

// Check the number is even or odd by using ternary operator and log the result
const number = 46;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log("Number is:", result);

// check if year is a leap year using multiple conditions (divide by 4, but not 100 unless also divide by 400) and log the result
const year = 1998;
switch(true){
    case (year % 400 === 0):
        console.log("Years is Leap Year");
        break;
    case (year % 4 === 0):
        console.log("Year is leap year");
        break;
    case (year % 100 == 0):
        console.log("Year is not leap year");
        break;
    default:
        console.log("Year is not Leap Year")
}