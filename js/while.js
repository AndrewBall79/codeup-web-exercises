"use strict";

// console.log("JavaScript");
//
// var i = 1;
// while (i < 65536){
//     console.log (i *= 2);
// }

// An ice cream seller can't go home until she sells all ' +
// 'of her cones. Write a JS program that generates a random ' +
// 'number between 50 and 100 representing the amount of cones ' +
// 'to sell. Your code should generate numbers between 1 and 5, ' +
// 'simulating the amount of cones being bought by her clients. ' +
// 'Use a do-while loop to log to the console the amount of ' +
// 'cones sold to each person. This is how you get the random ' +
// 'numbers.

var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("starting with " + allCones + " cones");

do {
    var sellingCones =Math.floor(Math.random() * 5) + 1;
    if (allCones < sellingCones){
        console.log("Sorry I only have" + allCones + "left");
    }
    else {
        allCones -= sellingCones;
        console.log(sellingCones + " cones sold!");

    }
} while (allCones > 0);
        console.log("Sorry Man, I'm sold out!");




