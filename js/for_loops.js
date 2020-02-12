"use strict";



// In the example above, you can see that a for loop takes 3 expressions separated by semicolons.
//
//     The first expression is called once before the first loop iteration starts and allows for initialization of loop variables.
//
// The second expression is a condition that will decide if the loop should start/continue. It is called before each loop iteration.
//
// The third expression allows for code that should be executed at the end of each loop iteration. Most often, the incrementing of loop counters takes place here.
//
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

// function showMultiplicationTable(input) {
//     for (var i = 1; i <= 10; i++) {
//         console.log('7 x ' + i + " = " + input * i);
//     }
// }
// showMultiplicationTable(7);



    //
    // for (var i = 0; i < 10; i++) {
    //     var random = (Math.floor(Math.random() * 180) + 20);
    //     if (random % 2 === 0) console.log(random + " is even");
    //     else console.log(random + " is odd");
    // }
    //


    for (var i = 1; i < 9; i++) {
            console.log(i.toString());
        console.log(i.toString()+i);
        console.log(i.toString()+i+i);
    }


// function showSubtract(input) {
//     for (var i = 100; i > 0; i -=5) {
//         console.log(i );
//     }
// }
// showSubtract();