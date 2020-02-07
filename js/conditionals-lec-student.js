"use strict";

// console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
// var isAdmin = true;
// if(isAdmin){
   // display a specific navbar
// console.log("displaying Admin Navbar")
// }

//TODO Together: Send a 20% off coupon if its users birthday
// var isBirthday = true;
// if(isBirthday){
//     //send coup
//     // console.log("Sending coupon")
//
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
// if(isRainy){
//     // alert ("its Raining");
// }
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var haveEnoughMoney = 900;
// if(haveEnoughMoney > 1000){
//     alert("you are broke");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// //   var  numberOfLives = 1;
//     if(numberOfLives === 0 ){
//         alert("Sorry game over");
//     }
//     else if(numberOfLives > 0){
//         // alert("GET READY!!")
//     }

    //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var isSnowing = true;
// if(isSnowing){
//     // alert ("Its Snowing");
// }


//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var number = 12;
// function   greaterThanTen(number) {
//     if (greaterThanTen > number) {
//         alert("True");
//     }
// }
// console.log(greaterThan10("True"));

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
// if(isAdmin){
//     console.log("displaying Admin Navbar");
// } else {
//     console.log("Displaying Regular Navbar");
// }


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = false;
// if(isRainy){
//     alert ("its Raining");
// }else {
//     alert ("Have A Nice Day");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var  numberOfLives = 1;
// if(numberOfLives === 0 ){
//     alert("Sorry game over");
// }
// else{
//     alert("GET READY!!");
// }



//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var  weather = "snowing";
// if(weather = "snowing"){
//     // alert("it's snovving");
// }else{
//     // alert("check back for further details");
// }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

var numberInput = 2;
if(numberInput > 10){
    // alert("True");
}else{
    // alert("the Number Is Less Than Ten");
}


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

function checkIfGameIsOver(numberOfLives) {
    if(numberOfLives === 0){
        return "Sorry Game Over";
    } else {
        return "Get Ready!";
    }
}
// console.log(checkIfGameIsOver(2));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to
// "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all
// other cases

var weather = "raining"


if(weather === "snowing"){
    alert("It's Snowing");
}else if(weather === "raining") {
    alert("it's raining");
}   else{
        alert("have a nice day");
}
function checkWeather(weather){
    if(weather === "snowing"){
        return ("It's Snowing");
    }else if(weather === "raining") {
        return("it's raining");
    }   else{
        return("have a nice day");
    }
}
alert(checkWeather("sleet"));



//TODO Together: refactor the above statement as a function

Together: PIZZA PREFERENCE EXAMPLE

var pizzaPreference = (prompt("What kind of pizza do you like?").toLowerCase);
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else if (pizzaPreference === "ham"){
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}




//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what to do when
// approaching that color light at an intersection.

// function trafficLight(trafficLightColor) {
//
//     if (trafficLightColor === "red") {
//         return ("You better Stop!!");
//     } else if (trafficLightColor === "yellow") {
//         return ("Slow Down Buddy!!!");
//     } else if(trafficLightColor === "green"){
//         return ("Go daddy, Go!!!");
//     } else{
//         return("Proceed With Caution")
//     }
// }
// alert(trafficLight("not red"));



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit,
// else they are. If they are eligible, check age. If they are 15 they are eligible
// for a learners permit, if they are 16 or older and have a permit, they are eligible
// for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

var userAge = 17;
var hasPermit = true;
if( userAge < 15 ) {
    alert("NO!");
}else {
    if( userAge === 15){
        alert("You Are Eligible");
    } else if ((userAge >= 16) && hasPermit){
        alert("You Are Qualified To Drive")
    }else if((userAge >=16) && !hasPermit){
        alert("You Are Not Eligible For Permit")
    }
}



// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

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


//TODO: Write a switch statement that evaluates weather as the condition.
// Check for "rainy", "sunny", "snow", and a default case.


// var weather = prompt("What Is The Weather?")
// console.log("User Weather Input:" + weather);
//
// function weatherMessage(weatherReply){
//     var weatherConfirmation;
//     switch (weatherReply) {
//         case "rainy":
//             weatherConfirmation = "Get Your Raincoat";
//             break;
//         case "sunny":
//             weatherConfirmation = "Wear Sunblock";
//             break;
//         case "snow":
//             weatherConfirmation = "Give Up Hope, This Is Texas and This Is The Apocalypse";
//             break;
//         default:
//             weatherConfirmation = "No...This Is Not A Real Weather Option."
//     }
//     return weatherConfirmation;
// }
// alert(weatherMessage(weather));
// console.log(weather);


//TODO: Rewrite the intersection function from earlier as a switch statement.


// var lightColor = "red";
//     switch (lightColor){
//         case "red":
//             alert("Whooooooa Nellie!");
//             break;
//         case "yellow":
//             alert("Gun It!!!!");
//             break;
//         case "green":
//             alert("GO GO GO GO GO!!!");
//             break;
//         default:
//             alert("What Kind Of Road Are You Driving On?");
//     }
// console.log(lightColor)



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

