"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var enterNumber = confirm("Would You Like To Enter A Number?");
// if (enterNumber === true) {
//     var userNumber = Number(prompt("Well Hurry Up And Do It!!"));
// } else {
//     confirm("Well I Didn't Want Your Number Anyways!");
// }if (userNumber % 2 === 0) {
//     alert("Your Number Is Even")
// } else {
//     alert("You're Number Is Odd, Just Like you");
// }
// var userNumberPlus = userNumber + 100;
// alert("Your Number Plus 100 Equals:" + userNumberPlus);
// if (userNumber >= 0) {
//     alert("Your Number Is Positive, Just Like You");
// } else {
//     alert("Your Number Is Negative, Just Like You");
// }
// console.log(userNumberPlus);


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(colorName) {
//     if (colorName === "blue") {
//         alert("The Pen Is Blue, The PEN IS BLUUUUUE!!!")
//     } else if (colorName === "red") {
//         alert("The Strawberries Taste Like Strawberries")
//     } else if (colorName === "cyan") {
//         alert("Is That Even A Real Color?")
//
//     }
// }
//     analyzeColor(randomColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)

    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

// function color(randomColor) {
//     return randomColor;
// }
// console.log(randomColor);
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

// function analyzeColor(colorReply) {
//     var colorConfirm;
//     switch (colorReply) {
//         case "red":
//             colorConfirm = "Red Is My Friends Hair Color Hahaha";
//             break;
//         case "orange":
//             colorConfirm = "Orange Is A Color And A food";
//             break;
//         case "yellow":
//             colorConfirm = "Dont Eat Yellow Snow";
//             break;
//         case "green":
//             colorConfirm = "Green Is The Color Of Grass!";
//             break;
//         case "blue":
//             colorConfirm = "Blue Is A Color And Not A food";
//             break;
//         case "indigo":
//             colorConfirm = "Do Not Name Your Kids This";
//             break;
//         case "violet":
//             colorConfirm = "I Think My Mom Likes This Color";
//             break;
//
//     }
//     return colorConfirm;
// }

// alert(analyzeColor(randomColor));
// console.log(randomColor);


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

// var userColor = prompt("Hello Dude or Dudette, What's Your Favorite Color?");
// alert(analyzeColor(userColor));


    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a problem in Walmart, each customer is accidentally given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    var luckyNumber = Math.floor(Math.random() * 6);
    alert("Your Lucky Number Is:" + luckyNumber);
    var customerTotal = Number(prompt("Please Enter Your Total Bill:"));
    function calculateTotal(luckyNumber, customerTotal) {
        if (luckyNumber === 1) {
            return customerTotal - (customerTotal * .1);
        } else if (luckyNumber === 2) {
            return customerTotal - (customerTotal * .25);
        } else if (luckyNumber === 3) {
            return customerTotal - (customerTotal * .35);
        } else if (luckyNumber === 4) {
            return customerTotal - (customerTotal * .5);
        } else if (luckyNumber === 5) {
            return customerTotal - (customerTotal);
        } else alert("Sorry You Don't Qualify For A Discount At This Time");
    }
        alert("Your discounted total is:" + calculateTotal(luckyNumber, customerTotal));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6



// var pizzaChoice = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaChoice);
//
// function pizzaMessage (pizzaPreference) {
//     var pizzaConfirmation;
//     switch (pizzaPreference) {
//         case "pineapple and hot sauce":
//             pizzaConfirmation = "What a coincidence, that's my favorite!";
//             break;
//         case "cheese":
//             pizzaConfirmation = "Just plain cheese? Okay...";
//             break;
//         case "anchovies":
//             pizzaConfirmation = "Barf-a-rama";
//             break;
//         case "ham":
//             pizzaConfirmation = "Easy To Spell And Good";
//             break;
//         default:
//             pizzaConfirmation = pizzaPreference + " isn't my favorite, but let's order some!";
//             break;
//     }
//     return pizzaConfirmation;
// }
// console.log(pizzaMessage(pizzaChoice));
// alert(pizzaMessage(pizzaChoice));