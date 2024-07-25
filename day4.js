// using for loop print the the number 1-10
for (i=1; i<=10; i++){
    console.log(i);
}

// using for loop print table of 5
for(i=1; i<=10; i++){
    const table = 5*i;
    console.log(`5 * ${i} = ${table}`)
}

// calculate the sum of number form 1-10 using while loop
let x = 1;
while (x <= 10) {
    const sum = x + x;
    console.log(`${x} + ${x} = ${sum}`);
    x++;
}

// print the number 10-1 using while loop
let a = 10;
while (a >= 1){
    console.log(a);
    a--;
}

// print number for 1-5 using do....while loop
let y = 1;
do{
    console.log(y)
    y++;
}while(y <= 5)

// calculate the factorial of the number using do....while loop
function factorial(n) {
    let result = 1; //result is initialized to 1
    let i = n; //i is initialized to the value of n
    do {
        result *= i; // multiplies the current value of result by i and updates result i
        i--;
    } while (i > 0); // The loop continues until i is greater than 0
    return result;
}

const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);

// Write a program to print the pattern using nested loop
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}