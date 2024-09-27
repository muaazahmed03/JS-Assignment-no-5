// Chapter 14 to 16 

// Q1 
// var arr = [];

// Q2 
// var array = new array();

// Q3 
// var arr = ["muaaz", "ahmed", "fazal"]

// Q4 
// var num = [10, 20, 30, 40, 50]

// Q5 
// var boolean = [true, false, true, false]

// Q6 
// var mix = [true, 1, 9, 4, null, "muaaz", "ahmed"]

// Q7 
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// document.write(`${qualification[0]} <br>`)
// document.write(`${qualification[1]} <br>`)
// document.write(`${qualification[2]} <br>`)
// document.write(`${qualification[3]} <br>`)
// document.write(`${qualification[4]} <br>`)
// document.write(`${qualification[5]} <br>`)
// document.write(`${qualification[6]} <br>`)
// document.write(`${qualification[7]} <br>`)

// Q8 
// var student = ["muaaz", "ahmed", "fazal"];
// var scr = [490, 300, 340];

// for (var i = 0; i < student.length; i++) {
//     var percentage = (scr[i] / 500) * 100; 
//     console.log(`Student Name: ${student[i]}`);
//     console.log(`Score: ${scr[i]} out of 500`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`); 
// }

// Q9 
// a 
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
//     colors.unshift(colorToAddBeginning);

// b 
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// c 
// colors.unshift("black", "white");

// d 
// colors.shift();

// e 
// colors.pop();

// f 
// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorToAdd = prompt("Enter the color you want to add:");
// colors.splice(indexToAdd, 0, colorToAdd);

// g 
// var indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(indexToDelete, numberOfColorsToDelete);

// Q10 
// var student_scr = [90, 58, 62, 60, 85, 81, 90, 67];

// console.log("Original Scores:", student_scr);
// student_scr.sort(function(a, b) {
//     return a - b; 
// });
// console.log("Sorted Scores:", studentScores);

// Q11 
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
// var selectedCities = cities.slice(0, 3);
// console.log("Original Cities:", cities);
// console.log("Selected Cities:", selectedCities);

// Q12 
// var arr = ["He ", "is ", "my ", "friend"];
// var singleString = arr.join(""); 
// console.log(singleString);

// Q13 
// var fifoQueue = [];
// fifoQueue.push("Value 1");
// fifoQueue.push("Value 2"); 
// fifoQueue.push("Value 3"); 
// console.log(fifoQueue.shift()); 
// console.log(fifoQueue.shift()); 
// console.log(fifoQueue.shift()); 
// console.log("Current Queue State:", fifoQueue); 

// Q14
// var lifoStack = [];
// lifoStack.push("Value 1");
// lifoStack.push("Value 2"); 
// lifoStack.push("Value 3");
// console.log(lifoStack.pop()); 
// console.log(lifoStack.pop()); 
// console.log(lifoStack.pop()); 
// console.log("Current Stack State:", lifoStack);


// Q15 
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<label for='manufacturers'>Choose a phone manufacturer:</label>");
// document.write("<select id='manufacturers'>");
// document.write("<option value='" + manufacturers[0] + "'>" + manufacturers[0] + "</option>");
// document.write("<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>");
// document.write("<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>");
// document.write("<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>");
// document.write("<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>");
// document.write("<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>");
// document.write("</select>");