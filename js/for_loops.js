"use strict";

//
//     The first expression is called once before the first loop iteration starts and allows for initialization of loop variables.
//
// The second expression is a condition that will decide if the loop should start/continue. It is called before each loop iteration.
//
// The third expression allows for code that should be executed at the end of each loop iteration. Most often, the incrementing of loop
// counters takes place here.



// example
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        console.log('7 x ' + i + " = " + input * i);
    }
}
showMultiplicationTable(7);



for (var i = 0; i < 10; i++) {
    var random = (Math.floor(Math.random() * 180) + 20);
    if (random % 2 === 0) console.log(random + " is even");
    else console.log(random + " is odd");
}


// This is the simplest method
for (var i = 1; i < 10; i++) {
    console.log (i.toString().repeat(i));
}


//This is the hardest method
// for (var outer = 1; outer < 10; outer++){
//     var output = "";
//     for (var inner = 1; inner <= outer; inner++) {
//         output += outer;
//     }
//         console.log(output)
// }



    for (var i = 100; i > 0; i -= 5) {
        console.log(i);
    }




    function fizzbuzz(input) {
        if (input % 15 === 0) {
            console.log("fizzbuzz");
        } else if (input % 5 === 0) {
            console.log("buzz")
        } else if (input % 3 === 0) {
            console.log("fizz")
        } else {
            console.log("You're number neither Fizzes, nor Buzzes")
        }
    }
    fizzbuzz(30);
