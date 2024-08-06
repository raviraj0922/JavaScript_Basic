// create an array of number form1 to 5 and log the result
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Log the result to the console

// access the first and last elements of array and log the result
const firstElement = numbers[0]; // Access the first element (index 0)
const lastElement = numbers[numbers.length - 1]; // Access the last element (index length - 1)
// Log the results to the console
console.log('First Element:', firstElement);
console.log('Last Element:', lastElement);

// Use push method to add anew number in the end of the array and log the result
numbers.push(6); // Use the push method to add a new number (e.g., 6) to the end of the array
console.log(numbers);

// use pop method to remove teh last elemet of the array and log the result
numbers.pop(); // Use the pop method to remove a last number to the end of the array
console.log(numbers);

// use shift method to remove the first elemet from the array and log the result
numbers.shift(); // Use the shift method to remove the first element
console.log(numbers);

// use unshift to add the new number in the begning of the array and log the result
numbers.unshift(8); // Use the unshift method to add a new number (i.e. 8) at the first element
console.log(numbers);