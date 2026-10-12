// Assignment 1: Variables, Data Types, and Console Operations

//Task: Declare variables using var, let, and const to store a user's name, age, employment status, and a list of skills. Use typeof to check each variable's type and log them to the console.


/* var name = "Pintu Kumar";
let age = 20;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript","C","C++","JAVA"];

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);*/


//Assignment 2: Operators, Expressions, and Input Handling
//Task: Use prompt() to capture a user's bill amount and tip percentage. Perform explicit type conversion (e.g., using Number()), compute the total using arithmetic and assignment operators, and log a formatted string.

/*let billAmount = Number(prompt("Enter bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

let tip = billAmount * tipPercentage / 100;

let total = billAmount;
total += tip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);*/


//Assignment 3: Conditional Logic Implementation
//Task: Create a script that evaluates a user's numerical test score using if...else statements, determines a letter grade using a switch statement, and uses a ternary operator to print whether they passed or failed.

/*let score = 85;
let gradeCode;

if (score >= 90) {
    gradeCode = 1;
}
else if (score >= 80) {
    gradeCode = 2;
}
else if (score >= 70) {
    gradeCode = 3;
}
else if (score >= 60) {
    gradeCode = 4;
}
else {
    gradeCode = 5;
}

let grade;

switch (gradeCode) {
    case 1:
        grade = "A";
        break;

    case 2:
        grade = "B";
        break;

    case 3:
        grade = "C";
        break;

    case 4:
        grade = "D";
        break;

    default:
        grade = "F";
}


let status = score >= 40 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);*/


//Assignment 4: Loop Control Structures
//Task: Write a for loop to print a multiplication table up to 5. Use a while loop with a break statement to find the first number greater than 10 that is divisible by 6, and a do...while loop that skips numbers using continue.


/* console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found:", num);
        break;
    }
    num++;
}

console.log("\n-- Do...While Loop with Continue --");

let j = 1;

do {
    j++;

    if (j === 3) {
        continue;
    }

    console.log("Number:", j);

} while (j < 5);*/


//Assignment 5: Function Architecture and Scope
//Task: Define a standard function and an arrow function that accept parameters (e.g., length and width) with default values to calculate the area of a rectangle. Demonstrate function and block scope limits.
// Standard Function

/* function rectangleArea(length = 10, width = 5) {
    return length * width;
}

console.log("Area:", rectangleArea());
console.log("Area:", rectangleArea(8, 4));


// Arrow Function

const calculateArea = (length = 10, width = 5) => {
    return length * width;
};

console.log("Area:", calculateArea());
console.log("Area:", calculateArea(6, 3));


// Function Scope

function showMessage() {
    let message = "Hello Pintu";
    console.log(message);
}

showMessage();


// Block Scope

if (true) {
    let number = 100;
    const city = "Bathinda";

    console.log(number);
    console.log(city);
}*/

//Assignment 6: Arrays, Objects, and Core Methods
//Task: Create an array of product objects (with name and price properties). Use forEach() to print each product, filter() to find items under a certain price, and map() to create an array of formatted name-price strings.

let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");

products.forEach(function(product) {
    console.log("Item:", product.name, "- Price: $" + product.price);
});

console.log("-- Filtered Products (Price < $50) --");

let filtered = products.filter(function(product) {
    return product.price < 50;
});

console.log(filtered);

console.log("-- Mapped Product Tags (map) --");

let tags = products.map(function(product) {
    return product.name.toUpperCase() + " costs $" + product.price;
});

console.log(tags);


