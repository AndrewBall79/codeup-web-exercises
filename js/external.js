"use strict";

// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website!');
//
// var userInput = prompt('What Is Your Favorite Color?');
// alert (userInput  + " is my favorite color too");

// Complete exercise 3 from the previous lesson, but write
// your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead
//     use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.


var brotherBear = Number(prompt('How Many Days Do You Want to Rent Brother Bear For?'));
var littleMm = Number(prompt('How Many Days Do You Want to Rent The Little Mermaid For?'));
var hercules = Number(prompt('How Many Days Do You Want to Rent Hercules For?'));
var totalCost = ((brotherBear + littleMm + hercules)*3);
alert ("Your total rental cost is $" + totalCost);

// You have rented some movies for your kids: The little
// mermaid (for 3 days), Brother Bear(for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're
// going to like it).
// If price for a movie per day is $3, how much will you have
// to pay?


// var goog = 400
// var ama = 380
// var fB = 350
// var googHours = Number(prompt('How Many Hours Did You Work For Google?'));
// var amaHours = Number(prompt('How Many Hours Did You Work For Amazon?'));
// var fBHours = Number(prompt('How Many Hours Did You Work For FaceBook?'));
// var totalPay = (goog*googHours)+(ama*amaHours)+(fB*fBHours)
// alert ("Your total pay for this week is $" + totalPay + " before taxes" )


//     Suppose you're working as a contractor for 3 companies:
//     Google, Amazon and Facebook, they pay you a different
//     rate per hour. Google pays $400, Amazon $380, and
//     Facebook $350. How much will you receive in payment
//     for this week? You worked 10 hours for Facebook, 6 hours
//     for Google and 4 hours for Amazon.

var classFull = confirm("Is This Class Full?");
var classSchedule = confirm("Do You Have Class At This Time?");
var enroll = (  <= 0 ! classFull & & ! classAtEight);
alert ("You Cannot Join Class At This Time");






// A student can be enrolled in a class only if the class
// is not full and the class schedule does not conflict
// with her current schedule.


var numOfItems = prompt('How Many Items Do You Have?');
var member = confirm('Are You A Premium Member?');


//     A product offer can be applied only if a person
//     buys more than 2 items, and the offer has not expired.
//     Premium members do not need to buy a specific amount
//     of products.