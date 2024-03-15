                                              // chapters 12-13


// Q 1

// var time = 1100;
// if (time >= 0 && time < 1200){
//     document.write("good morning")
// }
// else if( time >= 1200 && time < 1700){
//     document.write( "Good afternoon");
// }
// else if( time >= 1700 && time < 2100 ){
//     document.write("good evning")
// }
// else if (time >= 2100 && time < 2359 ) {
//     document.write("good night");
// }



// Q 2

// function findLargerNumber(num1=10, num2=20){
//     if (num1 > num2) {
//         document.write(num1 + " is larger than " + num2);
//     } else if (num1 < num2) {
//         console.log(num2 + " is larger than " + num1);
//     } else {
//         console.log("Both numbers are equal: " + num1 + " and " + num2);
//     }
// }

// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));


// // Q 3

// function checkNumber(number) {
//     if (number > 0) {
//         console.log(number + " is a positive number.");
//     } else if (number < 0) {
//         console.log(number + " is a negative number.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// let userInput = parseFloat(prompt("Enter a number:"));

// checkNumber(userInput);


// // Q 4

// function isVowel(char) {
//     char = char.toLowerCase(z);

//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }

// let userInput = prompt("Enter a character:");

// if (userInput.length === 1) {
//     let result = isVowel(userInput);
//     console.log("Is '" + userInput + "' a vowel? " + result);
// } else {
//     console.log("Please enter only a single character.");
// }


// // Q 5

// let correctPassword = "talha4455";

// let userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     console.log("Please enter your password.");

// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");

// } else {
//     console.log("Incorrect password.");
// }


// // Q 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }else {
//     greeting = "Good evening";
// }


// // Q 7

// function determineGreeting(time) {
//     if (time >= 0 && time <= 1159) {
//         console.log("Good Morning.");
//     } else if (time >= 1200 && time <= 1759) {
//         console.log("Good Afternoon.");
//     } else if (time >= 1800 && time <= 2359) {
//         console.log("Good Evening.");
//     } else {
//         console.log("Invalid time input.");
//     }
// }

// let userTime = parseInt(prompt("Enter the time in 24-hour format (1900 for 7pm):"));

// if (userTime >= 0 && userTime <= 2359) {
//     determineGreeting(userTime);
// } else {
//     console.log("Invalid time input.");
// }





               /*                                   // chapters 14-16


// Q 1

let studentNames = ['Talha ','Hussan ','Bilal ','Anas'];

studentNames [2] = "Hamza";

document.write  (studentNames [2]);

// Q 2

let studentData = {
    studentNames: []
};

// Q 3

//                  0         1          2        3
let fruitsName = ["apple", "banana", "orange", "grape"];

console.log(fruitsName[0]);
console.log(fruitsName[2]);


// Q 4

let numbersArray = [1, 2, 3, 4, 5];

console.log(numbersArray[0]); 
console.log(numbersArray[2]); 


// Q 5

let booleanArray = [true, false, true, false];

console.log(booleanArray[0]);
console.log(booleanArray[1]);


// Q 6

let mixedArr = ["apple", 123, true, ["banana", "orange"], { name: "talha", age: 23 }];

console.log(mixedArr[0]); 
console.log(mixedArr[1]); 
console.log(mixedArr[2]); 
console.log(mixedArr[3]); 
console.log(mixedArr[4]); 


// Q 7

// Declare and initialize an array with education qualifications
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Accessing elements of the array
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ol>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");


// Q 8

let studentNames = ["Talha", "anas", "bilal"];

let studentScores = [420, 380, 450];

let totalMarks = 500;
let studentPercentages = [];
for (let i = 0; i < studentScores.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    studentPercentages.push(percentage);
}

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i] + " Marks " + studentScores[i] + " out of " + totalMarks + ", Percentage: " + studentPercentages[i] + "%");
}


// Q 9

let colors = ["Red", "Green", "Blue"];

document.write("<h3>Original Array:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

let colorToAddBeginning = prompt("Enter the color you want to add to the beginning:");
colors.unshift(colorToAddBeginning);

document.write("<h3>Array After Adding Color to the Beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

let colorToAddEnd = prompt("Enter the color you want to add to the end:");
colors.push(colorToAddEnd);


// Q 10

let studentScores = [85, 72, 93, 64, 78];

studentScores.sort(function(a, b) {
    return a - b;
});

console.log("Student Scores in Ascending Order:");
console.log(studentScores);


// Q 11

let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];

let selectedCities = [];

selectedCities = cities.slice(0, 3 );

console.log("Selected Cities:");
console.log(selectedCities);
 

// Q 12

var arr = ["This", "is", "my","new","cat"];

var singleString = arr.join("\n");

console.log(singleString);


// Q 13

let fifoQueue = [];

fifoQueue.push("keboard");
fifoQueue.push("mouse");
fifoQueue.push("printer");

let out1 = fifoQueue.shift();
let out2 = fifoQueue.shift();
let out3 = fifoQueue.shift();

console.log(" out1:\n",out1);
console.log(" out2:\n",out2);
console.log(" out3:\n",out3);


// Q 14

let lifoStack = [];

lifoStack.push("moniter");
lifoStack.push("printer");
lifoStack.push("mouse");
lifoStack.push("keboard");

let firstValue = lifoStack.pop();
let lastValue = lifoStack.pop();
let secondLastValue = lifoStack.pop();
let thirdLastValue = lifoStack.pop();

console.log(" out:\n", thirdLastValue);
console.log(" out:\n", lastValue);
console.log(" out:\n", secondLastValue);
console.log(" out:\n", firstValue);


// Q 15

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
*/